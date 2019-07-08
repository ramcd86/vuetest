<template>
    <div class="row">
        <div class="col-12">
            <h2>Basket</h2>
        </div>
        <div :if="selectedProducts" class="col-12">
            <span>{{selectedProducts.name}}</span>
            <span>{{selectedProducts.size}}</span>
            <span>{{selectedProducts.color}}</span>
            <span>{{selectedProducts.price}}</span>
            <span>{{selectedProducts.quantity}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CheckoutStageOne',

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

    span {
        display: block;
    }

</style>
