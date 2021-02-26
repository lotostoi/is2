import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//import cart from './cart'
//import alerts from './alerts'
import catalog from './products'

const store = new Vuex.Store({
  namespaced: true,
  modules: {
    catalog,
    //cart,
    //alerts,
  },

  strict: process.env.NODE_ENV !== 'production',
})
export default store
