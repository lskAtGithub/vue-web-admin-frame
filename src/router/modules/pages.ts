import Layout from '@/Layout/index.vue'

const routes = {
  path: '/manage/table',
  component: Layout,
  children: [
    {
      title: '表格页',
      path: '/manage/table/list',
      component: () => import('@/views/tableManage/index.vue'),
      children: [
        {
          title: '列表',
          path: '/manage/table/list',
          component: () => import('@/views/tableManage/list/index.vue'),
        },
        {
          title: '详情',
          path: '/manage/table/detail',
          component: () => import('@/views/tableManage/details/index.vue'),
        },
        {
          title: '新增',
          path: '/manage/table/add',
          component: () => import('@/views/tableManage/add/index.vue'),
        }
      ]
    }
  ]
}

export default routes