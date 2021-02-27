<template>
  <div class="mango_shirt_1">
    <shopping v-for="item of cartItems" :key="item.productId" :shopping="item">
    </shopping>
  </div>
</template>

<script>
import Shopping from "@/components/shop_carts_item";
import { mapGetters } from "vuex";
export default {
  props: ["shop_cart"],
  components: { Shopping },
  methods: {},
  computed: {
    ...mapGetters({
      cartItems: ["cart/cartProducts"],
    }),
  },
};
</script>

<style>
</style>