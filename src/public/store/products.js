import * as Tasks from '@/api/tasks'

const API = 'https://raw.githubusercontent.com/kellolo/static/master/JSON'

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
        async getProduts({ commit }) {
            const respons = await fetch(API + '/api/products')
            const products = await respons.json()
            commit('setProducts')
        }

    }
}