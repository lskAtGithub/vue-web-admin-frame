import { defineStore } from 'pinia'
import { getToken, getUserInfo } from '@/api/user'
import Cookies from 'js-cookie'
import type { ILoginParam } from '@/api/user/types'

const userStore = defineStore('userStore', {
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
    async userLogin(ILoginParam: ILoginParam) {
      const res = await getToken(ILoginParam)
      this.token = res.data.token
      Cookies.set('token', res.data.token)
      return res
    },
    async getUserInfo(): Promise<void> {
      const res = await getUserInfo()
      this.userInfo = res.data
    },
    hasToken(): Boolean {
      if (this.token || Cookies.get('token')) {
        return true
      }
      return false
    },
    resetUserInfo(): void {
      this.userInfo = {
        name: '',
        phone: ''
      }
    },
    hasUserInfo(): boolean {
      if (this.userInfo.name) {
        return true
      }
      return false
    },
    userLogout(): Promise<void> {
      Cookies.remove('token')
      this.token = ''
      return new Promise((resolve) => {
        resolve()
      })
    }
  }
})

export default userStore
