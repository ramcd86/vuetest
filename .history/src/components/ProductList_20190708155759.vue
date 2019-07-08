
// Template
<template>
    <div class="row">
        <div class="col-12">
        <div class="row">
                <div class="col-12 header"><i class="fas fa-tshirt"></i> See our range of Shirts!</div>
                <div class="col-4 clothing-item" v-for="item in products.shirts" v-bind:key="item.id" v-on:click="clickHandler(item)">
                    <div class="col-12 text-center"><i class="fab fa-shirtsinbulk"></i></div>

                    <div class="col-12 text-center"><h2>{{item.shirtName}}</h2></div>

                    <div class="col-12 form-group">
                        <label for="shirtColor">Shirt Color:</label>
                        <select id="shirtColor" class="form-control" @change="colorChanger(index)">
                            <option disabled value="">Please select:</option>
                            <option v-for="(color, index) in item.shirtColor" :key="`color-${index}`" :value="color">{{color}} {{index}}</option>
                        </select>
                    </div>
                    <div class="col-12 form-group">
                        <label for="shirtSize">Shirt Size:</label>
                        <select id="shirtSize" class="form-control" @change="sizeChanger(index)">
                            <option disabled value="">Please select:</option>
                            <option v-for="(size, index) in item.shirtSize" :key="`size-${index}`" :value="size">{{size}} {{index}}</option>
                        </select>
                    </div>
                    <div class="col-12">
                        <div class="row">
                            <div class="col-12 text-center"><h3>£{{item.price}}</h3></div>
                        </div>
                    </div>


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
        products: Object,
    },

    data() {
        return {
            productData: [],
            colorArray: [],
            sizeArray: [],
            // productData: ''
            colors: [],
            sizes: [],
            selectedColor: [],
            selectedSizes: []
            }
    },

    created() {
        // this.dataSet = this.productData;
        this.products.shirts[0].shirtColor.forEach((color) => {
            this.colors.push(color)
        })
        this.products.shirts[0].shirtSize.forEach((size) => {
            this.sizes.push(size)
        })
    },

    mounted() {
        // console.log(this.products.shirts[0].shirtColor);
        console.log(this.colorArray);
    },

    methods: {
        clickHandler(event) {
            console.log(event)
        },
        colorChanger(val) {
            console.log(val)
        },
        sizeChanger(val) {
            console.log(val)
        }
    },

    watch: {
        inputData(val) {
            console.log(val)
        },
        selectedColor(val) {
            console.log(val)
        },
        selectedSize(val) {
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



    h2 {
        font-size: 26px;
        font-weight: 900;
    }

    h3 {
        padding-top: 3px;
        font-size: 22px;
        color: green;
        font-weight: 600;
    }

    .clothing-item {
        margin: {
            top: 10px;
            bottom: 45px;
        }
        padding-bottom: 10px;
        border-bottom: 10px solid white;
            i {
        font-size: 160px;
        margin-top: 10px;
        margin-bottom: 10px;
        color: #555;
    }
        &:hover {
            background-color: rgb(247, 255, 248);
            cursor: pointer;
            border-bottom: 10px solid #eee;
            h3 {
                text-decoration: underline;
            }
            i {
                color: green;
            }
        }
    }

</style>