<template>
    <!--    ==================================================
            (3) - Center the modal both vertically and horizontally (with respect to the screen).
                - Note: the modal has randomly generated widths.
            ================================================== -->
    <div id="div-example-3" class="modal" v-if="showExample3" :style="{width: dynamicWidth}">
        <h4>I really want to be centered!</h4>
    </div>

</template>


<script>
    export default {
        name: 'QuestionCenterTheModal',

        data() {
            return {};
        },

        methods: {},

        computed: {}
    }
</script>


<style scoped>

</style>
