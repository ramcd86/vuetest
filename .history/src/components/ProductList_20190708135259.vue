
// Template
<template>
    <div class="row">
        <div class="col-12">
        <div class="row">
                <div class="col-4 clothing-item" v-for="item in products.shirts" v-bind:key="item.id">

                    <div class="col-12 text-center"><i class="fab fa-shirtsinbulk"></i></div>

                    <div class="col-12"><h2>{{item.shirtName}}</h2></div>

                    <div class="col-12">
                        <select>
                            <option v-for="(color, index) in item.shirtColor" :key="`color-${index}`" :value="color">{{color}}</option>
                        </select>
                    </div>
                    <div class="col-12">
                        <select>
                            <option v-for="(size, index) in item.shirtSize" :key="`size-${index}`" :value="size">{{size}}</option>
                        </select>
                    </div>
                    <div class="col-12"><h3>{{item.price}}</h3></div>
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

    h2 {
        font-size: 26px;
        font-weight: 900;
    }

    h3 {
        font-size: 20px;
        font-weight: 600;
    }

    .clothing-item {
        margin: {
            top: 10px;
            bottom: 10px;
        }
    }

</style>