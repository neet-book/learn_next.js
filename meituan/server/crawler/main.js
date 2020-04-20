const fs = require('fs')
const jsdom = require('jsdom')
const { JSDOM } = jsdom

async function start() {
  const webStr = await readFile('./meituan.html').catch(err => {
    console.log('readFile Error: ', err)
    return false
  })
  if (!webStr) return
  const { document } = new JSDOM(webStr).window
  getCategory(document)
}

start()

// 读取文件
function readFile(path) {
  return new Promise((res, rej) => {
    fs.readFile(path, (err, data) => {
      if (err) return rej(err.message)
      res(data.toString())
    })
  })
}

// 获取分类列表
function getCategory(dom) {
  const categorys = []
  // 遍历所有分类列
  Array.from(dom.getElementsByClassName('.nav-li')).map(li => {
    const cat = []
    // 遍历分类列所有a元素
    Array.from(li.getElementsByClassName('.nav-text')).map(a => {
      // 获取信息
      cat.push({
        cat_id: categorys.length + 1,
        index: `${categorys.length + 1}_${cate.length + 1}`,
        text: a.contentText,
        href: a.href
      })
    })

    // 添加到分类数组保存
    categorys.push(cat)
  })

  console.log('in getCategorys', categorys)
}