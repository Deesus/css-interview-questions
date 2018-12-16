<template>
    <question :description="description" :title="title" :thumbnailSrc="thumbnailSrc">
        <div class="container">
            <img src="../../images/summer_garden.jpg" alt="Summer Garden">
        </div>
    </question>
</template>


<script>
    import Question from '../BaseQuestion.vue';
    const QUESTION_TITLE = 'Black and White Photo';


    export default {
        name: 'QuestionBlackAndWhite',

        title: QUESTION_TITLE,

        components: {
            Question
        },

        data() {
            return {
                title: QUESTION_TITLE,
                description:
                    "We have a color photo of the beautiful Summer Gardens -- but let's style it such that when our cursor " +
                    "hovers over the image, the color photo turns into a black and white photo. (N.b. this won't work on Internet Explorer.)",
                thumbnailSrc: require("../../images/exercise_screenshots/b_and_w.png")

            };
        },

        methods: {},

        computed: {}
    }
</script>


<style scoped lang="less">
    @import "../../styles/base/_constants";
    @import (reference) "../../styles/utils/_utils";


    .container {
        &:extend(.mixin-container);
        text-align: center;
    }

    img {
        transition: 400ms all ease-in-out;
        vertical-align: bottom;

        &:hover {
            border: 0;
        }
    }
</style>
