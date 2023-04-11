import { defineStore } from 'pinia'
import { getMenu } from '@/api/user'
import { constantRoutes, asyncRoutes } from '@/router/index'


export const routerStore = defineStore('routerStore', {
  state: () => {
    return {
      routes: constantRoutes,
      dynamicRoutes: asyncRoutes
    }
  },
  actions: {
    /**
     * 请求到路由之后把接口返回的路由当作 Menu菜单 (即访问入口)，但是会默认添加所有的动态路由
     * 在用户从url上输入无访问权限的路由访问页面时, 建议由接口返回无操作权限code,从而跳转异常页
     */
    async setRoutes() {
      const res: any = await getMenu()
      this.routes = constantRoutes.concat(res.data)
      return this.dynamicRoutes
    },
    resetRoutes() {
      this.$reset()
    }
  }
})

