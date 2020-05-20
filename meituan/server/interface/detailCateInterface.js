const router = require('./index.js')

async function getDetail() {
  const database = await require('../db/index.js')
  //获取数据库数据
  database.coll('detail')
  const detailArr = await database.find()

  // 整理数据
  const totla = []
  const detailsCat = []

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
  console.log('detail获取失败 -> ', err)
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