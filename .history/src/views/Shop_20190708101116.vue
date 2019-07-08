
// Template
<template>
    <div>
    <h1>SHOP TEMP</h1>
            <div :for="item in dataSet" :key="item.id">
                {{item.id}} | {{item.first_name}} {{item.last_name}} | {{item.email}}
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