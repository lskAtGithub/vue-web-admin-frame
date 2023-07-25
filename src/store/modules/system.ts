import { defineStore } from 'pinia'

const systemStore = defineStore('systemStore', {
  state: () => {
    return {
      isCollapse: false
    }
  },
  actions: {
    /**
     * @description 切换侧边栏展开收缩
     */
    changeCollapse() {
      this.isCollapse = !this.isCollapse
    },

    /**
     * @description 收缩侧边栏
     */
    packCollapse() {
      this.isCollapse = true
    }
  }
})

export default systemStore
