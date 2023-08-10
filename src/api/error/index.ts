import request from '@/utils/request/index'

/**
 * @description 获取控件权限
 */
export const errorApi = () => {
  return request({
    url: '/errorApi',
    method: 'get'
  })
}
