/* eslint-disable */
import { createRouter, createWebHistory } from "vue-router"


import mainPage from "@/views/main"
import cart from "@/views/cart"
import checkout from "@/views/checkout"
import catalog from "@/views/catalog"
import pageDevel from "@/views/page_development"


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
  },
  {
    name: "checkout",
    path: "/checkout",
    component: checkout
  },
  {
    name: "people",
    path: "/catalog",
    component: catalog
  },
  {
    name: "pagedevelopment",
    path: "/page_development",
    component: pageDevel
  },
]

let router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
