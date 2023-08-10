import { defineStore } from 'pinia'
import { getToken, getUserInfo } from '@/api/user'
import Cookies from 'js-cookie'
import type { ILoginParam } from '@/Types/User'
import type { IUser } from '@/Types/User'

const userStore = defineStore('userStore', {
  state: () => {
    return {
      userInfo: {
        account: '',
        nickName: '',
        phone: '',
        avatar: '',
        email: '',
        postTitle: ''
      } as IUser,
      token: ''
    }
  },
  actions: {
    /**
     * @param { ILoginParam } loginParam 
     * @description 登录
     * @returns res
     */
    async userLogin(loginParam: ILoginParam) {
      const res = await getToken(loginParam)
      this.token = res.data.token
      Cookies.set('token', res.data.token)
      return res
    },
    /**
     * @description 获取用户信息
     */
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
        account: '',
        nickName: '',
        phone: ''
      }
      this.userLogout()
    },
    hasUserInfo(): boolean {
      if (this.userInfo.account) {
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
