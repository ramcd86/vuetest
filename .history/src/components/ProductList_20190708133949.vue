
// Template
<template>
    <div class="row">
        <div class="col-12">

                a
        </div>
    </div>
</template>

// Script
<script>
export default {
    name: 'productlist',

    props: {
        products: Object
    },

    data() {
        return {
            productData: [],
            // productData: ''
            }
    },

    created() {
        this.dataSet = this.productData;
    },

    mounted() {
        console.log(this.products);
    },

    watch: {
        inputData(val) {
            console.log(val)
        }
    }
}
</script>

// Style
<style lang="scss" scoped>


</style>