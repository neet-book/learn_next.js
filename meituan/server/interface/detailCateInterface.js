const Router = require('koa-router')
const database = require('../db/index.js')
const router = new Router()

async function getDetail() {
  // 获取数据库实例
  const db = await database
  await db.coll('detail')
  //获取数据库数据
  const detailArr = await db.find()
  const details = []
  // 整理数据
  for (const detail of detailArr) {
    details[detail.cat_id] === undefined ? details[detail.cat_id] = [detail] : details[detail.cat_id].push(detail)
  }

  return details
}

// 获取数据
let details

getDetail()
.then(re => {
  details = re
})
.catch( err => {
  details = false
  console.log('detail获取失败', err.message)
})

router.get('/detail', async ctx => {
  details === false ?
  ctx.body = {
    state: 202,
    message: 'detail数据获取失败',
    data: []
  } :
  ctx.body = {
    state: 200,
    message: 'detail数据获取成功',
    data: details
  }
})

module.exports = router