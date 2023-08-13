import type { RouteRecordRaw } from 'vue-router'
import { HOME_PATH, LOGIN_PATH } from '@/config'
/**
 * 这里只负责处理静态路由
 */
export const staticRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: HOME_PATH
  },
  {
    path: LOGIN_PATH,
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/fragment',
    name: 'fragment',
    component: () => import('@/views/fragment/index.vue'),
    meta: {
      title: '碎片组件'
    }
  }
]

/**
 * 缺省页
 */
export const errorRoute: RouteRecordRaw[] = [
  {
    path: '/403',
    name: '403',
    component: () => import('@/components/ErrorMessage/403.vue'),
    meta: {
      title: '403页面'
    }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/components/ErrorMessage/404.vue'),
    meta: {
      title: '404页面'
    }
  },
  {
    path: '/500',
    name: '500',
    component: () => import('@/components/ErrorMessage/500.vue'),
    meta: {
      title: '500页面'
    }
  }
]

/**
 * 找不到的路由
 */
export const notFoundPath = {
  path: '/:pathMatch(.*)*',
  name: 'notFound',
  redirect: { name: '404' }
}
