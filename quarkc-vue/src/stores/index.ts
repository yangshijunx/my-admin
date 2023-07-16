import { defineStore, createPinia } from 'pinia'
import type { GlobalStore } from './interface'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export const globalStore = defineStore({
  // id 唯一标识
  id: 'globalStore',
  // state 数据存放
  state: (): GlobalStore => ({
    token: 'ceshi1',
    userInfo: {}
  }),
  getters: {
    getToken(): string {
      return this.token
    },
    getUserInfo(): any {
      return this.userInfo
    }
  },
  actions: {
    setToken(token: string): void {
      this.token = token
    },
    setUserInfo(userInfo: any): void {
      this.userInfo = userInfo
    }
  }
})

// pinia数据持久化
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
export default pinia
