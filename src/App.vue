<template>
    <div id="app">
        <router-view />
    </div>
</template>
<script>
export default {
    name: 'App',

    mounted() {
        // this.$store.dispatch('VsAdmin/fullscreen/listen')
    }
}

</script>
<style>
/*#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}*/

</style>
<style lang="scss">
@import '~@/assets/css/public-class.scss';

</style>
