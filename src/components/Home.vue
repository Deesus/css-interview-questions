<template>
    <div class="home">
        <div class="home__header">About The <b>CSS Exercises</b></div>
        <div class="home__body">
            <p>
                These interactive problems are designed to test your CSS knowledge and ability to solve front-end styling problems.
                After selecting a problem from the list of exercises, <strong>open up your browser's DevTools</strong>.
                From there you can add/edit styles directly in DevTools.
                Remember, you can also add new CSS selectors in DevTools with the "+" button on the top right.
            </p>
            <figure>
                <img class="img--dev-tools" src="../images/dev_tools.png" alt="">
            </figure>
            <p>
                All problems <strong>should be solved by only CSS</strong> (i.e. no JS and no markup changes).
                Note that there may be more than one solution to a given problem, but as with real-world scenarios, some solutions are better than others.
            </p>
        </div>
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
    @import "../styles/base/_constants";


    .home {
        grid-row: ~"2/3";
        grid-column: ~"2/3";
        min-width: 300px;
        min-height: 216px;
        width: calc(~"75% - 120px");
        box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
        border-radius: @border-radius-default;

        &__header {
            min-height: 48px;
            line-height: 1;
            border-bottom: @panel-border;
            padding: 16px 20px;
            font-size: @font-size-large;
            text-align: center;
        }

        &__body {
            padding: 16px 28px;
        }
    }

    .img--dev-tools {
        width: 250px;
        height: auto;
    }
</style>
