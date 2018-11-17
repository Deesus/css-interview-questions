<template>
    <div class="main">
        <router-view></router-view>
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
        min-height: 100%;
    }
</style>
