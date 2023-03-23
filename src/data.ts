
interface IRouteItem {
  path: string,
  title: string
  id: string | number
}

interface IRoute {
  id: string | number,
  title: string,
  redirect: string,
  children: IRouteItem[]
}

const routeData: IRoute[] = [
  {
    id: '1',
    title: '首页',
    redirect: '/home/homePage',
    children: [{
      id: '11',
      path: '/home/homePage',
      title: '首页'
    }]
  },
  {
    id: '2',
    title: '页面管理',
    redirect: '/manage/table',
    children: [{
      id: '22',
      path: '/manage/table',
      title: '表格页'
    }]
  },

]
export default routeData;
