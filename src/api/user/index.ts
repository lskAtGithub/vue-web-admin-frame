import request from '@/utils/request/index'

import type { ILoginParam } from './types'
/**
 * @param
 */
export const getMenu = () => {
  return request({
    url: '/getMenu',
    method: 'get'
  })
}

/**
 * @param
 */
export const getUserInfo = () => {
  return request({
    url: '/userInfo',
    method: 'get'
  })
}

/**
 * @param data
 */
export const getToken = (data: ILoginParam) => {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

/**
 * @param
 */
export const getPermission = () => {
  return request({
    url: '/getPermission',
    method: 'get'
  })
}
