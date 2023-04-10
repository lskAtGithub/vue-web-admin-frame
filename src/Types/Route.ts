export interface IRoute {
  component: any
  path: string,
  redirect?: string, /* 重定向地址 */
  meta?: IRouteMeta,
  children?: Array<IRoute>
}

interface IRouteMeta {
  title: string,  /* 对应面包屑和 Menu 菜单 */
  icon?: String,  /* 图标, 目前只支持 element-plus 的 icon 或者线上图片地址, 可自行修改 */
  activeMenu?: String,  /* 页面显示时对应的激活 Menu Path */
  noBreadCrumbs?: Boolean /* 如果为true 则不显示在面包屑 */
  noTagView?: Boolean /* 如果为true 则不添加tag-view标签 */
}
