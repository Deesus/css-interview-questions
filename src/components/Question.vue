<template>
    <div class="question">
        <div class="question__description">
            <div></div>
            <slot name="question-description"></slot>
        </div>
        <div class="question__modal">
            <slot name="question-modal"></slot>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'Question',

        data() {
            return {};
        },

        methods: {},

        computed: {}
    }
</script>


<style scoped>

</style>
