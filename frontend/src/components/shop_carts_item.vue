<template>
  <div>
    <div class="mango_shirt_cart">
      <img :src="shopping.productImg" alt="" class="mango_shirt_cart_img" />
      <div class="mango_shirt_cart_text">
        <p class="mango_shirt_cart_p_head">{{ shopping.productName }}</p>
        <p class="mango_shirt_cart_color">Color: <span class="red_mango">Red</span></p>
        <p class="mango_shirt_cart_size">Size: <span>Xll</span></p>
      </div>
    </div>
    <div class="param_mango">
      <span class="disp_none_mango">
        <p>{{ shopping.productPrice }}</p>
        <input class="select_mango_menu" type="text" :value="shopping.amount" />
        <p>FREE</p>
        <p>{{ shopping.quantity }} x {{ shopping.productPrice }}</p>
        <a href="#" class="fas fa-times-circle" @click.prevent="decItem(shopping)"></a>
      </span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['shopping'],
  methods: {
    ...mapActions({
      addItem: 'cart/incCart',
      decItem: 'cart/decCart',
    }),
  },
}
</script>

<style></style>
