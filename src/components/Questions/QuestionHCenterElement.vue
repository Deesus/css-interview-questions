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
                description: "Horizontally center the button inside it's container",
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

</style>
