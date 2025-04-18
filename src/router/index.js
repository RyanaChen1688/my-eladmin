import Vue from "vue"
import VueRouter from "vue-router"
import store from "@/store"
import NProgress from 'nprogress';

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

router.beforeEach((to, from, next) => {
    const isLoggedIn = !!store.state.token || !!localStorage.getItem('token');

    if (to.name === 'login') {
        // 已登录就别访问登录页，跳转首页
        if (isLoggedIn) {
            NProgress.start(); // 开始加载进度条
            next({ name: 'dashboard' });
        } else {
            NProgress.start(); // 开始加载进度条
            next();
        }
    } else {
        // 其他页面必须登录
        if (isLoggedIn) {
            NProgress.start(); // 开始加载进度条
            next();
        } else {
            NProgress.start(); // 开始加载进度条
            next({ name: 'login', query: { redirect: to.fullPath } });
        }
    }
});

router.afterEach(() => {
    NProgress.done(); // 结束进度条
});

export default router