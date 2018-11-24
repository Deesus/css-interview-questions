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


<style scoped>
    #app-layout {
        min-height: 100vh;
        overflow-x: hidden;     /* prevents animation sliding from creating horizontal scrollbar */
    }
</style>
