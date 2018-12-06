<template>
    <question :description="description" :title="title">
        <img class="image" src="../../images/marble_palace.jpg" alt="Marble Palace"><img class="image" src="../../images/nevski_street.jpg" alt="Nevski Prospect">
    </question>
</template>


<script>
    import Question from '../BaseQuestion.vue';

    export default {
        name: 'QuestionTwoImagesAndMarginInARow',

        title: 'Two Images Spaced in a Row',

        data() {
            return {
                title: "Two Images Spaced in a Row",
                description: "Fit both the images on a single row with a 40px margin between them. Ensure both images are of " +
                             "equal size, and that, together, they take up the entire width of the container (minus the 40px gap between them)." +
                             "Hint: you'll want to give the images responsive widths."
            }
        },

        components: {
            Question
        }
    }
</script>


<style scoped>

</style>
