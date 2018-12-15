<template>
    <div :class="headerCssClasses">
        <div v-if="!shouldShowQuestionMarkup" class="c-header__logo">
            <span class="text-gray-em">CSS&nbsp;</span>
            <span class="text-muted">Interview Questions</span>
        </div>
        <transition
                name="fade"
                enter-active-class="fade-enter-active animate-500"
                leave-active-class="fade-leave-active animate-500"
        >
            <div v-if="shouldShowQuestionMarkup" class="c-header__header-text">
                {{ headerText }}
                <i  class="c-header__close-icon" @click.stop="hideQuestionMarkup">✕</i>
            </div>
        </transition>
    </div>
</template>


<script>
    import { SHOW_QUESTION_MARKUP_MUTATION } from '../store/mutationTypes';


    export default {
        name: 'SectionHeader',


        data() {
            return {};
        },


        methods: {
            hideQuestionMarkup() {
                this.$store.commit(SHOW_QUESTION_MARKUP_MUTATION, false);
            }
        },


        computed: {
            headerText() {
                return this.$store.state.selectedQuestionTitle;
            },

            shouldShowQuestionMarkup() {
                return this.$store.state.shouldShowQuestionMarkup;
            },

            headerCssClasses() {
                return {
                    'c-header':         true,
                    'c-header--shadow': this.shouldShowQuestionMarkup === true
                }
            }
        }
    }
</script>


<style scoped lang="less">
    @import "../styles/base/_constants";
    @import "../styles/utils/_utils";


    .c-header {
        &:extend(.flex-row);
        align-items: stretch;
        grid-row: ~"1/2";
        grid-column: ~"1/3";
        z-index: 140;
        border-bottom: @section-border;
        background: @bg-color;
        width: 100%;
        height: @section-header-width;
        position: fixed;
        left: 0;
        top: 0;
        font-size: @font-size-large;

        &&--shadow {
            box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.06),
                        0 4px 5px 0 rgba(0, 0, 0, 0.06),
                        0 2px 9px 0 rgba(0, 0, 0, 0.06);
        }

        &__logo {
            &:extend(.flex-row);
            align-items: center;
            justify-content: flex-end;
            width: @section-side-nav-width;
            border-right: @section-border;
            padding: @section-v-padding @section-h-padding;
        }

        &__header-text {
            &:extend(.flex-row);
            align-items: center;
            justify-content: center;
            flex-grow: 1;
            width: 100%;
            height: 100%;
            position: absolute;
            /* TODO: since the &__logo element is not displayed on modal-expand, the centering causes text to shift */
        }

        &__close-icon {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: @section-h-padding;
            font-size: 2.4rem;
            line-height: 1;
            cursor: pointer;
            color: @font-color-blue;

            &:hover {
                color: lighten(@font-color-blue, 10%);
            }
        }
    }
</style>
