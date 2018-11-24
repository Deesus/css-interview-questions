<template>
    <question>
        <template slot="question-description">
            {{ this.description }}
        </template>
        <template slot="question-modal">
            <div class="list">
                <div class="list-item">apple</div>
                <div class="list-item">orange</div>
                <div class="list-item">banana</div>
                <div class="list-item">cherry</div>
            </div>
        </template>
    </question>
</template>


<script>
    import Question from './Question.vue';

    export default {
        name: 'QuestionMarginBetweenListItems',

        title: 'Margin Between List Items',

        data() {
            return {
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
