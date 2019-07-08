<template>
    <div class="row">
        <div class="col-12">
            <h2>Basket</h2>
        </div>
        <div v-if="!selectedProducts" class="col-12">
            <span class="checkout-item">No products selected!</span>
        </div>
        <div v-if="selectedProducts" class="col-12">
            <span class="checkout-item">{{selectedProducts.name}}</span>
            <span class="checkout-item">{{selectedProducts.size}}</span>
            <span class="checkout-item">{{selectedProducts.color}}</span>
            <span class="checkout-item">{{selectedProducts.price}}</span>
            <span class="checkout-item">{{selectedProducts.quantity}}</span>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'checkoutstageone',

    props: {
        selectedProducts: Object
    },

    data() {
        return {

        }
    }
}
</script>

<style lang="sass" scoped>

    // .checkout-item {
    //     display: block;
    // }

</style>
