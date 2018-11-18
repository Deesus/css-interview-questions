<template>

    <!--    ==================================================
                - Fit both the images on a single row with a 40px margin between them
                - Ensure their make equal widths
                - The images should take up the entire width of the screen (minus the 40px gap between them)
                - (Hint: you might need 2 selectors and some math.)
            ================================================== -->
    <div class="main__view">
        <img class="image" src="../images/marble_palace.jpg"><img class="image" src="../images/nevski_street.jpg">
    </div>
</template>


<script>
    export default {
        name: 'QuestionTwoImagesAndMarginInARow',

        data() {
            return {};
        },

        methods: {},

        computed: {}
    }
</script>


<style scoped>

</style>
