<template>
    <div id="app-layout">
        <layout-side-nav></layout-side-nav>
        <layout-main></layout-main>
    </div>
</template>


<script>
    import LayoutSideNav from './components/LayoutSideNav.vue';
    import LayoutMain from './components/LayoutMain.vue';

    export default {
        name: 'App',

        data() {
            return { };
        },

        components: {
            'layout-side-nav': LayoutSideNav,
            'layout-main': LayoutMain
        }
    }
</script>


<style scoped>
    #app-layout {
        min-height: 100vh;
    }
</style>
