import requert from '@/utils/request/index'

import type { ILoginParam } from './types'
/**
 * @param 
 */
export const getMenu = () => {
  return requert({
    url: '/getMenu',
    method: 'get',
  })
}

/**
 * @param 
 */
export const getUserInfo = () => {
  return requert({
    url: '/userInfo',
    method: 'get',
  })
}

/**
 * @param 
 */
export const getToken = (data: ILoginParam) => {
  return requert({
    url: '/login',
    method: 'post',
    data
  })
}