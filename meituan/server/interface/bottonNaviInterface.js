async function getNavList() {
  const db = await require('../db/index.js')
  return await db.coll('bottonNav').find()
}

let list = []

getNavList()
  .then(data => {
    list = data
  })
  .catch(e => {
    console.log('botton nav list获取失败：', e.message)
    list = false
  })

  module.exports = async ctx => {
    let id = ctx.params.city
    if ( list !== false) {
      ctx.body = {
        state: 200,
        message: 'botton nav list数据获取成功',
        data: list
      } 
    } else {
      ctx.body = {
        state: 500,
        message: 'botton nav list数据获取失败',
        data: []
      }
    }
  }