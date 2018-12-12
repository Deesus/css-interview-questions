<template>
    <div class="section-header">

    </div>
</template>


<script>
    export default {
        name: 'SectionHeader',


        data() {
            return {};
        },


        methods: {},


        computed: {}
    }
</script>


<style scoped lang="less">
    .section-header {
        grid-row: ~"1/2";
        grid-column: ~"1/5";
        z-index: 40;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
        background: white;
        width: 100%;
        height: auto;
        padding: 16px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
    }
</style>
