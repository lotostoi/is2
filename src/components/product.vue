<template>
  <div class="item_card">
    <div class="item_img">
      <img :src="product.productImg" alt="" class="img_blockitem" />
      <div class="layer">
        <a href="" @click.prevent="addItem(product)" class="add_to_cart1">Add to Cart</a>
      </div>
    </div>
    <div class="title_blockitem">
      <p class="text_blockitem">{{ product.productName }}</p>
      <p class="price_blockitem">{{ product.productPrice }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['product'],
  methods: {
    ...mapActions({
      addItem: 'cart/incCart',
    }),
  },
}
</script>

<style></style>
