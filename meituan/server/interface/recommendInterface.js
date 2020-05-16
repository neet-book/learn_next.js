const Router = require('koa-router')
const router = new Router()

async function getRecommend() {
  const db = await require('../db/index.js')
  return await db.coll('recommend').find()
}

const recommendPro = getRecommend()
.then(recommends => {
  console.log('recommends获取成功')
  return recommends
})
.catch(e => {
  console.log('recommend获取失败：', e.message)
  return false
})

router.get('/recommend', async (ctx) => {
  const data = await recommendPro

  data === false ?
  ctx.body = {
    state: 202,
    message: 'recommend数据获取失败',
    data: []
  } :
  ctx.body = {
    state: 200,
    message: 'recommend数据获取成功',
    data
  }
})

module.exports = router