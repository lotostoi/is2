<template>
  <banner1></banner1>
    <main>
      <collection></collection>
      <div class="fetured_h2_title">
        <h2 class="block_fetured">Fetured Items</h2>
        <p class="subtitle_blockitem">
          Shop for items based on what we featured in this week
        </p>
      </div>
      <div class="block_fetured_items" id="catalog">
        <products></products>
      </div>
      <div class="all_product">
        <a href="" class="button_prod">Browse All Product</a>
      </div>
      <banner2></banner2>
    </main>
  <banner3></banner3>
</template>

<script>
import Products from "@/components/products";
import Banner2 from "@/components/baner2";
import Banner3 from "@/components/baner3";
import Banner1 from "@/components/baner1";
import Collection from "@/components/collection-clearfix";
export default {
  components: { Products, Banner2, Banner3, Banner1, Collection },
  methods: {
    addProduct($event) {
      console.log($event);
      this.$emit("add-product", $event);
    },
  },
  computed: {},
};
</script>

<style>
</style>