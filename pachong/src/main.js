const Koa = require('koa')
const Router = require('koa-router')
const axios = require('axios');
const fs = require('fs');
const { JSDOM } = require('jsdom');


let exportData = null


async function start() {
  let webStr = await readFile('../static/meituan.html')

  // 转化为DOM
  const { document } = new JSDOM(webStr).window
  // 获取分类列表
  const categorys = getCategory(document),
  cateDetail = getCatDetail(document),
  bottonnav = getBottonNav(document)
  
  console.log(bottonnav)

}

start().catch(e => console.log('err: ', e))

const app = new Koa()
const router = new Router()
router.get('/', async ctx => {
  ctx.body = 'ok'
})

app.use(router.routes()).use(router.allowedMethods())
app.listen(3000)


// 获得栈底导航
function getBottonNav(document) {
  const bottonNavs = []

  Array.from(document.querySelectorAll('.b-n-classification'))
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
function getCatDetail(document) {
  let cat_id = 0
  const categorys = []
  // 获取分类列表每一行，并遍历
  Array.from(document.querySelectorAll('.b-n-list-item > a'))
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

