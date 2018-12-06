<template>

    <div class="question">
        <div class="question__description" @click="openQuestionModal">
            <slot name="question-description"></slot>
        </div>
        <div class="question__modal question-modal" v-if="shouldShowQuestionModal">
            <div class="question-modal__header">
                <span>{{ this.title }}</span>
                <i class="icon icon--close" @click="closeQuestionModal">X</i>
            </div>
            <slot name="question-modal"></slot>
        </div>
    </div>

</template>


<script>
    export default {
        name: 'Question',

        props: ['title'],

        data() {
            return {};
        },

        methods: {
            openQuestionModal() {
                this.$store.commit('showQuestionModal', true);
            },

            closeQuestionModal() {
                this.$store.commit('showQuestionModal', false);
            }
        },

        computed: {
            shouldShowQuestionModal() {
                return this.$store.state.shouldShowQuestionModal;
            }
        }
    }
</script>


<style scoped lang="less">
    @import "../styles/base/_constants";


    .question {
        pointer-events: none;           // since it overlaps the entire viewport
        backface-visibility: hidden;    // for animation; hints browser to use hardware acceleration
        will-change: transform;

        &__description {
            pointer-events: all;
            padding: 16px 8px;

            max-width: calc(~"100% - @{side-nav-width}");
            margin-left: @side-nav-width;
            min-height: 100vh;
            width: 100%;
        }

        &__modal {
            position: fixed;
            background: white;
            left: 0;
            top: 0;
            min-height: 100vh;
            min-width: 100vw;
            pointer-events: all;
        }

        &__header {
            padding: 8px 12px;
            text-align: center;
            position: relative;
        }
    }


    /* TODO: move to utility partial or make into component: */
    .icon {
        cursor: pointer;

    }
</style>
