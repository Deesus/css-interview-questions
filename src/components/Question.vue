<template>
    <div class="question">
        <div class="question__description" @click="openQuestionModal">
            <slot name="question-description"></slot>
        </div>
        <div class="question__modal" v-if="showQuestionModal">
            <slot name="question-modal"></slot>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'Question',

        props: [],

        data() {
            return {};
        },

        methods: {
            openQuestionModal() {
                // TODO: change toggle onclick to true and have a close modal setting the value to false:
                this.$store.commit('toggleQuestionModal', !this.showQuestionModal);
            }
        },

        computed: {
            showQuestionModal() {
                return this.$store.state.showQuestionModal;
            }
        }
    }
</script>


<style scoped>
    .question__modal {
        position: fixed;
        background: rgba(245, 245, 245, 0.8);
    }
    .question__description {
        padding: 16px 8px;
        border: 2px solid slategray;
    }
</style>
