import Layout from '@/Layout/index.vue'
import type { IRoute } from '@/Types/Route'

const routes: IRoute = {
  path: '/manage',
  meta: { title: '页面管理' },
  component: Layout,
  children: [
    {
      meta: { title: '表格页' },
      path: '/manage/table/list',
      component: () => import('@/views/pagesManage/index.vue'),
      children: [
        {
          meta: { title: '表格页', noBreadCrumbs: true },
          path: '/manage/table/list',
          component: () => import('@/views/pagesManage/list/index.vue'),
        },
        {
          path: '/manage/table/detail',
          meta: { activeMenu: '/manage/table/list', title: '详情', noTagView: true },
          component: () => import('@/views/pagesManage/details/index.vue'),
        },
        {
          path: '/manage/table/add',
          meta: { title: '新增', activeMenu: '/manage/table/list', noTagView: true },
          component: () => import('@/views/pagesManage/add/index.vue'),
        }
      ]
    },
    {
      meta: { title: 'tab示例' },
      path: '/manage/tab/index',
      component: () => import('@/views/tabManage/demo/index.vue'),
    }
  ]
}

export default routes