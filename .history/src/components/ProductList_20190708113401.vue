
// Template
<template>
    <div class="row">
        <div class="col-12">
                <div v-for="item in dataSet" v-bind:key="item.id">
                    {{item.id}} | {{item.first_name}} {{item.last_name}} | {{item.email}}
                </div>
        </div>
    </div>
</template>

// Script
<script>
export default {
    name: 'productview',

    props: ['products'],

    data() {
        return {
            productData: [],
            // productData: ''
            }
    },

    created() {
        this.dataSet = this.products;
    },

    mounted() {
        console.log(this.dataSet);
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