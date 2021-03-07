<template>
  <div>
    <header-secondery></header-secondery>
    <main>
      <div class="menu_shopping">
        <ul class="menu_shopping_ul">
          <li class="menu_shopping_li">
            <p class="menu_shopping_p">Product Details</p>
          </li>
          <li class="menu_shopping_li">
            <p class="menu_shopping_p">unitePrice</p>
          </li>
          <li class="menu_shopping_li">
            <p class="menu_shopping_p">Quantity</p>
          </li>
          <!--   <li class="menu_shopping_li">
            <p class="menu_shopping_p">shipping</p>
          </li> -->
          <li class="menu_shopping_li">
            <p class="menu_shopping_p">Subtotal</p>
          </li>
          <li class="menu_shopping_li">
            <p class="menu_shopping_p">ACTION</p>
          </li>
        </ul>
      </div>

      <shop-cart></shop-cart>

      <div class="shopping_cart_contin">
        <div class="shopping_button">
          <a href="" class="button_shopping">CLEAR SHOPPING CART</a>
          <a href="" class="button_shopping">cLEAR SHOPPING CART</a>
        </div>
        <div class="adress_coupon_total">
          <div class="row">
            <div class="col-md-4">
              <p class="shipping_adress">Shipping Adress</p>
              <select name="Bangladesh" id="" class="bangladesh">
                <option value="Bangladesh">Bangladesh</option>
              </select>
              <select name="State" id="" class="bangladesh">
                <option value="State">State</option>
              </select>
              <select name="Postcode / Zip" id="" class="bangladesh">
                <option value="Postcode / Zip">Postcode / Zip</option>
              </select>
              <a href="" class="button_get">get a quote</a>
            </div>
            <div class="col-md-4">
              <p class="shipping_adress">coupon discount</p>
              <p class="coupon_enter">Enter your coupon code if you have one</p>
              <select name="State" id="" class="bangladesh">
                <option value="State">State</option>
              </select>
              <a href="" class="button_get get_1">Apply coupon</a>
            </div>
            <div class="col-md-4">
              <div class="grand">
                <p class="sub_total">Sub total $900</p>
                <p class="sub_grand">
                  GRAND TOTAL <span class="g_total">$900</span>
                </p>
                <div class="line_grand"></div>
                <router-link :to="{ name: 'checkout' }"
                  ><a href="" class="proceed"
                    >proceed to checkout</a
                  ></router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <baner3></baner3>
  </div>
</template>

<script>
import HeaderSecondery from "@/components/header-secondery";
import shopCart from "@/components/shop_carts";
import Baner3 from "@/components/baner3";
export default {
  components: {Baner3, shopCart, HeaderSecondery },
};
</script>

<style lang = "scss" scoped>
.new_arrivals_background {
  margin-top: 160px;
}
.menu_shopping {
  margin: 10px 0 20px 0;
  display: flex;
  flex-direction: column;
  & > ul.menu_shopping_ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid gray;
    & > li.menu_shopping_li {
      width: 20%;
    }
  }
}
</style>
