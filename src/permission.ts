import router from './router/index'
import PageTitleUtils from '@/utils/PageTitleUtils'
import pinia from '@/store/index'
import { ElMessage } from 'element-plus'
import { userStore } from '@/store/modules/userStore'
import { routerStore } from '@/store/modules/routerStore'
import { tabStore } from '@/store/modules/tabStore'
import type { RouteRecordRaw } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const user = userStore(pinia)
const tab = tabStore(pinia)
const routeStore = routerStore(pinia)

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async (to: any, from: any, next: any) => {
  // start progress bar
  NProgress.start()

  if (user.hasToken()) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
      NProgress.done()
    } else {
      // 确定用户是否已通过getInfo获得其权限角色
      if (user.hasUserInfo()) {
        if (to.meta?.noTagView) {
          const itme = to.matched.filter((item: any) => item.path === to.meta?.activeMenu)
          tab.addTabControl({
            title: itme[0]?.meta.title,
            path: to.meta?.activeMenu
          })
        } else {
          tab.addTabControl({
            title: to.meta?.title,
            path: to.fullPath
          })
        }
        next()
      } else {
        try {
          await user.getUserInfo()
          const res = await routeStore.setRoutes()
          // res.data.map((item: RouteRecordRaw) => {
          //   router.addRoute(item)
          // })
          next({ ...to, replace: true })
        } catch (error: any) {
          routeStore.resetRoutes()
          user.resetUserInfo()
          ElMessage.error(error || 'Has Error')
          next(`/login?redirect=${to.fullPath}`)
          NProgress.done()
        }
      }
    }
  } else {
    /* has no token */
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.fullPath}`)
      NProgress.done()
    }
  }

})

router.afterEach((to: any) => {
  NProgress.done()
  // set page title
  const { meta }: any = to
  document.title = PageTitleUtils.getPageTitle(meta.title)
})
