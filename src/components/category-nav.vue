<template>
<div class="category">
    <p @click="show=!show" class="footer_h2">SHOP CATEGORY</p>
    <transition name="category">
      <ul v-if="show">
        <li class="footer_list" v-for="item in items">{{ item }}</li>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
name: "category-nav",
  data: () => ({
    items:[
      'Men',
      'Women'
    ],
    show: false
  })
}
</script>

<style scoped>
.footer_list {
  height: 44px;
}
.footer_h2 {

  font-size: 18px;
  line-height: 26px;
  font-weight: 700;
  letter-spacing: 0.025em;
  color: #f16d7f;
}
.category-enter-active,
.category-leave-active {
  transition: opacity .3s ease;
}
.category-enter,
.category-leave-to {
  opacity: 0;
}
.category{
  display: none;
}
@media (max-width: 838px) {
  .category{
    width: 100%;
    display: block;
  }
}
</style>