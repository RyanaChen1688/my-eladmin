import axios from "axios";
import store from "@/store";
import router from "@/router";
import { Message } from 'element-ui'
import { isNavigationFailure, NavigationFailureType } from 'vue-router'

const service = axios.create({
    baseURL: "/",
    timeout: 10000
})

// 请求拦截器
service.interceptors.request.use(
    config => {
        // 在发送请求之前添加 token
        const token = store.state.token
        if (token) {
            config.headers.Authorization = token
        }
        console.log("添加token到请求", token)
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(
    response => {
        return response.data // 简化返回数据结构
    },
    error => {
        console.error('请求失败', error)

        // 提取错误信息
        const { response } = error

        if (response) {
            const { status, data } = response

            // 显示错误消息
            console.error(data.message || '请求出错')

            // 如果是 401 且当前不是在登录页，再跳转
            if (status === 401 && router.currentRoute.name !== 'login') {
                // console.log('401 跳转 login')
                Message.info("当前登录已过期，请重新登录！")

                // 清除 token
                store.commit('setToken', null) // 清除 Vuex 中的 token
                // localStorage.removeItem('token') // 清除 localStorage 中的 token    
                router.push({ name: 'login' }).catch(err => {
                    if (!isNavigationFailure(err, NavigationFailureType.redirected)) {
                        console.error('跳转 login 出错:', err)
                    }
                })
            }


            return Promise.reject(error)
        }
    }
)

export default service