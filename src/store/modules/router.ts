import { defineStore } from 'pinia'
import type { RouteRecordRaw } from 'vue-router'
import { getMenu } from '@/api/user'
import { constantRoutes, asyncRoutes } from '@/router/index'
import router from '@/router/index'
import VerifyUtils from '@/utils/VerifyUtils'
import ToolUtils from '@/utils/ToolUtils'

function getResDataPaths(item: RouteRecordRaw, result: Array<string>) {
  if (VerifyUtils.isArray(item.children) && item.children?.length) {
    result.push(item.path)
    item.children.map((i) => getResDataPaths(i, result))
  } else {
    result.push(item.path)
  }
}

function hasPermission(paths: Array<string>, item: RouteRecordRaw): boolean {
  return (
    paths.includes(item.path) ||
    paths.includes(item.meta?.activeMenu as string) ||
    paths.includes(item.redirect as string)
  )
}

function getChildrenData(
  paths: Array<string>,
  children: Array<RouteRecordRaw>
): Array<RouteRecordRaw> {
  const result: Array<RouteRecordRaw> = []
  children.map((item) => {
    if (hasPermission(paths, item)) {
      if (VerifyUtils.isArray(item.children) && item.children?.length) {
        const tmp = ToolUtils.deepClone(item)
        result.push({ ...item, ...{ children: getChildrenData(paths, item.children) } })
      } else {
        result.push({ ...item })
      }
    } else {
      if (VerifyUtils.isArray(item.children) && item.children?.length) {
        result.push({ ...item, ...{ children: getChildrenData(paths, item.children) } })
      }
    }
  })

  return result
}

function filterRoutes(arrData: Array<any>): Array<RouteRecordRaw> {
  const paths: Array<string> = []
  // 获取所有的 path
  arrData.forEach((item) => {
    getResDataPaths(item, paths)
  })
  const result: Array<RouteRecordRaw> = getChildrenData(paths, asyncRoutes)
  return result
}

const routerStore = defineStore('routerStore', {
  state: () => {
    return {
      routes: constantRoutes
    }
  },
  actions: {
    /**
     * 动态比对添加路由权限
     */
    async setRoutes() {
      const res: any = await getMenu()
      const routes = filterRoutes(res.data)
      routes.map((item) => {
        router.addRoute(item)
      })
      this.routes = constantRoutes.concat(routes)
    },
    resetRoutes() {
      this.$reset()
    }
  }
})

export default routerStore
