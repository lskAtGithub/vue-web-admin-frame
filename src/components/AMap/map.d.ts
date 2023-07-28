interface CommonObject<T> {
  [key: string]: T
}

interface Lnglat {
  KL: number
  className: string
  kT: number
  lat: number
  lng: number
  pos: number[]
  add: Function
  distance: Function
  distanceTo: Function
  divideBy: Function
  equals: Function
  getLat: Function
  getLng: Function
  multiplyBy: Function
  offset: Function
  setLat: Function
  setLng: Function
  subtract: Function
  toArray: Function
  toJSON: Function
  toString: Function
}

interface PoiList {
  count: number
  pageIndex: number
  pageSize: number
  pois: (Poi & { location: Lnglat })[]
}

interface Pixel {
  className: string
  x: number
  y: number
}

interface Poi {
  adcode: string
  address: string
  city: []
  district: string
  id: string
  location: number[]
  name: string
  typecode: string
}

interface Regeocode {
  addressComponent: CommonObject<any>
  aois: []
  crosses: []
  formattedAddress: string
  pois: Poi[]
  roads: CommonObject<any>[]
}

export interface IRegeo {
  key?: string
  location: string
}

export interface IParams extends IRegeo {
  keywords: string
  region: string
  city_limit: boolean
  page_size: string | number
  page_num: string | number
  show_fields: string
}

export interface IMapPlugins extends CommonObject<any> {}

export interface IClickMap {
  lnglat: Lnglat
  originEvent: MouseEvent
  pixel: Pixel
  pos: number[]
  target: any
  type: string
}

export interface IAutoCompleteRes {
  type: string
  poi: Poi
}

export interface IGeoCoderRes {
  info: string
  regeocode: Regeocode
}

export interface IResult extends Regeocode {
  location: number[]
}

export interface IPlaceSearchRes {
  info: string
  poiList: PoiList
}
