import Vue from 'vue'
import Vuex from 'vuex'
import state from './store/state.js'
import mutations from './store/mutations.js'
import getters from './store/getters.js'
import actions from './store/actions.js'

if(process.env.NODE_ENV == 'production'){
  Vue.config.devtools = false;
}else{
  Vue.config.devtools = true;
}

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
