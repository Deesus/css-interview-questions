<template>
    <question :description="description" :title="title">
        <div class="list">
            <div class="list-item">apple</div>
            <div class="list-item">orange</div>
            <div class="list-item">banana</div>
            <div class="list-item">cherry</div>
        </div>
    </question>
</template>


<script>
    import Question from '../BaseQuestion.vue';
    const QUESTION_TITLE = 'Margin Between List Items';

    export default {
        name: 'QuestionMarginBetweenListItems',

        title: QUESTION_TITLE,

        data() {
            return {
                title: QUESTION_TITLE,
                description: "Add 12px margin between each list item, but not the first one."
            };
        },

        components: {
            Question
        }
    }
</script>


<style scoped>
    .list {
        border: 1px solid rgb(219, 226, 232);
        background: rgba(82, 92, 101, 0.1);
        width: 250px;
        height: 350px;
    }

    .list-item {
        background: white;
        border-radius: 3px;
        height: 40px;
        padding: 8px 16px;
        box-shadow: 0 1px 4px 0 rgba(12, 12, 13, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.15);
    }
</style>
