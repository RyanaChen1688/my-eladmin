import Vue from "vue"
import VueRouter from "vue-router"

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

export default new VueRouter({
    mode: 'history',
    routes
})