import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: ""
    },
    mutations: {
        setToken(state, newToken) {
            state.token = newToken
            console.log('添加token到store', newToken)
        }
    },
    actions: {},
    getters: {}
})


