import requert from '@/utils/request/index'

/**
 * @param 
 */
export const getMenu = () => {
  return requert({
    url: '/getMenu',
    method: 'get',
  })
}