import Vue from 'vue'
import Vuex from 'vuex'
import _albums from './mock.js'
import _mutations from './mutations.js'
import _getters from './getters.js'
import _actions from './actions.js'
// Use "vuex-persistedstate" for persistent state management

// Setup global state
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    albums: _albums
  },
  mutations: _mutations,
  getters: _getters,
  actions: _actions
})
export default store
