import Layout from '@/Layout/index.vue'
import type { RouteRecordRaw } from 'vue-router'

const route: RouteRecordRaw = {
  path: '/manage',
  meta: { title: '页面', icon: 'Document', redirect: '/manage/table' },
  component: Layout,
  children: [
    {
      name: 'MyDirectives',
      meta: { title: '自定义指令示例' },
      path: '/manage/myDirectives',
      component: () => import('@/views/pagesManage/myDirectives/index.vue')
    },
    {
      name: 'TableManage',
      meta: { keepAlive: true, title: '表格示例' },
      path: '/manage/table',
      redirect: '/manage/table/list',
      component: () => import('@/views/pagesManage/manage/index.vue'),
      children: [
        {
          name: 'TableManageList',
          meta: { title: '业务场景', noBreadCrumbs: true, keepAlive: true },
          path: '/manage/table/list',
          component: () => import('@/views/pagesManage/manage/list/index.vue')
        },
        {
          name: 'TableManageDetail',
          path: '/manage/table/detail',
          meta: {
            title: '详情',
            activeMenu: '/manage/table/list',
            hidden: true,
            noTagView: false,
            keepAlive: false
          },
          component: () => import('@/views/pagesManage/manage/details/index.vue')
        },
        {
          name: 'TableManageAdd',
          path: '/manage/table/add',
          meta: {
            title: '新增',
            activeMenu: '/manage/table/list',
            hidden: true,
            noTagView: false,
            keepAlive: false
          },
          component: () => import('@/views/pagesManage/manage/add/index.vue')
        },
        {
          name: 'TableManageEdit',
          path: '/manage/table/edit/:id',
          meta: {
            title: '修改',
            activeMenu: '/manage/table/list',
            hidden: true,
            noTagView: false,
            keepAlive: true
          },
          component: () => import('@/views/pagesManage/manage/edit/index.vue')
        }
      ]
    }
  ]
}

export default route
