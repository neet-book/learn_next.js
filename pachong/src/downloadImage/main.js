const Database = require('../db/index.js')
const downloadImage = require('./download-Image.js')
const path = require('path')

start().catch(e => console.log(e))

async function start() {
  const dbUrl = ' mongodb://127.0.0.1:27017/'
  const db = await new Database().connect('meituan')
  await getRecommentImage(db).catch(e => {
    console.log('下载推荐图片失败: ', e.message)
  })

  db.close()
}

async function getRecommentImage(db) {
  const recommends = await db.coll('recommend').find()
  const dir = path.resolve('../../image/recommend')
  
  for(const rec of [recommends[0]]) {
    // 获取图片
    const filename = await downloadImage(dir, rec.imgUrl)
    // 存储链接
    await db.updateOne(
      { _id: rec._id},
      { $set: { url: `http://locolhose:3000/image/recommend${filename}` }},
      true
    )
  }
}