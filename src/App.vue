<template>
    <div id="app-layout">
        <section-side-nav></section-side-nav>
        <transition
                mode="out-in"
                name="slide"
                enter-active-class="slide-in-right animated"
                leave-active-class="slide-out-right animated"
        >
            <router-view></router-view>
        </transition>
    </div>
</template>


<script>
    import SectionSideNav from './components/SectionSideNav.vue';

    export default {
        name: 'App',

        data() {
            return { };
        },

        components: {
            'section-side-nav': SectionSideNav
        }
    }
</script>


<style scoped lang="less">
    @import "./styles/base/_constants";


    #app-layout {
        display: grid;
        grid-template-columns: @side-nav-width 1fr;
        grid-template-rows: 100%;

        justify-items: center;
        align-items: center;
        grid-gap: 1px;
        grid-template-areas: "side-nav main";
        min-height: 100vh;
        overflow-x: hidden;     // prevents animation sliding from creating horizontal scrollbar
        background: rgb(244, 244, 239);
    }
</style>
