import axios from "axios";
import Cookies from "js-cookie";
import { Message } from 'element-ui'

const service = axios.create({
    baseURL: "/",
    timeout: 10000
})

// 请求拦截器
service.interceptors.request.use(
    config => {
        // 在发送请求之前添加 token
        const token = Cookies.get('token')
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
        Message.error(error.response.data.message);
    }
)

export default service