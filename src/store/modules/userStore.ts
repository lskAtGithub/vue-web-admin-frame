import { defineStore } from 'pinia'
import { getToken, getUserInfo } from '@/api/user'
import Cookies from 'js-cookie'
import type { ILoginParam } from '@/api/user/types'

export const userStore = defineStore('userStore', {
  state: () => {
    return {
      userInfo: {
        name: '',
        phone: ''
      },
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
    async GET_USERINFO(): Promise<void> {
      const res = await getUserInfo()
      this.userInfo = res.data
    },
    HAS_TOKEN(): Boolean {
      if (this.token || Cookies.get('token')) {
        return true
      }
      return false
    },
    RESET_USERINFO(): void {
      this.userInfo = {
        name: '',
        phone: ''
      }
    },
    HAS_USERINFO(): boolean {
      if (this.userInfo.name) {
        return true
      }
      return false
    },
    LOGOUT(): Promise<void> {
      Cookies.remove('token')
      this.token = ''
      return new Promise((resolve) => {
        resolve()
      })
    }
  }
})