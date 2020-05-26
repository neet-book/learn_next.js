const router = require('./index.js')

async function getMinsu() {
  const db = await require('../db/index.js')
  return await db.coll('minsu').find()
}

const minsu = []

getMinsu()
.then(data => {
  minsu = data
})
.catch(e => {
  console.log(`minsu获取失败${e.message}`)
  minsu = false
})

router.get('/minsu', async ctx => {
  minsu === false ?
  ctx.body = {
    state: 202,
    message: 'minsu数据获取失败',
    data: []
  } :
  ctx.body = {
    state: 200,
    message: 'minsu数据获取成功',
    data: minsu
  }
}) 