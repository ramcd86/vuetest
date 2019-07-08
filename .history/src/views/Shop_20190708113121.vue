
// Template
<template>
    <div class="row">
    <div class="col-8 block text-left">
        <h1>SHOP TEMP</h1>
            <div v-for="item in dataSet" v-bind:key="item.id">
                {{item.id}} | {{item.first_name}} {{item.last_name}} | {{item.email}}
            </div>
            <input type="text" placeholder="input" v-model="inputData">
            {{inputData}}
    </div>
    <div class="col-4">
    </div>

    </div>
</template>

// Script
<script>
export default {
    name: 'shop',

    props: ['queryData'],

    data() {
        return {
            dataSet: [],
            inputData: ''
            }
    },

    created() {
        this.dataSet = this.queryData;
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