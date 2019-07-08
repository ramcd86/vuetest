
// Template
<template>
    <div class="row">
    <div class="col-8 block text-left">
        <ProductList v-bind:products="queryData"></ProductList>
    </div>
    <div class="col-4">
        <CheckoutStageOne></CheckoutStageOne>
    </div>

    </div>
</template>

// Script
<script>

import ProductList from '@/components/ProductList.vue'
import CheckoutStageOne from '@/components/CheckoutStageOne.vue'

export default {

    components: {
        ProductList,
        CheckoutStageOne
    },

    name: 'shop',

    props: ['queryData'],

    data() {
        return {
            dataSet: [],
            inputData: ''
            }
    },

    created() {
        this.dataSet = this.queryData;
    },

    mounted() {
        // console.log(this.dataSet);
    },

    // watch: {
    //     inputData(val) {
    //         console.log(val)
    //     }
    // }
}
</script>

// Style
<style lang="scss" scoped>


</style>