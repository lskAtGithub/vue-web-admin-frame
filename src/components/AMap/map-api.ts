import axios from 'axios'
import type { IRegeo, IParams } from './map'

/**
 * @param { keywords, region, city_limit, page_size, page_num }
 * @desc 关键字搜索 API 服务地址
 * @returns Array<address>
 */
export const getAddressByKeywords = (params: IParams) => {
  return axios({
    url: 'https://restapi.amap.com/v5/place/text',
    method: 'get',
    params: {
      key: 'b12abe21d0ecf8807cb05cf059677163',
      keywords: params.keywords,
      region: params.region,
      city_limit: params.region ? true : false,
      page_size: params.page_size || '10',
      page_num: params.page_num || '1',
      show_fields: 'poi,photos'
    }
  })
}

/**
 * @param { keywords, region, city_limit, page_size, page_num }
 * @desc 周边搜索 API 服务地址
 * @returns Array<address>
 */
export const getAddressByRim = (params: IParams) => {
  return axios({
    url: 'https://restapi.amap.com/v5/place/around',
    method: 'get',
    params: {
      key: 'b12abe21d0ecf8807cb05cf059677163',
      keywords: params.keywords,
      region: params.region,
      city_limit: params.region ? true : false,
      page_size: params.page_size || '10',
      page_num: params.page_num || '1',
      location: params.location,
      show_fields: 'poi,photos'
    }
  })
}

/**
 * @param { location }
 * @desc 逆地理编码API服务
 * @returns Array<address>
 */
export const getRegeo = (params: IRegeo) => {
  return axios({
    url: 'https://restapi.amap.com/v3/geocode/regeo',
    method: 'get',
    params: {
      key: 'b12abe21d0ecf8807cb05cf059677163',
      location: params.location
    }
  })
}
