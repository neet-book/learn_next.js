const Database = require('../db/index.js')
const downloadImage = require('./download-Image.js')
const path = require('path')
const url = require('url')
start().catch(e => console.log(e))

async function start() {
  const dbUrl = ' mongodb://127.0.0.1:27017/'
  const db = await new Database(dbUrl).connect('meituan')
  await getMinsuImage(db)

  db.close()
}


async function getImage(imgUrl, size, saveDir, db) {
	// 构建下载地址
	const downloadUrl = createDownloadUrl(imgUrl)
	// 获取文件名
	const filename = parserFileName(imgUrl)
	// 构建保存地址
	const dir = path.resolve(`../../${saveDir}`)
	// 下载图片
	return await downloadImage(dir, imgUrl, filename)
	
}


async function getMinsuImage(db) {
  // 切换集合获取数据
  const citys = await db.coll('minsu').find()
  let success = 0
  let failed = 0
  for(const { minsu, cityId } of [citys[0]]) {
  	let index = 0
    for (const ms of minsu) {
    	const res = await getImage(ms.coverImage, '', `image/minsu/${cityId}`)
      console.log(res)
    	if (res) {
        
    		await db.updateOne(
  				{ cityId: cityId },
  				{ $set: { [`minsu.${index}.imgSrc`]: `http://locolhose:3000/image/minsu/${cityId}/${filename}` }},
  				true
				)
    	}
    	res ? success++ : failed++
    	index++
  	}
  }

  console.log(`获取民宿图片完成： 成功${success}, 失败${failed}`)
}


// async function getMovieImage(db) {
//   // 切换集合获取数据
//   const recommends = await db.coll('movies').find()
//   // 保存地址
//   const dir = path.resolve('../../image/movies')
  
//   for(const rec of recommends) {
//     const imgUrl = createImageUrl(rec.img)
//     const filename = parserFileName(rec.img)
//     // 获取图片
//     await downloadImage(dir, imgUrl, filename)
//     .then((re) => {
//       // 检查是否成功下载
//       if (!re) return
//       // 存储图片链接
//       db.updateOne(
//         { _id: rec._id},
//         { $set: { imgSrc: `http://locolhose:3000/image/movie/${filename}` }},
//         true
//       )
//     })
//     .catch(e => {
//       console.log('下载推荐图片失败: ', e.message)
//       return false
//     })
//   }
// }

// async function getRecommentImage(db) {
//   // 切换集合获取数据
//   const recommends = await db.coll('recommend').find()
//   // 保存地址
//   const dir = path.resolve('../../image/recommend')
  
//   for(const rec of recommends) {
//     const imgUrl = createImageUrl(rec.imgUrl)
//     const filename = parserFileName(rec.imgUrl)
//     // 获取图片
//     await downloadImage(dir, imgUrl, filename)
//     .then(() => {
//       // 检查是否成功下载
//       if (!re) return
//       // 存储图片链接
//       db.updateOne(
//         { _id: rec._id},
//         { $set: { imgSrc: `http://locolhose:3000/image/recommend/${filename}` }},
//         true
//       )
//     })
//     .catch(e => {
//       console.log('下载推荐图片失败: ', e.message)
//       return false
//     })
//   }
// }

function createDownloadUrl(url, size) {
  const pathname = new URL(url).pathname
  const rule = /[^(\/w\.h\/)]/
  const index = pathname.search(rule)
  // console.log(arr)
  return `https://p0.meituan.net/${ index > -1 ? pathname.slice(index) : pathname }${size}`
}

function parserFileName(url) {
  let pathname = new URL(url).pathname
  return path.posix.basename(pathname)
}
