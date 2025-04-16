import Vue from "vue"
import VueRouter from "vue-router"
import store from "@/store"

Vue.use(VueRouter)

const routes =
    [{
        name: "login",
        path: "/login",
        component: () => import("../views/MyLogin.vue")
    }, {
        name: "dashboard",
        path: "/",
        component: () => import("../views/MyDashboard.vue")
    }]

const router = new VueRouter({
    mode: 'history',
    routes
})

// 添加全局路由守卫
router.beforeEach((to, from, next) => {
    const publicPages = ['login', 'register'] // 不需要登录的页面
    console.log(1111, store.state.token)
    const isLoggedIn = !!store.state.token // 假设 token 存储在 Vuex 的 state 中
    if (!publicPages.includes(to.name) && !isLoggedIn) {
        // 如果没有登录且目标路由不是登录页，则重定向到登录页
        next({ name: 'login', query: { redirect: to.fullPath } })
    } else {
        // 否则允许进入目标路由
        next()
    }
})

export default router

