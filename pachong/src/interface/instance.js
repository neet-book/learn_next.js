const axios = require('axios')
const config  = require('./config.js')

const instance = axios.create({
  withCredentials: true,
  headers: config.headers
})

async function getRecommend() {
  const { data, status, statusText } = await instance.get(config.recommendInterface)
  if (status !== 200) return console.log(`getRecommend Error: ${statusText}[code:${status}]`)
  console.log('推荐内容获取成功')
  return data
}

async function getmMovie(){
  const { data, status, statusText } = await instance.get(config.movieInterface  )
  if (status !== 200) return console.log(`getmMovie Error: ${statusText}[code:${status}]`)
  console.log('电影内容获取成功')
  return data.data.coming
}

async function getCityList(){
  const { data, status, statusText } = await instance.get(config.cityListInterface  )
  if (status !== 200) return console.log(`getCityList Error: ${statusText}[code:${status}]`)
  console.log('民宿城市获取成功')
  return data.cityList
}

async function getMinsu(cityId){
  const { data, status, statusText } = await instance.get(config.minsuInterface, {
    params: {
      cityId
    }
  })
  if (status !== 200) return console.log(`getMinsu Error: ${statusText}[code:${status}]`)
  console.log('电影内容获取成功')
  return data.productList
}