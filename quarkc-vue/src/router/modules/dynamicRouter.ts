import router from '@/router/index'
import { authStore } from '@/stores/modules/auth'
import { globalStore } from '@/stores/index'
import { isType } from '@/utils'
import { notFoundPath } from '@/router/modules/staticRouter'

// 引入所有view
const modules = import.meta.glob('@/views/**/*.vue')

/**
 *@description 初始化路由
 *@version V0.0.1
 */
export const initDynamicRoutes = async () => {
  const auth = authStore()
  const global = globalStore()
  try {
    // 接口请求菜单列表以及按钮权限列表
    await auth.setAuthButtonList()
    await auth.setAuthMenuList()
    if (auth.getAuthMenuList.length === 0) {
      global.setToken('')
      // 跳转login
      router.replace('/login')
      return Promise.reject(new Error('没有菜单权限'))
    }
    // 添加动态路由
    auth.getAuthMenuListFlat.forEach((item: any) => {
      item.children && delete item.children
      if (item.component && isType(item.component) === 'string') {
        item.component = modules[`/src/views${item.component}.vue`]
      }
      if (item.meta.isFull) {
        router.addRoute(item)
      } else {
        router.addRoute('layout', item)
      }
    })
    router.addRoute(notFoundPath)
    // 打印所有的路由
    // console.log('所有的路由', router.getRoutes())
  } catch (error) {
    throw new Error()
  }
}
