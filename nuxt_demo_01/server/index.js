const Koa = require('koa')
const parser = require('koa-bodyparser')
const session = require('koa-generic-session')
const redis = require('koa-redis')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const logingInterface = require('./interface/loging.js')

const app = new Koa()
app.keys = ['key', 'keys']
// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = app.env !== 'production'

app.use(parser())
app.use(session({
  // key: 'pre',
  // prefix: 'sse',
  store: redis()
}))

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

  // interface
  app.use(logingInterface.routes()).use(logingInterface.allowedMethods())

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
