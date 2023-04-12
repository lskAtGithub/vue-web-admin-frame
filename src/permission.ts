import router from '@/router/index'
import PageTitleUtils from '@/utils/PageTitleUtils'
import { ElMessage } from 'element-plus'
import useStore from '@/store/index'
import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const { user, tagview, routeStore } = useStore()

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  NProgress.start()
  if (user.hasToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      // 确定用户是否已通过getInfo获得其权限角色
      if (user.hasUserInfo()) {
        if (to.meta?.noTagView) {
          const itme = to.matched.filter((item: any) => item.path === to.meta?.activeMenu)
          tagview.addTagView({
            title: itme[0]?.meta.title as string,
            path: to.meta?.activeMenu as string
          })
        } else {
          tagview.addTagView({
            title: to.meta?.title as string,
            path: to.fullPath
          })
        }
        next()
        NProgress.done()
      } else {
        try {
          await user.getUserInfo()
          await routeStore.setRoutes()
          next({ ...to, replace: true })
          NProgress.done()
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
      NProgress.done()
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
