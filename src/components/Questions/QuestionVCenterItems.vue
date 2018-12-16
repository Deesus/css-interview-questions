<template>
    <question :description="description" :title="title" :thumbnailSrc="thumbnailSrc">
        <div class="container">
            <input class="input" type="text" placeholder="Username">
            <p class="text">
                Reiciendis earum sit aut quos dolor perspiciatis eos sunt.
                Illo distinctio voluptatem sint in odio necessitatibus qui nesciunt. Ipsa autem et laborum suscipit iure.
                Sunt quis tempora modi deleniti enim.
            </p>
            <button class="btn">okay</button>
            <input type="checkbox" checked="checked">
            <div class="circle"></div>
        </div>
    </question>
</template>


<script>
    import Question from '../BaseQuestion.vue';
    const QUESTION_TITLE = 'Vertically Align in a Row';

    export default {
        name: 'QuestionVCenterItems',

        title: QUESTION_TITLE,

        data() {
            return {
                title: QUESTION_TITLE,
                description: "Before the advent of CSS3 specs, vertically centering elements inside a container used to be challenging. " +
                             "In this problem, the elements in the container are stacked on top of each other -- correct " +
                             "this by displaying all of them in a single row and vertically centering them inside the container.",
                thumbnailSrc: require('../../images/exercise_screenshots/v_align.png')
            }
        },

        components: {
            Question
        }
    }
</script>


<style scoped lang="less">
    @import (reference) "../../styles/utils/_utils";


    .container {
        &:extend(.mixin-container);

        & > * {
            margin: 6px;
        }
    }

    .circle {
        background: #ffe732;
        border: 1px solid #242424;
        border-radius: 50%;
        box-shadow: 2px 1px 2px rgba(0, 0, 0, 0.2);
        height: 40px;
        width: 40px;
        margin: 10px;
    }

    p.text {
        padding: 10px;
        max-width: 300px;
        border: 1px solid #41313c;
    }
</style>
