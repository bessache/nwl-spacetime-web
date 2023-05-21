import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://172.31.244.217:3333',
})
