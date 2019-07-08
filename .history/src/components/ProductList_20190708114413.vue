
// Template
<template>
    <div class="row">
        <div class="col-12">
                <div v-for="item in products" v-bind:key="item.id">
                    {{item.id}} | {{item.first_name}} {{item.last_name}} | {{item.email}}
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
        products: Array
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