import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import mainPage from '@/frontend/pages/main'
import cart from '@/frontend/pages/cart'


const routes = [
  {
    name: 'main',
    path: '/',
    component: mainPage,
  },
  {
    name: 'cart',
    path: '/cart',
    component: cart,
  },
  {
    name: 'cart',
    path: '/cart',
    component: cart,
  },
 
]

let router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
