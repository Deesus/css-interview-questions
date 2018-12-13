<template>
    <div class="c-home">
        Home
    </div>
</template>


<script>
    const QUESTION_TITLE = 'Questions';


    export default {
        name: 'Home',

        title: QUESTION_TITLE,

        data() {
            return {};
        },

        methods: {},

        computed: {}
    }
</script>


<style scoped lang="less">
    .c-home {
        grid-row: ~"2/3";
        grid-column: ~"2/3";
    }
</style>
