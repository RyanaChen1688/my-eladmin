import Vue from "vue"
import Vuex from "vuex"
import createPersistedState from 'vuex-persistedstate';
import layout from "./modules/layout";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        layout
    },
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
    getters: {},
    plugins: [createPersistedState({
        paths: ['token']
    })]
})


