import passport from 'koa-passport'
import LocalStrategy from 'passport-local'
import UserModel from '../../dbs/models/users'
import crypto from 'crypto'

// 定义登录验证策略
passport.use(new LocalStrategy(
    async function (username, password, done) {
        let where = { username }
        try {
            let result = await UserModel.findOne(where)
            passwordMD5 = crypto.createHash('md5').update(result.password)
            if (result != null) {
                if (result.password === passwordMD5.digest().toString('hex')) {
                    return done(null, result, '登录成功')
                } else {
                    return done(null, false, '密码错误')
                }
            } else {
                return done(null, false, '用户不存在')
            }
        } catch(err) {
            done(err, '验证出错')
        }
    })
)

// 使用session时需要使用的函数
// 序列化，用户信息存储到session中
passport.serializeUser(function(user, done) {
    done(null, user)
})
// 反序列化，将用户信息从session中提取
passport.deserializeUser(function(user, done) {
    done(null, user)
})

export default passport