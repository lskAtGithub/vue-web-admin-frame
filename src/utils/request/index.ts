import axios from 'axios'
import LoadingUtils from '@/utils/LoadingUtils'
import { ElMessage } from 'element-plus'
import useStore from '@/store'
import ToolUtils from '../ToolUtils'

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 30000,
  withCredentials: true // send cookies when cross-domain requests
})

// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    LoadingUtils.show()
    config.headers['x-token'] = 'token'
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  (response) => {
    LoadingUtils.hide()
    if (response.data.code === 200) {
      return response.data
    } else {
      ElMessage.error(response.data.msg || 'Error!!!')
      return Promise.reject(response.data)
    }
  },
  (error) => {
    const { errorStore } = useStore()
    LoadingUtils.hide()
    const createTime: string = ToolUtils.getNowDateTimeCn()
    const info = JSON.stringify(error)
    errorStore.addError({ id: 0, url: window.location.href, title: error, info, createTime })
    return Promise.reject(error)
  }
)

export default instance
