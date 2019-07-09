<template>
  <div class="row">
    <div class="col-12 header">
      <i class="fas fa-shopping-basket"></i> Basket
    </div>
    <div v-if="!selectedProducts" class="col-12">
      <span class="checkout-item">No products selected!</span>
      {{selectedProducts}}
    </div>
    <div v-if="selectedProducts" class="col-11 m-auto" style="position: sticky; top: 0px;">
      <div
        v-for="(item, index) in selectedProducts"
        :key="`item-${index}`"
        class="row selected-product"
      >
        <div class="col-12">Name: {{item.name}}</div>
        <div class="col-12">Size: {{item.size}}</div>
        <div class="col-12">Color: {{item.color}}</div>
        <div class="col-12">
          Price:
          <span class="price">£{{item.displayPrice}}</span>
        </div>
        <div class="col-12 quantity">
          Quantity:
          <i class="fas fa-minus-circle" @click="decrementQuantity(index)"></i>
          {{item.quantity}}
          <i
            class="fas fa-plus-circle"
            @click="incrementQuantity(index)"
          ></i>
        </div>
        <div class="col-12 text-right">
          <button class="btn btn-outline-warning btn-sm" @click="prune(index)">Remove</button>
        </div>
      </div>
    </div>
    <div class="col-12 selected-product">Total Price: {{totalPrice}}</div>
  </div>
</template>

<script>
import { store, mutate } from "@/store/store.js";

export default {
  name: "checkoutstageone",

  data() {
    return {
      selectedProducts: store.purchaseState,
      totalPrice: 0
    };
  },

  mounted() {

  },

  methods: {
    prune(index) {
      mutate.prunePurchaseState(index);
    },
    incrementQuantity(index) {
      mutate.incrementPurchaseState(index);
      this.totalPriceCalculator();
    },
    decrementQuantity(index) {
      mutate.decrementPurchaseState(index);
      this.totalPriceCalculator();
    },
  },

  updated() {
    console.log('state changed')
    let localVal = 0;
      for (let i = 0; i < this.selectedProducts.length; i++) {
        localVal = localVal + this.selectedProducts[i].displayPrice;
      }
    this.totalPrice = localVal.toFixed(2);
  },

  watch: {
  }
};
</script>

<style lang="scss" scoped>
button {
  padding: 5px;
  margin: {
    top: 10px;
  }
}

.quantity {
    -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;          /* Likely future */   
}

.selected-product {
  padding: 10px;
  font-weight: 900;
  background-color: rgb(247, 255, 248);
  margin: {
    top: 10px;
    bottom: 10px;
  }
  border-radius: 10px;
  i {
    color: green;
    cursor: pointer;
  }
  .price {
    color: green;
  }
}

.header {
  background-color: rgb(252, 252, 252);
  // margin-left: 15px;
  font-size: 22px;
  font-weight: 600;
  padding: 10px;
  margin-bottom: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03), 0 1px 2px rgba(0, 0, 0, 0.03);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.checkout-item {
  display: block;
}
</style>
