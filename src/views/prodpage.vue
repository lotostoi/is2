<template>
  <div>{{ prod }}</div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
export default {
  props: ['product'],
  methods: {
    ...mapActions({
      addItem: 'cart/incCart',
    }),
  },
  computed: {
    ...mapGetters({
       getItem: 'catalog/getItem',
    }),
    prodItemId() {
      console.log(this.$route.params)
      return +this.$route.params.id;
    },
    prod() {
      return this.getItem(this.prodItemId);
    }
  }
};
</script>

<style >
</style>