<template>
    <div class="question" @click.stop="showQuestionMarkup">

        <!-- ---------- title: ---------- -->
        <div class="question__title">{{ this.title }}</div>

        <!-- ---------- image of desired result: ---------- -->
        <figure class="question__figure">
            <img src="https://placeimg.com/640/480/people" alt="">
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
    export default {
        name: 'Question',


        props: ['title', 'imagePath', 'description'],


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
        height: 350px;

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
            transition: 100ms;
        }

        &__figure {
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            img {
                height: auto;
                max-width: 100%;
                max-height: 100%;
            }
        }

        &__markup {

        }

        &__description {
            padding: 16px;
        }
    }
</style>
