<template>
  <shop-header></shop-header>
  <router-view />
  <shop-footer></shop-footer>
</template>
<script>
/* eslint-disable */
import ShopHeader from "@/components/header";
import ShopFooter from "@/components/footer";
export default {
  components: {
    ShopHeader,
    ShopFooter,
  },
  mounted() {
    this.$store.dispatch("catalog/getProducts");
    this.$store.dispatch("cart/getCartProducts");
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
