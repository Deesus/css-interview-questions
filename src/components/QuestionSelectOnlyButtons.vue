<template>
    <!--    ==================================================
            (2) - Change all of the buttons (and only the buttons) to red.
                - (Optional) Change all of the buttons only in the first 3 rows to red.
            ================================================== -->
    <div id="div-example-2">
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
    </div>

</template>


<script>
    export default {
        name: 'QuestionSelectOnlyButtons',

        data() {
            return {};
        },

        methods: {},

        computed: {}
    }
</script>


<style scoped>

</style>
