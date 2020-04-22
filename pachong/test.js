const axios = require('axios')
const fs = require('fs')
let url = 'https://img01.vgtime.com/game/cover/2020/04/21/200421150915553_u202875.jpg?x-oss-process=image/resize,m_pad,color_000000,w_320,h_200'


async function downImg(path, img) {
  const stat = await new Promise((res, rej) => {
    fs.stat(path, (err, stat) => {
      if (err) {
        console.log(err)
      }
      res(stat)
    })
  })
}

downImg('./img/recommend')

// getImg(url).catch(e => console.log(e))