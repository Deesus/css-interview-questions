<template>
    <question :description="description" :title="title" :thumbnailSrc="thumbnailSrc">
        <div class="container">
            <div class="row">
                <input placeholder="howdy" type="text">
                <input type="button" value="okay">
                <input placeholder="hello" type="text">
                <input placeholder="hi" type="text">
            </div>
            <div class="row">
                <input type="button" value="cancel">
                <input placeholder="foo" type="text">
                <input placeholder="bar" type="text">
                <input placeholder="baz" type="text">
                <input placeholder="thud" type="text">
            </div>
            <div class="row">
                <input placeholder="moo" type="text">
                <input type="button" value="ok">
                <input placeholder="oink" type="text">
                <input placeholder="meow" type="text">
                <input type="button" value="confirm">
            </div>
            <div class="row">
                <input placeholder="yana" type="text">
                <input placeholder="galina" type="text">
                <input placeholder="alina" type="text">
                <input type="button" value="warning">
            </div>
        </div>
    </question>
</template>


<script>
    import Question from '../BaseQuestion.vue';
    const QUESTION_TITLE = 'Color Only the Buttons';


    export default {
        name: 'QuestionSelectOnlyButtons',

        title: QUESTION_TITLE,

        components: {
            Question
        },

        data() {
            return {
                title: QUESTION_TITLE,
                description:
                    "It looks like we have a form with lots of \"input\" tags; however, we want to style only the tags that look and behave like buttons. " +
                    "Select all the buttons and set their background color to 'orange' while ensuring the text fields remain unchanged.",
                thumbnailSrc: require('../../images/exercise_screenshots/select_buttons.png')
            };
        }
    }
</script>


<style scoped lang="less">
    @import (reference) "../../styles/utils/_utils";

    .container {
        &:extend(.mixin-container);
    }

    .row {
        margin-bottom: 25px;
    }

    input {
        max-width: 185px;
    }
</style>
