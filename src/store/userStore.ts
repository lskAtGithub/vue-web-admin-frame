import { defineStore } from 'pinia'

export const userStore = defineStore('userStore', {
  state: () => {
    return {
      userInfo: {}
    }
  },
  actions: {
    SET_USERINFO(userInfo: Object) {
      this.userInfo = userInfo
    },
    HAS_USERINFO(): Boolean {
      for (var key in this.userInfo) {
        return true;
      }
      return false
    }
  }
})