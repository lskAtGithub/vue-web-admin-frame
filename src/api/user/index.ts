import request from '@/utils/request/index'

import type { ILoginParam } from '@/Types/User'
/**
 * @description 获取路由
 */
export const getMenu = () => {
  return request({
    url: '/getMenu',
    method: 'get'
  })
}

/**
 * @description 获取个人信息
 */
export const getUserInfo = () => {
  return request({
    url: '/userInfo',
    method: 'get'
  })
}

/**
 * @param { ILoginParam } data
 * @description 获取Token
 */
export const getToken = (data: ILoginParam) => {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

/**
 * @description 获取控件权限
 */
export const getPermission = () => {
  return request({
    url: '/getPermission',
    method: 'get'
  })
}
