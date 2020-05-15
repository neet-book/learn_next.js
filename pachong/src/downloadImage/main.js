const Database = require('../db/index.js')
const downloadImage = require('./download-Image.js')
const path = require('path')

start().catch(e => console.log(e))

async function start() {
  const dbUrl = ' mongodb://127.0.0.1:27017/'
  const db = await new Database(dbUrl).connect('meituan')
  await getRecommentImage(db)

  db.close()
}

async function getRecommentImage(db) {
  const recommends = await db.coll('recommend').find()
  const dir = path.resolve('../../image/recommend')
  
  for(const rec of recommends) {
    const imgUrl = createImageUrl(rec.imgUrl)
    const filename = parserFileName(rec.imgUrl)
    console.log(imgUrl)
    // 获取图片
    await downloadImage(dir, imgUrl, filename)
    .then((re) => {
      // 检查是否成功下载
      if (!re) return
      // 存储图片链接
      db.updateOne(
        { _id: rec._id},
        { $set: { url: `http://locolhose:3000/image/recommend${filename}` }},
        true
      )
    })
    .catch(e => {
      console.log('下载推荐图片失败: ', e.message)
      return false
    })
  }
}

function createImageUrl(url) {
  const pathname = new URL(url).pathname
  const rule = /[^(\/w\.h\/)]/
  const index = pathname.search(rule)
  // console.log(arr)
  return `https://p0.meituan.net/${ index > -1 ? pathname.slice(index) : pathname }@250w_150h_1e_1c`
}

function parserFileName(url) {
  let pathname = new URL(url).pathname
  return path.posix.basename(pathname)
}
