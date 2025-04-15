import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes =
    [{
        name: "login",
        path: "/login",
        component: () => import("../views/MyLogin.vue")
    }]

export default new VueRouter({
    mode: 'history',
    routes
})