import axios from "axios";
import store from "@/store";
import router from "@/router";
import { Message } from 'element-ui'

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
            Message.error(data.message || '请求出错')

            // 401 表示未授权，跳转到登录页
            if (status === 401) {
                router.push({ name: 'Login' }) // 跳转到登录页
            }
        } else {
            Message.error('网络异常或服务器无响应')
        }

        return Promise.reject(error)
    }
)

export default service