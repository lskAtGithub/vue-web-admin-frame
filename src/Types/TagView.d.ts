import type { LocationQueryRaw, RouteParamsRaw } from 'vue-router'

export interface ITagItem {
  path: string
  name: string
  title: string
  query?: LocationQueryRaw
  params?: RouteParamsRaw
  affix?: boolean
}
