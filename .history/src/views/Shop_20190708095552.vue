
// Template
<template>
    <div>
    <h1>SHOP TEMP</h1>
            <div v-for="item in dataSet" v-bind:key="item.id">
                {{item.id}}
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
            dataSet: []
            }
    },

    created() {
        this.dataSet = this.queryData;
    },

    mounted() {
        console.log(typeof this.dataSet);
    }
}
</script>

// Style
<style lang="scss" scoped>


</style>