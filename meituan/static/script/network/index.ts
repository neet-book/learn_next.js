import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000'
})

export async function getDetails() {
  const { data: { state, message, data } } = await instance('/detail')
  if (state !== 200) {
    console.log('getDetails Error: ', message)
  }

  return data
}

export async function getCategory() {
  const { data: { state, message, data } } = await instance('/category')
  if (state !== 200) {
    console.log('getCategory Error: ', message)
  }

  return data
}
