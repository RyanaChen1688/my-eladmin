import Vue from "vue"
import VueRouter from "vue-router"
import store from "@/store"

// 解决ElementUI导航守卫报错的问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};

const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err);
};

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
            next({ name: 'dashboard' });
        } else {
            next();
        }
    } else {
        // 其他页面必须登录
        if (isLoggedIn) {
            next();
        } else {
            next({ name: 'login', query: { redirect: to.fullPath } });
        }
    }
});

export default router