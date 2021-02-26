import * as catalogAPI from 'api/catalogApi'

export default {
  namespaced: true,

  state: {
    products: [],
  },

  getters: {
    products: (state) => state.products,
  },

  mutations: {
    setProducts(state, products) {
      state.products = products
    },
  },

  actions: {
    async getProducts({ commit }) {
      try {
        const catalog = await catalogAPI.all()
        commit('setProducts', catalog)
      } catch (e) {
        console.log(e)
      }
    },
  },
}
