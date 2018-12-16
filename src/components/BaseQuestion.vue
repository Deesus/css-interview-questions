<template>
    <div :class="questionCardCssClasses" @click.stop="showQuestionMarkup">


        <!-- ---------- the question's markup is injected into the slot: ---------- -->
        <div class="problem-set" v-if="shouldShowQuestionMarkup" :key="'maximized'">
            <slot></slot>
        </div>

        <!-- ---------- card: ---------- -->
        <div v-else class="card" :key="'minimized'">

            <!-- ---------- header: ---------- -->
            <div class="card-header card__header">
                <div class="card-header__title">{{ this.title }}</div>
                <div class="card-header__out-link">
                    <span>Solve Problem</span>
                    <external-link-icon class="icon icon--external-link-icon icon--sm"></external-link-icon>
                </div>
            </div>

            <!-- ---------- question description: ---------- -->
            <div class="card__description">{{ this.description }}</div>

            <!-- ---------- image of desired result: ---------- -->
            <figure class="card__figure">
                <img :src="thumbnailSrc" alt="">
                <figcaption class="card__fig-caption">Expected Output</figcaption>
            </figure>

        </div>


    </div>
</template>


<script>
    import { ExternalLinkIcon } from 'vue-feather-icons';
    import { SHOW_QUESTION_MARKUP_MUTATION } from '../store/mutationTypes';


    export default {
        name: 'Question',


        props: {
            title: {
                type: String,
                require: true
            },

            imagePath: {
                type: String
            },

            description: {
                type: String,
                required: true
            },

            thumbnailSrc: {
                type: String
            }
        },


        components: {
            ExternalLinkIcon
        },


        data() {
            return {
                isModalAnimationActive: false
            };
        },


        methods: {
            showQuestionMarkup() {
                // run function only if question is currently not shown; this prevents some UI jitter:
                if (this.shouldShowQuestionMarkup === false) {
                    this.$store.commit(SHOW_QUESTION_MARKUP_MUTATION, true);

                    // when the modal is expanded, we apply an 'animation-active' class for the duration of the animation:
                    {
                        this.isModalAnimationActive = true;
                        setTimeout(()=> this.isModalAnimationActive = false, 450);
                    }
                }
            }
        },


        computed: {
            shouldShowQuestionMarkup() {
                return this.$store.state.shouldShowQuestionMarkup;
            },

            questionCardCssClasses() {
                return {
                    'question': true,
                    'question--fullscreen': this.shouldShowQuestionMarkup === true,
                    'expand-modal-active': this.isModalAnimationActive === true
                }
            }
        }
    }
</script>


<style scoped lang="less">
    @import "../styles/base/_constants";
    @import (reference) "../styles/utils/_animations";
    @import "../styles/utils/_utils";


    @question-transition-speed: 450ms;
    @question-width: 650px;


    .question {
        grid-row: ~"2/3";
        grid-column: ~"2/3";
        display: table;
        border-radius: @border-radius-default;
        border-collapse: collapse;

        // in order for the width/height transitions to work, we need to set number values (not `auto`)
        // so, we set them to zero and make the min height/width greater than that, effectively setting the values to `auto`:
        height: 0;
        min-height: 1px;
        width: @question-width;
        transition: @question-transition-speed width ease-in-out, @question-transition-speed height ease-in-out;
        will-change: transform;
        cursor: pointer;

        &&--fullscreen {
            position: fixed;
            left: 0;
            top: @section-header-width; // this prevents the markup from being covered up by the fixed header
            height: 100%;
            width: 100%;
            margin: 0;
            z-index: 20;
            cursor: default;

            &.expand-modal-active {
                .expand-modal-active();
            }
        }
    }

    .card {
        width: 650px;
        border-radius: @border-radius-default;
        border: @panel-border;
        padding: @panel-padding;

        &__header {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: @font-size-small;
            line-height: 1;
            transition: 200ms;
            margin: -@panel-padding -@panel-padding 0 -@panel-padding;
            border-bottom: @panel-border;
        }

        &__description {
            margin: @panel-margin 0 0 0;
            padding-right: 30%;
        }

        &__figure {
            margin: @panel-margin 0 0 0;
            padding: 0;
            text-align: right;
            position: relative;

            img {
                height: auto;
                width: 350px;
                max-width: 100%;
                border: @panel-border;
            }

            figcaption {
                color: @font-color-gray-light;
                text-transform: capitalize;
            }
        }
    } // /.card

    .card-header {
        &:extend(.flex-row);
        height: auto;

        &__title {
            border-bottom: 3px solid @font-color-blue;
            padding: @panel-section-padding;
        }

        &__out-link {
            &:extend(.flex-row);
            flex-grow: 1;
            justify-content: flex-end;
            align-items: center;
            padding: @panel-section-padding;
            opacity: 0;
            transition: 250ms opacity ease-in-out;

            /* TODO: n.b. these next 2 CSS selectors break BEM methodology rules: */
            // if `.card` component is hovered over:
            .card:hover & {
                opacity: 0.35;
            }

            .icon {
                margin-left: 8px;
            }
        }
    }

    .problem-set {
        display: block;
    }
</style>
