<template>
    <question :description="description" :title="title">
        <div class="row">
            <label><input placeholder="bye" type="text"></label>
            <label><input type="button" value="okay"></label>
            <label><input placeholder="hello" type="text"></label>
            <label><input placeholder="hi" type="text"></label>
        </div>
        <div class="row">
            <label><input type="button" value="cancel"></label>
            <label><input placeholder="foo" type="text"></label>
            <label><input placeholder="hello" type="text"></label>
            <label><input placeholder="bar" type="text"></label>
            <label><input placeholder="baz" type="text"></label>
        </div>
        <div class="row">
            <label><input placeholder="moo" type="text"></label>
            <label><input type="button" value="ok"></label>
            <label><input placeholder="oink" type="text"></label>
            <label><input placeholder="meow" type="text"></label>
            <label><input type="button" value="confirm"></label>
        </div>
        <div class="row">
            <label><input placeholder="yana" type="text"></label>
            <label><input placeholder="galina" type="text"></label>
            <label><input placeholder="alina" type="text"></label>
            <label><input type="button" value="warning"></label>
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


<style scoped>

</style>
