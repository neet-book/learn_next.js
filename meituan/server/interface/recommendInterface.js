const router = require('./index.js')

async function getRecommend() {
  const db = await require('../dbs/index-backup.js')
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


module.exports = async (ctx) => {
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
}