<template>
    <question :description="description" :title="title">
        <div class="panel-1">I should be above</div>
        <div class="panel-2">I should be below</div>
    </question>
</template>


<script>
    import Question from '../BaseQuestion.vue';
    const QUESTION_TITLE = 'Overlapping Layers';

    export default {
        name: 'QuestionOverlappingLayers',

        // TODO: replace custom attribute, `title`, so that we don't have to use a constant.
        title: QUESTION_TITLE,

        data() {
            return {
                title: QUESTION_TITLE,
                description: 'These two panels are overlapping. Make the yellow panel display above the blue one.'
            }
        },

        components: {
            Question
        }
    }
</script>


<style scoped lang="less">
    .question-modal {
        position: relative;
        text-align: center;
    }

    .panel-1,
    .panel-2 {
        position: absolute;
        width: 300px;
        height: 200px;
        padding: 7px 0;
    }

    .panel-1 {
        margin-left: 100px;
        background: #efff7f;
    }

    .panel-2 {
        margin-left: 150px;
        margin-top: 50px;
        background: #cbeaff;
    }
</style>
