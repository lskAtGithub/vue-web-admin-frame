import Layout from '@/Layout/index.vue'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw = {
  path: '/manage',
  meta: { title: '页面管理' },
  component: Layout,
  children: [
    {
      name: "TableManage",
      meta: { title: '表格页', cache: true },
      path: '/manage/table/list',
      component: () => import('@/views/pagesManage/index.vue'),
      children: [
        {
          name: 'TableManageList',
          meta: { title: '表格页', noBreadCrumbs: true, cache: true },
          path: '/manage/table/list',
          component: () => import('@/views/pagesManage/list/index.vue'),
        },
        {
          path: '/manage/table/detail',
          meta: { activeMenu: '/manage/table/list', title: '详情', noTagView: false },
          component: () => import('@/views/pagesManage/details/index.vue'),
        },
        {
          name: 'TableManageAdd',
          path: '/manage/table/add',
          meta: { title: '新增', activeMenu: '/manage/table/list', noTagView: false, cache: true },
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