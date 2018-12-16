<template>
    <question :description="description" :title="title" :thumbnailSrc="thumbnailSrc">
        <div class="panel-orange">I should be above</div>
        <div class="panel-blue">I should be below</div>
    </question>
</template>


<script>
    import Question from '../BaseQuestion.vue';
    const QUESTION_TITLE = 'Overlapping Layers';

    export default {
        name: 'QuestionOverlappingLayers',

        title: QUESTION_TITLE,

        data() {
            return {
                title: QUESTION_TITLE,
                description:
                    "These two panels overlap -- they are positioned correctly, but the wrong one is on top. " +
                    "Edit the styles to make the orange panel display above the blue one.",
                thumbnailSrc: require('../../images/exercise_screenshots/overlapping_divs.png')
            }
        },

        components: {
            Question
        }
    }
</script>


<style scoped lang="less">
    .panel-orange {
        @panel-bg-color: #ffed6b;

        text-align: center;
        position: absolute;
        width: 300px;
        height: 200px;
        padding: 7px 0;
        margin: 40px 0 0 100px;
        background: @panel-bg-color;
        border: 1px solid darken(@panel-bg-color, 30%);
    }

    .panel-blue {
        @panel-bg-color: #cbeaff;

        text-align: center;
        position: absolute;
        width: 300px;
        height: 200px;
        padding: 7px 0;
        margin: 90px 0 0 150px;
        background: @panel-bg-color;
        border: 1px solid darken(@panel-bg-color, 25%);
    }
</style>
