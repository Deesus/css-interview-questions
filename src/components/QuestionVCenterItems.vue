<template>
    <question>
        <template slot="question-description">
            {{ this.description }}
        </template>

        <template slot="question-modal">
            <label><input type="text" placeholder="meow"></label>
            <div class="lots-of-text">
                Reiciendis earum sit aut quos dolor perspiciatis eos sunt.
                Illo distinctio voluptatem sint in odio necessitatibus qui nesciunt. Ipsa autem et laborum suscipit iure.
                Sunt quis tempora modi deleniti enim.
            </div>
            <button>okay</button>
            <input type="checkbox" checked="checked">
            <div class="empty-box"></div>
        </template>
    </question>
</template>


<script>
    import Question from './Question.vue';

    export default {
        name: 'QuestionVCenterItems',
        data() {
            return {
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
