<template>
    <div :class="questionCardCssClasses" @click.stop="showQuestionMarkup">

        <!-- ---------- title: ---------- -->
        <div :class="questionTitleCssClasses">
            {{ this.title }}
            <i v-if="shouldShowQuestionMarkup" class="question__close-icon" @click.stop="hideQuestionMarkup">✕</i>
        </div>

        <!-- ---------- the question's markup is injected into the slot: ---------- -->
        <transition-group name="fade">
            <div class="problem-set" v-if="shouldShowQuestionMarkup" :key="'maximized'">
                <slot></slot>
            </div>
            <div v-if="!shouldShowQuestionMarkup" :key="'minimized'">
                <!-- ---------- image of desired result: ---------- -->
                <figure class="question__figure">
                    <img src="https://placeimg.com/740/380/people" alt="">
                    <figcaption class="question__fig-caption">
                        <span>Start Quiz</span>
                        <external-link-icon class="icon"/>
                    </figcaption>
                </figure>

                <!-- ---------- question description: ---------- -->
                <div class="question__description">{{ this.description }}</div>
            </div>
        </transition-group>
    </div>
</template>


<script>
    import { ExternalLinkIcon } from 'vue-feather-icons';


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
                this.$store.commit('showQuestionMarkup', true);

                // when the modal is expanded, we apply an 'animation-active' class for the duration of the animation:
                {
                    this.isModalAnimationActive = true;
                    setTimeout(()=> this.isModalAnimationActive = false, 500);
                }
            },

            hideQuestionMarkup(e) {
                this.$store.commit('showQuestionMarkup', false);
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
            },

            questionTitleCssClasses() {
                return {
                    'question__title': true,
                    'question__title--fullscreen': this.shouldShowQuestionMarkup === true
                };
            }
        }
    }
</script>


<style scoped lang="less">
    @import "../styles/base/_constants";
    @import (reference) "../styles/utils/_animations";

    @transition-speed-slow: 500ms;
    @transition-speed-fast: 200ms;

    @question-title-height: 32px;

    @question-min-height: 350px;
    @question-width: 400px;
    @question-onhover-width: 500px;


    .question {
        grid-area: main;
        display: table;
        border-collapse: collapse;
        padding: 0;
        width: @question-width;
        height: 0;
        min-height: @question-min-height;
        box-shadow: @box-shadow;
        transition: @transition-speed-slow width ease-in-out, @transition-speed-slow height ease-in-out;
        will-change: transform;
        background: #fafafa;
        overflow: hidden;
        cursor: pointer;


        &:hover {
            width: @question-onhover-width;
            box-shadow: @box-shadow-hover;

            .question__fig-caption {
                opacity: 0.25;
            }
        }

        &&--fullscreen {
            min-height: @question-min-height;
            min-width: @question-width;
            position: fixed;
            left: 0;
            top: 0;
            height: 100%;
            width: 100%;
            margin: 0;
            z-index: 120;
            cursor: default;

            &.expand-modal-active {
                .expand-modal-active();
            }
        }

        &__title {
            padding: 10px 16px;
            height: @question-title-height;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-align: center;
            color: @font-color-default;
            font-size: 1.4rem;
            line-height: 1;
            transition: 200ms;
            border-bottom: 1px solid transparent;

            &&--fullscreen {
                border-bottom-color: @font-color-muted;
            }
        }

        &__figure {
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            position: relative;

            img {
                height: auto;
                width: auto;
                max-width: 100%;
                max-height: 300px;
            }
        }

        &__fig-caption {
            background: black;
            width: 100%;
            height: 100%;
            opacity: 0;
            position: absolute;
            left: 0;
            top: 0;
            transition: 400ms;
            font-size: 3rem;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;

            .icon {
                margin-left: 1rem;
                height: 3.2rem;
                width: auto;
            }
        }

        &__description {
            padding: 16px;
        }

        &__close-icon {
            position: absolute;
            top: 0;
            right: 25px;
            font-size: 3rem;
            line-height: 1;
            cursor: pointer;
        }
    }
</style>
