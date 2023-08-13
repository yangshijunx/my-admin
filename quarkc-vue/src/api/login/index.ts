// import AuthButtonList from '@/assets/json/authButtons.json'
// import dynamicRouter from '@/assets/json/dynamicRouter.json'
import http from '@/api/index'

// export const getAuthButtonListApi = () => {
//   return AuthButtonList
// }
// export const getAuthdynamicRouterApi = () => {
//   return dynamicRouter
// }

export const getAuthButtonListApi = () => {
  return http.post('/auth/getAuthButtonList')
}
export const getAuthdynamicRouterApi = () => {
  return http.post('/auth/getAuthdynamicRouter')
}
export const loginApi = (params: any) => {
  return http.post('/login', params)
}
