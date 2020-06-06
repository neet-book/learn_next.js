const Database = require('../db/index.js')
const downloadImage = require('./download-Image.js')
const path = require('path')
const url = require('url')
start().catch(e => console.log(e))

async function start() {
  const dbUrl = ' mongodb://127.0.0.1:27017/'
  const db = await new Database(dbUrl).connect('meituan')
  await getMovieImage(db)

  db.close()
}


async function getImage(filename, imgUrl, size, saveDir) {
	// 构建下载地址
	const downloadUrl = createDownloadUrl(imgUrl, size)
	// 构建保存地址
	const dir = path.resolve(`../../${saveDir}`)
	// 下载图片
	return await downloadImage(dir, downloadUrl, filename)
}


async function getMinsuImage(db) {
  // 切换集合获取数据
  const citys = await db.coll('minsu').find()
  let success = 0
  let failed = 0
  for(const { minsu, cityId } of citys) {
  	let index = 0
    for (const ms of minsu) {
    	// const res = await getImage(ms.coverImage, '', `image/minsu/${cityId}`)
    	if (true) {
        const filename = parserFileName(ms.coverImage)
    		await db.updateOne(
  				{ cityId: cityId },
  				{ $set: { [`minsu.${index}.imgSrc`]: `/image/minsu/${cityId}/${filename}` }},
  				true
				)
    	}
    	true ? success++ : failed++
    	index++
  	}
  }

  console.log(`获取民宿图片完成： 成功${success}, 失败${failed}`)
}


async function getMovieImage(db) {
  // 切换集合获取数据
  const movies = await db.coll('movies').find()
  // 保存地址
  let success = 0, failed = 0
  for(const { _id, img } of movies) {
    // const imgUrl = createImageUrl(rec.img)
    const filename = parserFileName(img)
    // 获取图片
    // const re = await getImage(filename, `http://localhost:3000/movie/${filename}`, '@214w_297h_1e_1c', 'image/movie')
     
    if (true) {
      // 存储图片链接
      await db.updateOne(
        { _id },
        { $set: { imgSrc: `/image/movie/${filename}` }},
        true
      )
    }

    true ? success++ : failed++
  }
  console.log(`获取电影图片完成： 成功${success}，失败${failed}`)
}

async function getRecommentImage(db) {
  // 切换集合获取数据
  const recommends = await db.coll('recommend').find()
  let success = 0, failed = 0

  for (const { _id, imgUrl } of recommends) {
    // 获取文件名
    const filename = parserFileName(imgUrl)
    // const re = await getImage(filename, imgUrl, '@214w_120h_1e_1c', '../../image/recommend', db)

    if (true) {
      await db.updateOne({ _id }, { $set: { imgSrc: `http://localhost:3000/image/recommend/${filename}` }})
    }

    // re ? success++ : failed++
  }
  
  console.log(`获取推荐图片完成: 成功${success}，失败${failed}`)
}

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

async function updateRecommendDate(db) {
  const recommends = db.coll('recommend').find()

}