
// Template
<template>
    <div class="row">
        <div class="col-12">
        <div class="row">
                <div class="col-4" v-for="item in products.shirts" v-bind:key="item.id">
                    <div class="col-12">{{item.shirtName}}</div>

                    <div class="col-12">
                        <select>
                            <option v-for="(color, index) in item.shirtColor" :key="`color-${index}`" :value="color">{{color}}</option>
                        </select>
                    </div>
                    <div class="col-12">{{item.shirtName}}</div>
                    <div class="col-12">{{item.shirtName}}</div>
                </div>
        </div>

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