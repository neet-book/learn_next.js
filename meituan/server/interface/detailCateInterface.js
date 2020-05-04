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

getDetail().then(re => {
  details = re
})

router.get('/detail', async ctx => {
  ctx.body = details
})

module.exports = router