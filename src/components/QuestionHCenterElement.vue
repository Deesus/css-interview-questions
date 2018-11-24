<template>

    <question>
        <template slot="question-description">
            {{ this.description }}
        </template>

        <template slot="question-modal">
            <div class="container">
                <button class="button" type="button">Horizontally Center Me</button>
            </div>
        </template>
    </question>

</template>


<script>
    import Question from './BaseQuestion.vue';

    export default {
        name: 'QuestionHCenterElement',

        title: 'Horizontal Centering',

        data() {
            return {
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
