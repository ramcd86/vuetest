
// Template
<template>
    <div class="row">
        <div class="col-12">
        <div class="row">
                <div class="col-12 header">See our range of Shirts!</div>
                <div class="col-4 clothing-item" v-for="item in products.shirts" v-bind:key="item.id">

                    <div class="col-12 text-center"><i class="fab fa-shirtsinbulk"></i></div>

                    <div class="col-12"><h2>{{item.shirtName}}</h2></div>

                    <div class="col-12 form-group">
                        <label for="shirtColor">Shirt Color:</label>
                        <select id="shirtColor" class="form-control">
                            <option v-for="(color, index) in item.shirtColor" :key="`color-${index}`" :value="color">{{color}}</option>
                        </select>
                    </div>
                    <div class="col-12 form-group">
                        <label for="shirtSize">Shirt Size:</label>
                        <select id="shirtSize" class="form-control">
                            <option v-for="(size, index) in item.shirtSize" :key="`size-${index}`" :value="size">{{size}}</option>
                        </select>
                    </div>
                    <div class="col-4"><h3>£{{item.price}}</h3></div>
                    <div class="col-8"><button class="btn btn-light">Buy Now</button></div>
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

    label {
        font-size: 14px;
        font-weight: 300;
    }

    .header {
        background-color: rgb(252, 252, 252);
        // margin-left: 15px;
        font-size: 22px;
        font-weight: 600;
        padding: 10px;
        margin-bottom: 15px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.03), 0 1px 2px rgba(0,0,0,0.03);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    }

    i {
        font-size: 160px;
        margin-top: 10px;
        margin-bottom: 10px;
        color: #555;
    }

    h2 {
        font-size: 26px;
        font-weight: 900;
    }

    h3 {
        font-size: 22px;
        font-weight: 600;
    }

    .clothing-item {
        margin: {
            bottom: 10px;
        }
    }

</style>