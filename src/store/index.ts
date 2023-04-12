import { createPinia } from 'pinia'
import routerStore from './modules/router'
import systemStore from './modules/system'
import tagViewStore from './modules/tagView'
import userStore from './modules/user'

const pinia = createPinia()

export default function useStore() {
  return {
    routeStore: routerStore(pinia),
    system: systemStore(pinia),
    tagview: tagViewStore(pinia),
    user: userStore(pinia)
  }
}
