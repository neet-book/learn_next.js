const Koa = require('koa')
const Router = require('koa-router')
const axios = require('axios');
const fs = require('fs');
const { JSDOM } = require('jsdom');
const Database = require('./db')
const { getRecommend, getMovie, getCityList, getMinsu } = require('./interface')

async function start() {
  let webStr = await readFile('../static/meituan.html')

  // 转化为DOM
  const { document } = new JSDOM(webStr).window

  // 链接数据库
  const db = new Database('mongodb://127.0.0.1:27017/')
  await db.connect('meituan')

  // // 获取页面静态数据
  // // const categorys = getCategory(document)
  // const cateDetail = await getCatDetail(document)
  // // console.log(cateDetail)
  // await db.coll('detail').insert(cateDetail)

  // const bottonnav = getBottonNav(document)
  // await db.coll('botton-nav').insert(bottonnav)

  // const footerLinks = getFooter(document)
  // await db.coll('footer-link').insert(footerLinks)

  // // 通过接口获取动态渲染内容
  // const recommend = await getRecommend()
  // await db.coll('recommend').insert(recommend)

  // const movies = await getMovie()
  // await db.coll('movies').insert(movies)

  // const cityList = await getCityList()
  // await db.coll('citys').insert(cityList)

  // const minsuList =  []
  // for(let { cityId, cityName } of cityList) {
  //   const minsu = await getMinsu(cityId)
  //   minsuList.push({
  //     cityId,
  //     minsu
  //   })
  // }

  // await db.coll('minshu').insert(minsuList)
  db.close()
}

start().catch(e => console.log('err: ', e))

const app = new Koa()
const router = new Router()
router.get('/', async ctx => {
  ctx.body = 'ok'
})

app.use(router.routes()).use(router.allowedMethods())
app.listen(3000)

// footer导航
function getFooter(dom) {
  const footerLinks =[]
  // 获取页脚链接每一列
  Array.from(dom.querySelectorAll('.footer-column'))
  .forEach((column, columnIndex) => {
    Array.from(column.querySelectorAll('dl'))
    .forEach((dl, dlIndex) => {
      const title = dl.querySelector('dt').textContent
      const links = []
      Array.from(dl.querySelectorAll('a'))
      .forEach((link, index) => {
        links.push({
          column_id: columnIndex + 1,
          text: link.textContent,
          href: link.href
        })
      })

      footerLinks.push({
        column_id: columnIndex + 1,
        title,
        links
      })
    })
  })

  return footerLinks
}

// 获得栈底导航
function getBottonNav(dom) {
  const bottonNavs = []

  Array.from(dom.querySelectorAll('.b-n-classification'))
  .forEach((classification, index) => {
    const title = classification.querySelector('.b-n-subtitle').textContent,
    c_id = index + 1,
    items = []

    Array.from(classification.querySelectorAll('.b-n-list-item > a'))
    .forEach((a, indey) => {
      items.push({
        c_id,
        index: `${c_id}_${indey + 1}`,
        href: a.href,
        text: a.textContent
      })
    })

    bottonNavs.push({
      c_id,
      title,
      items
    })
  })

  return bottonNavs
}

// 获取详细分类
function getCatDetail(dom) {
  let cat_id = 0
  const categorys = []
  // 获取分类列表每一行，并遍历
  Array.from(dom.querySelectorAll('.category-nav-detail'))
  .forEach((categoryNavDetail , catIndex) => {
    cat_id = catIndex + 1
    // 获取当前行的所有分类，并遍历
    Array.from(categoryNavDetail.querySelectorAll('.detail-area'))
    .forEach((detailArea, detailIndex) => {
      const detail_id = detailIndex + 1
      const details = []
      const title = detailArea.querySelector('.detail-title').textContent

      // 获取当前分类所有详细分类内容
      Array.from(detailArea.querySelectorAll('.detail-text'))
      .forEach((detailText, index) => {
        details.push({
          cat_id,
          detail_id,
          index: `${cat_id}_${detail_id}_${index}`,
          text: detailText.textContent,
          href: detailText.href
        })
      })

      // 添加分类
      categorys.push({
      cat_id,
      index: `${cat_id}_${detail_id}`,
      title,
      details
    })
    })
  })
 
  return categorys
}

// 获取分类列表
function getCategory(dom) {
  const categorys = []
  // 获取分类列
  Array.from(dom.querySelectorAll('.nav-li'))
  .forEach((navLi, catIndex) => {
    Array.from(navLi.querySelectorAll('.nav-text'))
    .forEach((navText, textIndex) => {
      // 获取分类信息
      categorys.push({
        cat_id: catIndex + 1,
        index: `${catIndex+ 1}_${textIndex + 1}`,
        text: navText.textContent,
        href: navText.href
      })
    })
  })

  return categorys
}

// 读取文件
function readFile(path) {
  return new Promise((res, rej) => {
    fs.readFile(path, (err, data) => {
      if (err) return rej(`文件读取失败： ${err.message}`)
      res(data.toString())
    })
  })
}

Array.prototype.flat = function (n) {
  console.time('flat')
  let result = []
  for (let item of this) {
    Array.isArray(item) ? result.push(...item) : result.push(item)
  }
  if (!n || n <= 1) return result

  // 定义flag
  let finish = false
  for(let i = 1; i < n; n++) {
    if (finish) break
    let arr = []
    finish = true
    for (let item of result) {
      if(Array.isArray(item)) { 
        arr.push(...item)
        finish = false
      } else {
        arr.push(item)
      }
    }
    result = arr
  }

  return result
}

