import axios from 'axios'
import { Plugin } from '@nuxt/types'

interface Network {
  getDetails: () => Promise<any>
  getCategory: () => Promise<any>
  getRecommend: () => Promise<any>
  getMovieList: () => Promise<any>
  getCityList: () => Promise<any>
  getMinsu: (cityId: number | string) => Promise<any>
}

declare module 'vue/types/vue' {
  interface Vue {
    $net: Network
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $net: Network
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $net: Network
  }
}

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

async function getMinsu(cityId: string | number) {
  const { data: { state, message, data } } = await instance('/api/minsu/' + cityId)
  if (state !== 200) {
    console.log('getCityList Error: ', message)
  }

  return data
}

async function getBottonNav() {
  const { data: { state, message, data } } = await instance('/api/botton')
  if (state !== 200) {
    console.log('getBottonNav Error: ', message)
  }

  return data
}

const network: Plugin = ({ app }, inject) => {
  inject('net', {
    getDetails,
    getCategory,
    getRecommend,
    getMovieList,
    getCityList,
    getMinsu,
    getBottonNav
  })
}

export default network

