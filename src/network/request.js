import axios from 'axios'

export function request(config){
    // 1.创建axios的实例
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000/api/hy',
      timeout: 5000
    })
    // 2.axios的拦截器
    // 2.1请求拦截的作用
    instance.interceptors.request.use(config => {
      // 1.拦截一些config中不符合服务器要求的信息
      // 2.比如每次发送网络请求时，都希望在界面中先是一个请求图标
      // 3.某些网络请求(比如登录token)，必须携带一些特殊的信息
      return config
    }, err => {
      // console.log(err)
    })
    // 2.2响应拦截
    instance.interceptors.response.use(res => {
      return res.data
    }, err => {
      // console.log(err)
    })

    // 3.发送真正的网络请求
    return instance(config)
}