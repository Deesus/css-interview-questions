<template>
    <div class="question">
        <div class="question__description" @click="openQuestionModal">
            <slot name="question-description"></slot>
        </div>
        <div class="question__modal" v-if="showQuestionModal" @click="openQuestionModal">
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
    .question {
        pointer-events: none;           /* since it overlaps the entire viewport */
        backface-visibility: hidden;    /* for animation; hints browser to use hardware acceleration */
        will-change: transform;
    }

    .question__description {
        pointer-events: all;
        padding: 16px 8px;
        border: 2px solid slategray;

        max-width: calc(100% - 280px);
        margin-left: 280px;
        min-height: 100vh;
        width: 100%;
    }

    .question__modal {
        position: fixed;
        background: rgba(245, 245, 245, 0.8);
        left: 0;
        top: 0;
        min-height: 100vh;
        min-width: 100vw;
        pointer-events: all;
    }

</style>
