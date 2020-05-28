import Vue from 'vue'
import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000'
})

async function getDetails() {
  const { data: { state, message, data } } = await instance('/api/detail')
  if (state !== 200) {
    console.log('getDetails Error: ', message)
  }

  return data
}

async function getCategory() {
  const { data: { state, message, data } } = await instance('/api/category')
  if (state !== 200) {
    console.log('getCategory Error: ', message)
  }

  return data
}

async function getRecommend() {
  const { data: { state, message, data } } = await instance('/api/recommend')
  if (state !== 200) {
    console.log('getRecommend Error: ', message)
  }

  return data
}

async function getMovieList() {
  const { data: { state, message, data } } = await instance('/api/movie')
  if (state !== 200) {
    console.log('getMovieList Error: ', message)
  }

  return data
}

async function getCityList() {
  const { data: { state, message, data } } = await instance('/api/city')
  if (state !== 200) {
    console.log('getCityList Error: ', message)
  }

  return data
}

async function getMinsu(cityId: number | string) {
  const { data: { state, message, data } } = await instance('/api/minsu/' + cityId)
  if (state !== 200) {
    console.log('getCityList Error: ', message)
  }

  return data
}

Vue.prototype.$net = {
  getDetails,
  getCategory,
  getRecommend,
  getMovieList,
  getCityList,
  getMinsu
}