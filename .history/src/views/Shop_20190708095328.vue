
// Template
<template>
    <div>
    <h1>SHOP TEMP</h1>
            <div v-for="data in queryData" v-bind:key="data.id">
                {{data}}
            </div>
    </div>
</template>

// Script
<script>
export default {
    name: 'shop',

    props: ['queryData'],

    data: {
        dataSet: []
    },

    created() {
        this.dataSet = this.queryData;
    },

    mounted() {
        console.log(this.dataSet);
    }
}
</script>

// Style
<style lang="scss" scoped>


</style>