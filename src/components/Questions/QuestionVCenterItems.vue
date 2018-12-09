<template>
    <question :description="description" :title="title">
        <label><input type="text" placeholder="meow"></label>
        <div class="lots-of-text">
            Reiciendis earum sit aut quos dolor perspiciatis eos sunt.
            Illo distinctio voluptatem sint in odio necessitatibus qui nesciunt. Ipsa autem et laborum suscipit iure.
            Sunt quis tempora modi deleniti enim.
        </div>
        <button>okay</button>
        <input type="checkbox" checked="checked">
        <div class="empty-box"></div>
    </question>
</template>


<script>
    import Question from '../BaseQuestion.vue';
    const QUESTION_TITLE = 'Vertically Align in a Row';

    export default {
        name: 'QuestionVCenterItems',

        title: QUESTION_TITLE,

        data() {
            return {
                title: QUESTION_TITLE,
                description: "Currently, all the elements in the container are stacked on top of each other -- correct " +
                             "this by displaying all of them in a single row and vertically centering them inside the container."
            }
        },

        components: {
            Question
        }
    }
</script>


<style scoped>

</style>
