
// Template
<template>
    <div>
    <h1>SHOP TEMP</h1>
    </div>
</template>

// Script
<script>
export default {
    name: 'shop',

    props: {
        data: queryData
    },

    mounted() {
        console.log(this.data);
    }
}
</script>

// Style
<style lang="scss" scoped>


</style>