import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes =
    [{
        name: "test",
        path: "/test",
        component: () => import("../components/MyTest.vue")
    }]

export default new VueRouter({
    routes
})