import ShopHeader from 'comp/header'
import ShopFooter from 'comp/footer'
import mySearch from 'comp/mySearch'
import router from '@/frontend/router/router'
import store from '@/frontend/store'

store.dispatch("catalog/getProducts")
store.dispatch("cart/getCartProducts")

const app = {
  el: '#adde',
  router,
  store,
  data: {
    filtered: [],
    shopping: [],
    userSearch: '',
  },
  components: {
    mySearch,
    ShopHeader,
    ShopFooter,
  },
}
export default app
