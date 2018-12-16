<template>

    <question :description="description" :title="title" :thumbnailSrc="thumbnailSrc">
        <div class="container">
            <button class="btn" type="button">Horizontally Center Me</button>
        </div>
    </question>

</template>


<script>
    import Question from '../BaseQuestion.vue';
    const QUESTION_TITLE = 'Horizontal Centering';

    export default {
        name: 'QuestionHCenterElement',

        title: QUESTION_TITLE,

        data() {
            return {
                title: QUESTION_TITLE,
                description: "Centering elements is one of the most common tasks front-end developers face. " +
                             "For this challenge, let's horizontally center the button with respect to its container.",
                thumbnailSrc: require('../../images/exercise_screenshots/h_center.png')
            };
        },

        methods: {},

        computed: {},

        components: {
            'question': Question
        }
    }
</script>


<style scoped lang="less">
    @import (reference) "../../styles/utils/_utils";

    .container {
        &:extend(.mixin-container);
    }
</style>
