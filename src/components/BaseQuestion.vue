<template>
    <div :class="questionCardStyles" @click.stop="showQuestionMarkup">

        <!-- ---------- title: ---------- -->
        <div :class="questionTitleStyles">
            {{ this.title }}
            <i class="question__close-icon" @click.stop="hideQuestionMarkup">✕</i>
        </div>

        <!-- ---------- the question's markup is injected into the slot: ---------- -->
        <div v-if="shouldShowQuestionMarkup">
            <slot></slot>
        </div>

        <template v-else>
            <!-- ---------- image of desired result: ---------- -->
            <figure class="question__figure">
                <img src="https://placeimg.com/540/380/people" alt="">
                <figcaption class="question__fig-caption">
                    <span>Start Quiz</span>
                    <external-link-icon class="icon"/>
                </figcaption>
            </figure>

            <!-- ---------- question description: ---------- -->
            <div class="question__description">{{ this.description }}</div>
        </template>

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
            return {};
        },


        methods: {
            showQuestionMarkup() {
                this.$store.commit('showQuestionMarkup', true);
            },

            hideQuestionMarkup(e) {
                this.$store.commit('showQuestionMarkup', false);
            }
        },


        computed: {
            shouldShowQuestionMarkup() {
                return this.$store.state.shouldShowQuestionMarkup;
            },

            questionCardStyles() {
                return {
                    'question': true,
                    'question--fullscreen': this.shouldShowQuestionMarkup === true
                }
            },

            questionTitleStyles() {
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

    .mixin-visible-question-title {
        opacity: 1;
        padding: 10px 16px;
        height: 32px;
    }


    .question {
        padding: 0;
        margin-left: @side-nav-width;
        width: 400px;
        min-height: 350px;
        box-shadow: @box-shadow;
        transition: 200ms all ease-in-out;
        will-change: transform;
        background: #fafafa;
        overflow: hidden;
        cursor: pointer;

        &:hover {
            width: 500px;
            box-shadow: @box-shadow-hover;

            .question__title {
                .mixin-visible-question-title();
            }

            .question__fig-caption {
                opacity: 0.25;
            }
        }

        &&--fullscreen {
            .question__title {
                .mixin-visible-question-title();
            }

            position: fixed;
            height: 100%;
            width: 100%;
            left: 0;
            top: 0;
            margin: 0;
            z-index: 120;
            cursor: default;
        }

        &__title {
            height: 0;
            opacity: 0;
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
                max-width: 100%;
                max-height: 100%;
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
