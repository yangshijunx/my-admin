import { createRouter, createWebHistory } from 'vue-router'
import { staticRoutes, errorRoute } from './modules/staticRouter'
import NProgress from '@/config/nprogress'
import { globalStore } from '@/stores'
import { authStore } from '@/stores/modules/auth'
import { initDynamicRoutes } from '@/router/modules/dynamicRouter'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...staticRoutes, ...errorRoute],
  strict: false,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

/**
 *@description 路由拦截器
 */
router.beforeEach(async (to, from, next) => {
  const global = globalStore()

  NProgress.start()
  const title = import.meta.env.VITE_APP_TITLE as string
  window.document.title = to.meta.title ? `${to.meta.title} | ${title}` : title
  // 判断是不是登陆页面
  // 如果存在token，不进行跳转
  if (to.path === '/login') {
    if (!global.getToken) {
      next()
    } else {
      next(from.fullPath)
    }
  }
  if (!global.getToken) {
    next('/login')
  }
  const auth = authStore()
  // 判断是否有菜单权限
  auth.setRouteName(to.name as string)
  if (auth.getAuthMenuList.length === 0) {
    await initDynamicRoutes()
    return next({ ...to, replace: true })
  }
  next()
})
// 路由跳转后
router.afterEach(() => {
  NProgress.done()
})
// 路由跳转错误
router.onError((error) => {
  console.warn('路由跳转错误', error)
  NProgress.done()
})

export default router
