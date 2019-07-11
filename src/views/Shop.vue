
// Template
<template>
  <div class="row">
    <div class="col-12 col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 block text-left">
      <ProductList></ProductList>
    </div>
    <div class="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 block text-left">
      <CheckoutStageOne></CheckoutStageOne>
    </div>
  </div>
</template>

// Script
<script>
import ProductList from "@/components/ProductList.vue";
import CheckoutStageOne from "@/components/CheckoutStageOne.vue";

export default {
  components: {
    ProductList,
    CheckoutStageOne
  },

  name: "shop",

  data() {
    return {};
  },

  created() {},

  mounted() {},

  watch: {}
};
</script>

// Style
<style lang="scss" scoped>
</style>