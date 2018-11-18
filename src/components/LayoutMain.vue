<template>
    <div class="main">
        <transition
            mode="out-in"
            name="main-view-transitions"
            enter-active-class="slideInRight animated"
            leave-active-class="slideOutRight animated"
        >
            <router-view></router-view>
        </transition>
    </div>
</template>


<script>
    export default {
        name: 'LayoutMain',

        data() {
            return {};
        },

        methods: {},

        computed: {}
    }
</script>


<style scoped>
    .main {
        max-width: calc(100% - 280px);
        margin-left: 280px;
        min-height: 100vh;
        width: 100%;
        position: relative;
        overflow-x: hidden;
    }
</style>
