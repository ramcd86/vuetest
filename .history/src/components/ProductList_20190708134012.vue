
// Template
<template>
    <div class="row">
        <div class="col-12">
                <div v-for="item in products.shirts" v-bind:key="item.id">
                    {{item.shirtName}} | {{item.first_name}} {{item.last_name}} | {{item.email}}
                </div>
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
        console.log(this.products.shirts);
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