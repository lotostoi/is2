import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import mainPage from '@/frontend/pages/main'
import cart from '@/frontend/pages/cart'
import prodpage from '@/frontend/pages/prodpage'
import checkout from '@/frontend/pages/checkout'
//import myform from '@/js/form'

const routes = [
  {
    name: 'main',
    path: '/:products',
    component: mainPage,
    props: true,
  },
  {
    name: 'cart',
    path: '/cart',
    component: cart,
  },
  {
    name: 'prodpage',
    path: '/prodpage',
    component: prodpage,
  },
  {
    name: 'checkout',
    path: '/checkout',
    component: checkout,
  },
]

let router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
