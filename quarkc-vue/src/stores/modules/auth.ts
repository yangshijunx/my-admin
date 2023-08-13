import { defineStore } from 'pinia'
import type { AuthStore } from '../interface'
import { getAuthButtonListApi, getAuthdynamicRouterApi } from '@/api/login/index'
import { getFlatArr } from '@/utils/index'
export const authStore = defineStore({
  id: 'authStore',
  state: (): AuthStore => ({
    // 当前页面的 router name，用来做按钮权限筛选
    routeName: '',
    // 按钮权限列表
    authButtonList: {},
    // 菜单权限列表
    authMenuList: []
  }),
  getters: {
    getRouteName(): string {
      return this.routeName
    },
    getAuthButtonList(): any {
      return this.authButtonList
    },
    getAuthMenuList(): any {
      return this.authMenuList
    },
    // 菜单权限列表扁平化,addRoutes需要
    getAuthMenuListFlat(): any {
      return getFlatArr(this.authMenuList)
    }
  },
  actions: {
    async setRouteName(routeName: string) {
      this.routeName = routeName
    },
    async setAuthButtonList() {
      const { data } = await getAuthButtonListApi()
      this.authButtonList = data as any
    },
    async setAuthMenuList() {
      const { data } = await getAuthdynamicRouterApi()
      this.authMenuList = data as any
    }
  }
})
