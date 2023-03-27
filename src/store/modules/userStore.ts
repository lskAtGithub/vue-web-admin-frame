import { defineStore } from 'pinia'
import { getToken, getUserInfo } from '@/api/user'
import Cookies from 'js-cookie'
import type { ILoginParam } from '@/Iparams/user'

export const userStore = defineStore('userStore', {
  state: () => {
    return {
      userInfo: {},
      token: '',
    }
  },
  actions: {
    async LOGIN(ILoginParam: ILoginParam) {
      const res = await getToken(ILoginParam)
      this.token = res.data.token
      Cookies.set('token', res.data.token)
      return res
    },
    async GET_USERINFO() {
      const res = await getUserInfo()
      this.userInfo = res.data
    },
    HAS_TOKEN(): Boolean {
      if (this.token || Cookies.get('token')) {
        return true
      }
      return false
    },
    RESET_USERINFO() {
      this.userInfo = {}
    },
    HAS_USERINFO(): boolean {
      for (const key in this.userInfo) {
        return true
      }
      return false
    }
  }
})