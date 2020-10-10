module.exports =  {
    dbs: 'mongodb://127.0.0.1:27017/test',
    redis: {
        get host() {
            return '127.0.0.1'
        },
        get port() {
            return 6379
        }
    },
    // 验证码邮箱配置
    smtp: {
        get host() {
            return 'smtp.qq.com'
        },
        get user() {
            return '6515732@qq.com'
        },
        get pass() {
            // new
            // return 'vvxheifyxfxjcagd'
            return 'vrmajqvzrazgcaia'
        },
        // 验证码生成
        get code() {
            return Math.random().toString(16).slice(-4).toUpperCase()
        },
        // 验证码过期时间
        get expire() {
            return () => new Date().getTime() + 60 * 1000 * 60
        }
    }
}