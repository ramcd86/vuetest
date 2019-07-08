
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
        incomingData: Array
    },

    mounted() {
        console.log(this.incomingData);
    }
}
</script>

// Style
<style lang="scss" scoped>


</style>