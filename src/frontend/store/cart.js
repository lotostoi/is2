import * as cartAPI from 'api/cartApi'
import Vue from 'vue'

export default {
  namespaced: true,

  state: {
    cartProducts: [],
  },

  getters: {
    cartProducts: (state) => state.cartProducts,
    allQuantity: (state) => state.cartProducts.reduce((all, prod) => all + prod.quantity, 0),
  },

  mutations: {
    setCartProducts(state, cartProducts) {
      state.cartProducts = cartProducts
    },

    addToCart: (state, prod) => {
      state.cartProducts.push(prod)
      console.log(prod)
    },

    incCart: (state, prod) => {
      let index = state.cartProducts.findIndex((good) => good.id === prod.id)
      Vue.set(state.cartProducts[index], 'quantity', ++state.cartProducts[index].quantity)
    },
  },

  actions: {
    async getCartProducts({ commit }) {
      try {
        const { content } = await cartAPI.all()
        commit('setCartProducts', content)
      } catch (e) {
        console.log(e)
      }
    },

    async incCart({ state, commit }, product) {
      try {
        let inCart = state.cartProducts.find((prod) => +prod.id === +product.id)
        console.log(state.cartProducts)
        if (inCart) {
          await cartAPI.inc(product)
          console.log(inCart, 1)
          commit('incCart', inCart)
        } else {
          const prodForCart = { ...product, quantity: 1 }
          await cartAPI.add(prodForCart)
          commit('addToCart', prodForCart)
        }
      } catch (e) {
        console.log(e)
      }
    },
  },
}
