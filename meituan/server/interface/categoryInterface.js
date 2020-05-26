const router = require('./index.js')

async function getCategory() {
  const datebase = await require('../db/index.js')
  //获取数据库数据
  datebase.coll('category')
  const categoryArr = await datebase.find()

  // 整理数据
  const store = []
  const categorys = []

  // 根据相同cat_id保存在同一数组
  for (const cat of categoryArr) {
    store[cat.cat_id] === undefined ? store[cat.cat_id] = [cat] : store[cat.cat_id].push(cat)
  }

  store.forEach((cats, cat_id) => {
    categorys.push({
      cat_id,
      cats
    })
  })
  return categorys
}

// 获取数据
let categorys

getCategory()
.then(re => {
  categorys = re
}).catch( err => {
  categorys = false
  console.log('category获取失败 -> ', err)
})


module.exports = async ctx => {
  categorys === false ?
  ctx.body = {
    state: 202,
    message: 'category数据获取失败',
    data: []
  } :
  ctx.body = {
    state: 200,
    message: 'category数据获取成功',
    data: categorys
  }
}