<template>
  <div>
    <a href="#" class="button_browse"
      >Browse <img src="@/assets/img/52.png" alt="" class="strela"
    /></a>
    <input type="text" class="search_input_shop" v-model="userSearch" />
    <a
      href="#"
      @click.prevent="$parent.searchProduct(userSearch)"
      class="search_top"
      ><img src="@/assets/img/59.png" alt="" class="search_img"
    /></a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userSearch: "Search for Item...",
    };
  },
};
</script>

<style></style>
