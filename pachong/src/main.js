const Koa = require('koa')
const Router = require('koa-router')
const axios = require('axios');
const fs = require('fs');
const { JSDOM } = require('jsdom');


let exportData = null


// async function start() {
//   let webStr = await readFile('./static/meituan.html')
//   if (!webStr) return console.log('读取失败')
//   // 转化为DOM
//   const { document } = new JSDOM().window
//   // 获取分类列表
//   // console.log(document.body)
//   const categorys = getCategory(document),
//   cateDetail = getCatDetail(document)
//   // recommends = getRecomments(document)

//   // console.log('es', recommends[0])
// }

// start().catch(e => console.log(e))

const app = new Koa()
const router = new Router()
router.get('/', async ctx => {
  ctx.body = 'ok'
})
app.use(router.routes).use(router.allowedMethods())
app.listen(3000)


// 获取详细分类
function getCatDetail(document) {
  let cat_id = 0
  // 获取所有分类并遍历每个分类
  return Array.from(document.querySelectorAll('.category-nav-detail'))
  .map(categoryNavDetail => {
    // 获取当前分类的所有详细分类并遍历
    cat_id++
    let det_id = 1
    return Array.from(categoryNavDetail.querySelectorAll('.detail-area'))
    .map(detailArea => {
      const title = detailArea.querySelector('.detail-title').textContent,
      detailsArr = []
      // 遍历所有详细分类，获取详细分类内容
      Array.from(detailArea.querySelectorAll('.detail-text'))
      .forEach(detailText => {
        detailsArr.push({
          det_id,
          index: `${det_id}_${detailsArr.length + 1}`,
          text: detailText.textContent,
          href: detailText.href
        })
      })
      det_id++
      return {
        title,
        cat_id,
        details: detailsArr
      }
    })
  })
}

// 创建分类索引
// function createCatIndex(categorys) {
//   const cat = categorys.flat(5).map(item => {
//     return [
//       item.text,
//       {
//         index: item.index,
//         cat_id: item.cat_id
//       }
//     ]
//   })
//   return new Map(cat)
// }

// 获取分类列表
function getCategory(dom) {
  const categorys = []
  // 获取分类列
  Array.from(dom.querySelectorAll('.nav-li')).forEach(li => {
    const cat = []
    Array.from(li.querySelectorAll('.nav-text')).forEach(a => {
      // 获取分类信息
      cat.push({
        cat_id: categorys.length + 1,
        index: `${categorys.length + 1}_${cat.length + 1}`,
        text: a.textContent,
        href: a.href
      })
    })
    categorys.push(cat)
  })

  return categorys
}

// 读取文件
function readFile(path) {
  return new Promise((res, rej) => {
    fs.readFile(path, (err, data) => {
      if (err) return rej(false)
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

