const Router = require('koa-router')
const Database = require('../db/index.js')
const router = new Router()

async function getDetail() {
  // 链接数据库获取数据库实例
  const db = new Database()
  await db.connect('meituan', 'detail').catch(e => console.log(e))
  // //获取数据库数据
  const detailArr = await db.find().catch(e => {
    console('数据获取失败', e)
    return []
  })
  const totla = []
  const detailsCat = []
  // // 整理数据
  for (const detail of detailArr) {
    totla[detail.cat_id] === undefined ? totla[detail.cat_id] = [detail] : totla[detail.cat_id].push(detail)
  }

  totla.forEach((details, cat_id) => {
    detailsCat.push({
      cat_id,
      details
    })
  })
  return detailsCat
}

// 获取数据
let details

getDetail()
.then(re => {
  details = re
}).catch( err => {
  details = false
  console.log('detail获取失败 -> ', err.message)
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