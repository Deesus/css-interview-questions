<template>

    <question>
        <template slot="question-description">
            {{ this.description }}
        </template>

        <template slot="question-modal">
            <div>
                <button class="button" type="button">Horizontally Center Me</button>
            </div>
        </template>
    </question>

</template>


<script>
    import Question from './Question.vue';

    export default {
        name: 'QuestionHCenterElement',

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
    /* specific to this component: */
    .question {
        border: 1px dashed red;
    }
</style>
