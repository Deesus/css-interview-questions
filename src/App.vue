<template>
    <div id="app-layout">
        <section-side-nav></section-side-nav>
        <section-main>
            <transition
                    mode="out-in"
                    name="slide"
                    enter-active-class="slide-in-right animated"
                    leave-active-class="slide-out-right animated"
            >
                <router-view></router-view>
            </transition>
        </section-main>
    </div>
</template>


<script>
    import SectionSideNav from './components/SectionSideNav.vue';
    import SectionMain from './components/SectionMain.vue';

    export default {
        name: 'App',

        data() {
            return { };
        },

        components: {
            'section-side-nav': SectionSideNav,
            'section-main': SectionMain
        }
    }
</script>


<style scoped>
    #app-layout {
        min-height: 100vh;
    }
</style>
