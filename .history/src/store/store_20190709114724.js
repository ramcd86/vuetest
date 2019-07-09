import Vue from 'vue';

export const store = Vue.observable({
    dataState: {
        shoes: [],
        shirts: []
    },
    purchaseState: []
})

export const mutate = {
    setShoes(state) {
        store.dataState.shoes = state;
    },
    setShirts(state) {
        store.dataState.shirts = state;
    },
    setPurchaseState(state) {
        // console.log('state', state)
        store.purchaseState.push(state);
        // console.log(store.purchaseState);
    },
    prunePurchaseState(index) {
        store.purchaseState.splice(index, 1)
    },
    incrementPurchaseState(index) {
        store.purchaseState[index].quantity = store.purchaseState[index].quantity + 1;
        store.purchaseState[index].displayPrice = store.purchaseState[index].price * store.purchaseState[index].quantity;
        // store.purchaseState[index].displayPrice = store.purchaseState[index].displayPrice.toFixed(2);
        store.purchaseState[index].displayPrice = parseInt(store.purchaseState[index].displayPrice);
    },
    decrementPurchaseState(index) {
        store.purchaseState[index].quantity = store.purchaseState[index].quantity - 1;
        store.purchaseState[index].displayPrice = store.purchaseState[index].price * store.purchaseState[index].quantity;
        // store.purchaseState[index].displayPrice = store.purchaseState[index].displayPrice.toFixed(2);
        store.purchaseState[index].displayPrice = parseInt(store.purchaseState[index].displayPrice);
        if (store.purchaseState[index].quantity <= 0) {
            this.prunePurchaseState(index);
        }
    }
}