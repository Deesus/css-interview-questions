<template>

    <question :description="description" :title="title">
        <div class="container">
            <button class="button" type="button">Horizontally Center Me</button>
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
                description: "Horizontally center the button inside it's container"
            };
        },

        methods: {},

        computed: {},

        components: {
            'question': Question
        }
    }
</script>


<style scoped>
    .container {
        border: 1px dashed red;
    }
</style>
