export interface IRoute {
  path: string,
  redirect: string,
  meta: IRouteMeta,
  component: any
}

interface IRouteMeta {
  icon: String,
  activeMenu: String,
  title: string,
  noBreadCrumbs: Boolean
}