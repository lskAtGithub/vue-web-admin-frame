import Layout from '@/Layout/index.vue'

const routes = {
  path: '/manage/table',
  component: Layout,
  children: [
    {
      title: '表格页',
      path: '/manage/table/list',
      component: () => import('@/views/pagesManage/index.vue'),
      children: [
        {
          title: '列表',
          path: '/manage/table/list',
          component: () => import('@/views/pagesManage/list/index.vue'),
        },
        {
          title: '详情',
          path: '/manage/table/detail',
          meta: { activeMenu: '/manage/table/list' },
          component: () => import('@/views/pagesManage/details/index.vue'),
        },
        {
          title: '新增',
          path: '/manage/table/add',
          meta: { activeMenu: '/manage/table/list' },
          component: () => import('@/views/pagesManage/add/index.vue'),
        }
      ]
    },
    {
      title: 'tab示例',
      path: '/manage/tab/index',
      component: () => import('@/views/tabManage/demo/index.vue'),
    }
  ]
}

export default routes