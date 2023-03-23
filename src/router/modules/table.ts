import Layout from '@/Layout/index.vue'

const routes = {
  path: '/manage',
  component: Layout,
  redirect: '/manage/table',
  children: [
    {
      title: '表格页',
      path: '/manage/table',
      component: () => import('@/views/tableManage/index.vue'),
    }
  ]
}

export default routes