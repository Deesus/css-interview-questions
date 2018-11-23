<template>

    <div class="main">
        <slot></slot>
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
