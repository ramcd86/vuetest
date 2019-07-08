
// Template
<template>
    <div>
    <h1>SHOP TEMP</h1>
            <div v-for="data in dataSet" v-bind:key="data.id">
                {{data.first_name}}
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
        console.log(this.dataSet);
    }
}
</script>

// Style
<style lang="scss" scoped>


</style>