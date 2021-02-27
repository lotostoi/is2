/* eslint-disable */
import { createRouter, createWebHistory } from "vue-router"


import mainPage from "@/views/main"
import cart from "@/views/cart"


const routes = [
  {
    name: "main",
    path: "/",
    component: mainPage
  },
  {
    name: "cart",
    path: "/cart",
    component: cart
  }
]

let router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
