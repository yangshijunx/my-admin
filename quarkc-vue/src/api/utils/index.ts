import type { AxiosResponse } from 'axios'
import { message } from 'ant-design-vue'

message.config({
  duration: 2,
  maxCount: 1
})
export const checkStatus = (response: AxiosResponse) => {
  const { status, data } = response
  // console.log('数据结果', data, status)
  // console.log(response)
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    message.success(data.message || '请求成功')
    return response.data
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  // 如果状态码是401，或者501，则跳转到登录页面
  switch (status) {
    case 401:
      // console.log('提示哪里去了', message)
      message.error('未登录或登录已过期，请重新登录')
      break
    case 403:
      message.error('您没有权限访问，请联系管理员')
      break
    case 404:
      message.error('请求资源不存在')
      break
    case 500:
      message.error('服务端错误，请联系管理员')
      break
    case 501:
      message.error('服务未实现，请联系管理员')
      break
    default:
      message.error(data.message)
      break
  }
}
