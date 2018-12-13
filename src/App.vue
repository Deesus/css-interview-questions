<template>
    <div id="app-layout">
        <section-header></section-header>

        <transition name="slide"
                    enter-active-class="slide-in-left animate-700"
                    leave-active-class="slide-out-left animate-700"
        >
            <section-side-nav v-if="shouldShowSideNav"></section-side-nav>
        </transition>

        <transition
                mode="out-in"
                name="fade-slide"
                enter-active-class="fade-slide-in-right animate-400"
                leave-active-class="fade-slide-out-right animate-400"
        >
            <router-view></router-view>
        </transition>
    </div>
</template>


<script>
    import SectionSideNav from './components/SectionSideNav.vue';
    import SectionHeader from './components/SectionHeader.vue';


    export default {
        name: 'App',

        data() {
            return { };
        },

        computed: {
            shouldShowSideNav() {
                return this.$store.state.shouldShowQuestionMarkup === false;
            }
        },

        components: {
            SectionSideNav,
            SectionHeader
        }
    }
</script>


<style scoped lang="less">
    @import "./styles/base/_constants";

    // TODO: might need to add @media queries
    #app-layout {
        margin: auto;
        display: grid;
        width: 100vw;
        grid-template-columns: @section-side-nav-width 6fr;
        grid-template-rows: auto 1fr;
        justify-items: center;
        align-items: center;
        grid-gap: 1px;
        min-height: 100vh;
        overflow-x: visible;     // n.b. set to hidden to prevent animation sliding from creating horizontal scrollbar
    }
</style>
