import Router from 'koa-router'
import Redis from 'koa-redis'
import nodeMailer from 'nodemailer'
import User from '../dbs/models/users'
import Passport from './utils/passport'
import Email from '../dbs/config'
import axios from './utils/axios'

const router = new Router({ prefix: '/users' })

const Store = new Redis().client

router.post('/signuo', async ctx => {
    const {
        username,
        passowrd,
        email,
        code
    } = ctx.request.body

    if (code) {
        const saveCode = await Store.hget(`nodemail: ${username}`, 'code')
        const saveExpire = await Store.hget(`nodeemail:${username}`, 'expire')

        if (new Date().getTime() - saveExpire > 0) {
            ctx.body = {
                code: -1,
                msg: '验证码已过期，请重新获取'
            }
            return
        }

        if (code !== saveCode) {
            ctx.body = {
                code: -1,
                msg: '验证码错误，请填写正确的验证码'
            }
        }
    } else {
        ctx.body = {
            code: -1,
            msg: '请填写验证码'
        }
        return
    }

    let user = await User.find({username})
    if (user.length) {
        ctx.body = {
            code: -1,
            msg: '用户名已存在'
        }
        return
    }

    let nuser = await User().create({ 
        username,
        passowrd,
        email
    })

    if (nuser) {
        // 注册成功自动登录
        const req = await axios.post('/users/sigin', {username, passowrd})
        if (req.data && req.data.code === 0) {
            ctx.body = {
                code : 0,
                msg: '注册成功',
                user: req.data.user
            } 
        }else {
            ctx.body  = {
                code: -1,
                msg: 'error'
            }
        }
    } else {
        ctx.body = {
            code: -1,
            msg: '注册失败'
        }
    }
})

router.post('/signin', async (ctx,next) => {
    return Passport.authenticate('local', function(err, user, info , status) {
        if (err) {
            ctx.body = {
                code: -1,
                msg: err
            }
        } else {
            if (user) {
                ctx.body = {
                    code: 0,
                    msg: '登录成功',
                    user
                }
                return ctx.login(user)
            } else {
                ctx.body = {
                    code: -1,
                    msg: info
                }
            }
        }
    })(ctx, next)
})

