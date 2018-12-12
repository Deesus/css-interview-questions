<template>
    <question :description="description" :title="title">
        <div class="container">
            <div class="row">
                <input placeholder="bye" type="text">
                <input type="button" value="okay">
                <input placeholder="hello" type="text">
                <input placeholder="hi" type="text">
            </div>
            <div class="row">
                <input type="button" value="cancel">
                <input placeholder="foo" type="text">
                <input placeholder="hello" type="text">
                <input placeholder="bar" type="text">
                <input placeholder="baz" type="text">
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

        data() {
            return {
                title: QUESTION_TITLE,
                description: "Select the buttons and set their background color to 'red.' However, the input fields should remain white."
            };
        },

        components: {
            Question
        }
    }
</script>


<style scoped lang="less">
    .row {
        margin-bottom: 25px;
    }
</style>
