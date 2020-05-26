const router = require('./index.js')

async function getCity() {
  const db = await require('../db/index.js')
  return await db.coll('city').find()
}

let cities = []

getCity()
.then(data => {
  cities = data
})
.catch(e => {
  console.log(`city获取失败${e.message}`)
  cities = false
})

module.exports = async ctx => {
  cities === false ?
  ctx.body = {
    state: 202,
    message: 'city数据获取失败',
    data: []
  } :
  ctx.body = {
    state: 200,
    message: 'city数据获取成功',
    data: cities
  }
}