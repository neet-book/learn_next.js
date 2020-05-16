const Koa = require('koa')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

// 接口
const DetailCateInterface = require('./interface/detailCateInterface.js')
const CategoryInterface = require('./interface/categoryInterface.js')
const RecommendInterface = require('./interface/recommendInterface.js')

const app = new Koa()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = app.env !== 'production'

async function start () {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  await nuxt.ready()
  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // 接口

  // 分类接口
  app.use(CategoryInterface.routes()).use(CategoryInterface.allowedMethods())
  // 详细分类接口
  app.use(DetailCateInterface.routes()).use(DetailCateInterface.allowedMethods())
  // 推荐接口
  app.use(RecommendInterface.routes()).use(RecommendInterface.allowedMethods())

  app.use((ctx) => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
