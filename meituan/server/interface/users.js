import Router from 'koa-router'
import Redis from 'koa-redis'
import nodeMailer from 'nodemailer'
import User from '../dbs/models/users'
import passport from './utils/passport'
import Email from '../dbs/config'
import axios from './utils/axios'

const router = new Router({ prefix: '/users' })

const Store = new Redis().client

class RegisterError extends Error {
    constructor(...args) {
        super(...args)
    }
}

// 注册
router.post('/signon', async ctx => {
    const {
        username,
        passowrd,
        email,
        code
    } = ctx.request.body
    try {
        // 验证码验证
        if (!code) throw RegisterError('请填写验证码')
        const saveCode = await Store.hget(`nodemail: ${username}`, 'code')
        const saveExpire = await Store.hget(`nodeemail:${username}`, 'expire')
        if (new Date().getTime() - saveExpire > 0) throw RegisterError('验证码已过期，请重新获取')
        if (saveCode !== code)throw RegisterError('验证码错误，请填写正确的验证码')
        // 用户名确认
        const user = await User.find({username})
        if (user.length) throw RegisterError('用户名已存在')
        let newuser = await User.create({ 
            username,
            passowrd,
            email
        })
        if (!newuser) throw RegisterError('注册失败')

        // 注册成功自动登录
        const resp = await axios.post('/users/sigin', {username, passowrd})
        if (resp.data && resp.data.code !== 0) RegisterError(`自动登录失败, ${resp.data ? resp.data.msg : '登录时出错'}`)
        ctx.body = {
          code : 0,
          msg: '注册成功',
          user: ctx.state.user
      } 
    } catch (err) {
        if (err instanceof RegisterError) {
          ctx.body = {
            code: -1,
            msg: err.message
          }
        } else {
          ctx.body = {
            code: -1,
            msg: `注册出错`
          }
          throw err
        }
    }
})

// 登录
router.post('/signin', async (ctx,next) => {
    return passport.authenticate('local', function(err, user, info) {
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


// 登出
router.get('/siginout', async (ctx, next) => {
    await ctx.logout()
    if (ctx.isAuthenticated()) {
        ctx.body = {
            code: -1,
            msg: '注销失败'
        }
    } else {
        ctx.body = {
            code: 0,
            msg: '注销成功'
        }
        ctx.redirect(301, '/home')
    }
})

// 获取验证码
router.post('/verify', async (ctx, next) => {

})

export default router