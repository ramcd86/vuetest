
// Template
<template>
    <div>
    <h1>SHOP TEMP</h1>
            <div v-for="data in dataSet" v-bind:key="data.id">
                {{data}}
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
            dataSet: [{
                id: 0,
                first_name: 'Yes',
                last_name: 'no'
            }]
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