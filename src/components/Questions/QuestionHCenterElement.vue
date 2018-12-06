<template>

    <question :description="description" :title="title">
        <div class="container">
            <button class="button" type="button">Horizontally Center Me</button>
        </div>
    </question>

</template>


<script>
    import Question from '../BaseQuestion.vue';

    export default {
        name: 'QuestionHCenterElement',

        title: 'Horizontal Centering',

        data() {
            return {
                title: "Horizontal Centering",
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
