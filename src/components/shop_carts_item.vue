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
    <mango v-if="show = !show"></mango>
    <mangobig v-else ></mangobig>
    <div class="action">
      <button class="dellEll" @click.prevent="decItem(shopping)"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
    </div>
  </div>
</template>

<script>

import { mapActions } from "vuex";
import mango from "@/components/mango_price";
import mangobig from "@/components/mango_price_big";
export default {
  data: () => ({
  show: false,
  width: 0,

}),
  components: { mango, mangobig },
  props: ["shopping"],

  methods: {
    updateWidth() {
      this.width = window.innerWidth;
      console.log(this.width);
      if(this.width < 838) {
      this.show = true
      }
    },
      ...mapActions({
      addItem: "cart/incCart",
      decItem: "cart/decCart",
    }),
  },
  created() {
    window.addEventListener('resize', this.updateWidth);
  },
}
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
