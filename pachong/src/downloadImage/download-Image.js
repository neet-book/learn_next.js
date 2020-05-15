const axios = require('axios');
const fs = require('fs');
const path = require('path');
const ur = require('url')

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
module.exports = async function downloadImg(dir, url, fileName) {
  // 确定文件夹是否存在
  const exist = await existDir(dir);
  if (!exist) await mkdir(dir);
  // 获取图片
  await axios.get(url, { responseType: 'stream' })
  .then(({ data }) => {
    // 保存文件
    data.pipe(fs.createWriteStream(`${dir}/${fileName}`))
    console.log(`图片 ${fileName} 下载成功，保存至${dir}`)
    return true
  })
  .catch(err => {
    console.log(`图片 ${fileName} 下载失败：${err.message}`)
    return false
  })
}
