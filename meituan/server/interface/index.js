const Router = require('koa-router')

// 接口
const category = require('./categoryInterface.js')
const city = require('./cityInterface.js')
const detail = require('./detailCateInterface.js')
const minsu = require('./minsuInterface.js')
const movie = require('./movieInterface.js')
const recommend = require('./recommendInterface.js')

const router = new Router({
  prefix: '/api'
})

router.get('/category', category)
router.get('/city', city)
router.get('/detail', detail)
router.get('/minsu/:city', minsu)
router.get('/movie', movie)
router.get('/recommend', recommend)

module.exports = router