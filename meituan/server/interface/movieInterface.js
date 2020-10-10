const router = require('./index.js')

async function getDate(coll) {
  const db = await require('../dbs/index-backup.js')
  return await db.coll(coll).find()
}

const promise = getDate('movies')
.then(data => {
  console.log('MovieList获取成功')
  return data
})
.catch(e => {
  console.log('MovieList获取失败：', e.message)
  return false
})

module.exports = async (ctx) => {
  const data = await promise
  data === false ?
  ctx.body = {
    state: 202,
    message: 'movie list数据获取失败',
    data: []
  } :
  ctx.body = {
    state: 200,
    message: 'movie list数据获取成功',
    data
  }
}