import router from '@/router/index'
import PageTitleUtils from '@/utils/PageTitleUtils'
import useStore from '@/store/index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const { user, routeStore, permission, tagview } = useStore()

const whiteList = ['/login', '/component/AMap'] // no redirect whitelist

router.beforeEach(
  async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    NProgress.start()
    if (user.hasToken()) {
      if (to.path === '/login') {
        next({ path: '/' })
        NProgress.done()
      } else {
        if (user.hasUserInfo()) {
          next()
          NProgress.done()
        } else {
          try {
            await user.getUserInfo()
            const router = await routeStore.setRoutes()
            await permission.getPermissions()
            tagview.initTagViewList(router)
            next({ ...to, replace: true })
            NProgress.done()
          } catch (error: unknown) {
            routeStore.resetRoutes()
            tagview.resetTagViewList()
            user.resetUserInfo()
            next({ path: `/login?redirect=${to.fullPath}` })
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
  }
)

router.afterEach((to: any) => {
  NProgress.done()
  // set page title
  const { meta } = to
  document.title = PageTitleUtils.getPageTitle(meta.title)
})
