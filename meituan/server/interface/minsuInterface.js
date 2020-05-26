const router = require('./index.js')

async function getMinsu() {
  const db = await require('../db/index.js')
  return await db.coll('minsu').find()
}

const minsu = {}

getMinsu()
.then(data => {
  for (let ms of data) {
    minsu[ms.cityId] = ms
  }
})
.catch(e => {
  console.log(`minsu获取失败${e.message}`)
  minsu = false
})

module.exports = async ctx => {
  let id = ctx.params.city
  if ( minsu === false || minsu[id] === undefined) {
    ctx.body = {
      state: 202,
      message: minsu[id] === undefined ? 'cityID 错误' : 'minsu数据获取成功',
      data: {}
    } 
  } else {
    ctx.body = {
      state: 200,
      message: 'minsu数据获取成功',
      data: minsu[id]
    }
  }
}