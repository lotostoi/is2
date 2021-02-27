<template>
  <div class="cartItem">
    <div class="mango_shirt_cart">
      <img :src="shopping.productImg" alt="" class="mango_shirt_cart_img" />
      <div class="mango_shirt_cart_text">
        <p class="mango_shirt_cart_p_head">{{ shopping.productName }}</p>
        <p class="mango_shirt_cart_color">
          Color: <span class="red_mango">Red</span>
        </p>
        <p class="mango_shirt_cart_size">Size: <span>Xll</span></p>
      </div>
    </div>
    <div class="prise">${{ shopping.productPrice }}</div>
    <div class="prise">{{ shopping.quantity }}шт</div>
    <div class="prise">${{ shopping.quantity * shopping.productPrice }}</div>
    <div class="action">
      <button class="dellEll" @click.prevent="decItem(shopping)">X</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["shopping"],
  methods: {
    ...mapActions({
      addItem: "cart/incCart",
      decItem: "cart/decCart",
    }),
  },
};
</script>

<style  lang ="scss" scoped>
.cartItem {
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
  margin-bottom: 20px;
  & > div{
    width: 20%;
  }
}
.dellEll {
  width: 30px;
  height: 30px;
  color: black;
}
</style>
