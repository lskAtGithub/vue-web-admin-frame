import { defineStore } from 'pinia'
import { getPermission } from '@/api/user'

const permissionStore = defineStore('permissionStore', {
  state: () => {
    return {
      permissions: [] as Array<string>
    }
  },
  actions: {
    /**
     * 获取控件权限
     */
    async getPermissions() {
      const res = await getPermission()
      this.permissions = res.data
    }
  }
})

export default permissionStore
