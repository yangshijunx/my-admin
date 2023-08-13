import { defineStore, createPinia } from 'pinia'
import type { GlobalStore } from './interface'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export const globalStore = defineStore({
  // id 唯一标识
  id: 'globalStore',
  // state 数据存放
  state: (): GlobalStore => ({
    token: '',
    userInfo: {},
    loading: false,
    loadingText: '加载中请稍后...'
  }),
  getters: {
    getToken(): string {
      return this.token
    },
    getUserInfo(): any {
      return this.userInfo
    },
    getLoading(): boolean {
      return this.loading
    },
    getLoadingText(): string {
      return this.loadingText
    }
  },
  actions: {
    setToken(token: string): void {
      this.token = token
    },
    setUserInfo(userInfo: any): void {
      this.userInfo = userInfo
    },
    setLoading(loading: boolean): void {
      this.loading = loading
    },
    setLoadingText(loadingText: string): void {
      this.loadingText = loadingText
    }
  }
})

// pinia数据持久化
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
export default pinia
