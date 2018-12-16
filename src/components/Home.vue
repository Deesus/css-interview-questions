<template>
    <div class="home">
        <div class="home__header">About The <b>CSS Exercises</b></div>
        <div class="home__body">
            <p>
                These interactive questions are designed to test your CSS knowledge and ability to solve front-end styling problems.
                Each question will give you a description of the criteria required to pass the problem.
                <strong>Click on the question card</strong> to begin the problem. Open up your browser's DevTools;
                from there you can <strong>add/edit styles directly in DevTools</strong>.
                Remember, you can also add new CSS selectors in DevTools with the <strong>"+"</strong> button on the top right.
            </p>
            <figure>
                <img src="../images/dev_tools.png" alt="">
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


    /* TODO: `.home` is similar to the `.card` component -- perhaps we can reuse some of the code. */
    .home {
        grid-row: ~"2/3";
        grid-column: ~"2/3";
        min-width: 300px;
        min-height: 216px;
        width: calc(~"75% - 120px");
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.37);
        border-radius: @border-radius-default;
        border: 0;

        &__header {
            min-height: 48px;
            line-height: 1;
            border-bottom: @panel-border;
            padding: @panel-section-padding;
            font-size: @font-size-large;
            text-align: center;
        }

        &__body {
            padding: @panel-padding;

            /* TODO: n.b. these next 3 CSS selectors break BEM methodology rules: */
            p {
                &:first-child {
                    margin-top: 0;
                }

                &:last-child {
                    margin-bottom: 0;
                }
            }

            figure {
                float: right;

                img {
                    width: 250px;
                    height: auto;
                }
            }
        }
    }
</style>
