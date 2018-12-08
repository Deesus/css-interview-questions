<template>
    <div class="question" @click.stop="showQuestionMarkup">

        <!-- ---------- title: ---------- -->
        <div class="question__title">{{ this.title }}</div>

        <!-- ---------- image of desired result: ---------- -->
        <figure class="question__figure">
            <img src="https://placeimg.com/540/380/people" alt="">
            <figcaption class="question__fig-caption">
                <span>Start Quiz</span>
                <external-link-icon class="icon"></external-link-icon>
            </figcaption>
        </figure>

        <!-- ---------- the question's markup is injected into the slot: ---------- -->
        <div class="question__markup" v-if="shouldShowQuestionMarkup">
            <i class="icon icon--close" @click.stop="hideQuestionMarkup">X</i>
            <slot name="question-markup"></slot>
        </div>

        <!-- ---------- question description: ---------- -->
        <div class="question__description">{{ this.description }}</div>

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
            }
        }
    }
</script>


<style scoped lang="less">
    @import "../styles/base/_constants";


    .question {
        padding: 0;
        margin-left: @side-nav-width;
        width: 400px;
        min-height: 350px;
        box-shadow: @box-shadow;
        transition: 100ms all ease-in-out;
        will-change: transform;
        background: #fafafa;
        overflow: hidden;
        cursor: pointer;

        &:hover {
            width: 500px;
            box-shadow: @box-shadow-hover;

            .question__title {
                padding: 10px 16px;
                height: 32px;
                opacity: 1;
            }

            .question__fig-caption {
                opacity: 0.25;
            }
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

        .question__fig-caption {
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


        &__markup {

        }

        &__description {
            padding: 16px;
        }
    }
</style>
