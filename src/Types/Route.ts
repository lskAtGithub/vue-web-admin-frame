export interface IRoute {
  path: string,
  title: string,
  redirect: string,
  meta: IRouteMeta,
  component: any
}

interface IRouteMeta {
  icon: String,
  activeMenu: String,
}