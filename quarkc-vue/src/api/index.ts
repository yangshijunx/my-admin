import axios from 'axios'
import { globalStore } from '@/stores'
import type { AxiosInstance, AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'
import type { ResultData } from '@/api/interface'
import { checkStatus } from './utils'

const config = {
  baseURL: import.meta.env.VITE_API_URL as string,
  timeout: 10000,
  // 跨域时候允许携带凭证
  withCredentials: true
}
class HttpRequest {
  service: AxiosInstance
  public constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config)
    // 接口请求拦截器
    this.service.interceptors.request.use(
      (config: any) => {
        // 在这里做一些检测或者包装等处理
        let globalData = globalStore()
        // 是否需要展示全局loading
        config.headers!.noLoading || globalData.setLoading(true)
        let token: string = globalData.token
        return {
          ...config,
          headers: {
            ...config.headers,
            token: token
          }
        }
      },
      async (error: AxiosError) => {
        return Promise.reject(error)
      }
    )
    // 接口响应拦截器
    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        // 在这里对返回的数据进行处理
        // 隐藏全局loading
        let globalData = globalStore()
        globalData.setLoading(false)
        checkStatus(response)
        return response.data
      },
      (error: AxiosError) => {
        // 隐藏全局loading
        let globalData = globalStore()
        globalData.setLoading(false)
        checkStatus(error.response!)
        // 对响应错误做点什么
        return Promise.reject(error)
      }
    )
  }
  // 请求方法封装
  get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.get(url, { params, ..._object })
  }
  post<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.post(url, params, _object)
  }
  put<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
    return this.service.put(url, params, _object)
  }
  delete<T>(url: string, params?: any, _object = {}): Promise<ResultData<T>> {
    return this.service.delete(url, { params, ..._object })
  }
}
export default new HttpRequest(config)
