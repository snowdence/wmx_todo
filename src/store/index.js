import Vue from 'vue'
import Vuex from 'vuex'
import AuthModule from './modules/auth_info'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    a: AuthModule
  },
})