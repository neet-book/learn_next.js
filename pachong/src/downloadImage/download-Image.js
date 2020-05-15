const axios = require('axios');
const fs = require('fs');
const path = require('path');
const ur = require('url')

function parserFileName(url) {
  let pathname = new URL(url).pathname
  
  return path.basename(pathname)
}

// 文件是否存在
function existDir(dir) {
  return new Promise((res) => {
    fs.stat(dir, (err, stat) => {
      if (err && err.code === 'ENOENT') {
        console.log(`existDir: 文件夹 "${path.basename(dir)}" 不存在`)
        res(false)
        return
      } else if (err) {
        console.log('existDir Error: ', err.message)
        res(false)
        return
      }
      res(true)
    })
  })
}

// 创建文件
function mkdir(dir) {
  return new Promise(res => {
    fs.mkdir(dir, { recursive: true }, err => {
      if (err) {
        console.log('mkdir Error: ', err.message)
        res(false)
        return
      }
      console.log(`mkdir: 文件夹 ${path.basename(dir)} 创建成功`)
      res(true)
    })
  })
}

// 下载文件
module.exports = async function downloadImg(dir, url) {
  // 确定文件夹是否存在
  const exist = await existDir(dir);
  if (!exist) await mkdir(dir);
  // 获取文件名
  const name = parserFileName(url)
  // 下载图片
  const imgUrl = 'https://p0.meituan.net/msmerchant/' + name + '@250w_150h_1e_1c'
  await axios.get(imgUrl, { responseType: 'stream' })
  .then(({ data }) => {
    // 保存文件
    data.pipe(fs.createWriteStream(`${dir}/${name}`))
  })

  console.log(`图片 ${name} 下载成功，保存至${dir}`)

}
