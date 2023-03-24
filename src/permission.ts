import router from './router/index'
import PageTitleUtils from '@/utils/PageTitleUtils'
import { userStore } from './store/userStore'
import { routerStore } from './store/routerStore'

const user = userStore()
const routeStore = routerStore()
router.beforeEach(async (to: any, from: any, next: any) => {
  if (user.HAS_USERINFO()) {
    next()
  } else {
    routeStore.SET_ROUTES()
  }
})

router.afterEach((to: any) => {
  // set page title
  const { meta }: any = to
  document.title = PageTitleUtils.getPageTitle(meta.title)
})
