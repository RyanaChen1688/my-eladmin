import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            token: ""
        }
    },
    mutations: {
        setToken(state, newToken) {
            state.token = newToken
            console.log('###', newToken)
        }
    },
    actions: {},
    getters: {}
})


