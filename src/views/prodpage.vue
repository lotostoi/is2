<template>
  <div :items="product">

    <img :src="slotProps.productImg" alt="" class="img_blockitem" />
      <div class="layer">
          <a href="" @click.prevent="addItem(product)" class="add_to_cart1"> Add to Cart</a>
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
};
</script>

<style scoped>
</style>