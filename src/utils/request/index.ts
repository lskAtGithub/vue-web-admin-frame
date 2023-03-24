import axios from 'axios'
import LoadingUtils from '@/utils/LoadingUtils'

const instance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 30000,
  withCredentials: true // send cookies when cross-domain requests
})

// 添加请求拦截器
instance.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  LoadingUtils.show()
  config.headers['x-token'] = 'token'
  return config
},
(error) => {
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use((response) => {
  return response
},
(error) => {
  return Promise.reject(error)
})

export default instance