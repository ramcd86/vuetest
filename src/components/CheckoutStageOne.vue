<template>
    <div class="row">
        <div class="col-12 header">
            <i class="fas fa-shopping-basket"></i> Basket
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

<style lang="scss" scoped>

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

    .checkout-item {
        display: block;
    }

</style>
