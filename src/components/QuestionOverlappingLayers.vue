<template>

    <question>
        <template slot="question-description">
            {{ this.description }}
        </template>

        <template slot="question-modal">
            <div class="panel-1">I should be above</div>
            <div class="panel-2">I should be below</div>
        </template>
    </question>

</template>


<script>
    import Question from './BaseQuestion.vue';

    export default {
        name: 'QuestionOverlappingLayers',

        title: 'Overlapping Layers',

        data() {
            return {
                description: 'These two panels are overlapping. Make the yellow panel display above the blue one.',
            }
        },
        components: {
            Question
        }
    }
</script>


<style scoped>
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
