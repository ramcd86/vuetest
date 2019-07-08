
// Template
<template>
  <div class="row">
    <div class="col-12">
      <div class="row">
        <div class="col-12 header">
          <i class="fas fa-tshirt"></i> See our range of Shirts!
        </div>
        <div class="col-4 clothing-item" v-for="item in products.shirts" v-bind:key="item.id">
          <div class="col-12 text-center">
            <i class="fab fa-shirtsinbulk"></i>
          </div>

          <div class="col-12 text-center">
            <h2>{{item.shirtName}}</h2>
          </div>

          <div class="col-12 form-group">
            <label for="shirtColor">Shirt Color:</label>
            <select id="shirtColor" :class="formControl + ' _color-' + item.id">
              <option disabled value>Please select:</option>
              <option
                v-for="(color, index) in item.shirtColor"
                :key="`color-${index}`"
                :value="color"
              >{{color}}</option>
            </select>
          </div>
          <div class="col-12 form-group">
            <label for="shirtSize">Shirt Size:</label>
            <select id="shirtSize" :class="formControl + ' _size-' + item.id">
              <option disabled value>Please select:</option>
              <option
                v-for="(size, index) in item.shirtSize"
                :key="`size-${index}`"
                :value="size"
              >{{size}}</option>
            </select>
          </div>
          <div class="col-12">
            <div class="row">
              <div class="col-12 text-center">
                <button
                  v-on:click="clickHandler(item)"
                  class="btn btn-success btn-lg"
                >£{{item.price}}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

// Script
<script>
import { store, mutate } from "@/store/store.js";

export default {
  name: "productlist",

  data() {
    return {
      products: store.dataState,
      purchaseState: store.purchasState,
      formControl: "form-control",
      productData: []
    };
  },

  created() {},

  mounted() {},

  methods: {
    clickHandler(item) {
      const selectedItem = {
        id: item.id,
        name: item.shirtName,
        color: document.querySelector(`._color-${item.id}`).value,
        size: document.querySelector(`._size-${item.id}`).value,
        price: item.price,
        displayPrice: item.price,
        quantity: 1
      };
      mutate.setPurchaseState(selectedItem);
    }
  },

  watch: {}
};
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
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03), 0 1px 2px rgba(0, 0, 0, 0.03);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
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