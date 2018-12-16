<!--
    Template/boilerplate for question components.
    Remember to import newly created question components to `questionList.js`
-->

<template>
    <question :description="description" :title="title" :thumbnailSrc="thumbnailSrc">
        <!-- TODO: insert the question's markup  -->
    </question>
</template>


<script>
    import Question from '../src/components/BaseQuestion.vue';
    const QUESTION_TITLE = '';              // TODO: set the question's title to be shown on navigation bar and on the card title


    export default {
        name: 'NewQuestionTemplate',        // TODO: set the correct name of the component

        components: {
            Question
        },

        data() {
            return {
                title: QUESTION_TITLE,
                description: "",            // TODO: fill out question description
                thumbnailSrc: require("")   // TODO: add screenshot to `/src/images/exercise_screenshots` and `require()` the image location here
            };
        }
    }
</script>


<style scoped lang="less">
    /* TODO: ensure file paths are pointing to correct directories: */
    @import "../src/styles/base/_constants";
    @import (reference) "../src/styles/utils/_utils";


    /* TODO: you may want to wrap the question's markup inside this container class: */
    .container {
        &:extend(.mixin-container);
    }
</style>
