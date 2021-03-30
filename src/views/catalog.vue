<template>
<div class="catalog">
  <h2 class="catalog_h2">CATALOG</h2>
    <products></products>
    <banner3></banner3>
</div>
</template>

<script>
import Products from "@/components/products";
import Banner3 from "@/components/baner3";

export default {
  name: "catalog",
  components: { Products, Banner3},
  methods: {
    addProduct($event) {
      console.log($event);
      this.$emit("add-product", $event);
    },
  }
}
</script>

<style scoped>
.catalog{
  margin-top: 120px;
  width: 100%;
}
@media (max-width: 838px) {
  .catalog{
    margin-top: 280px;
  }
}
</style>