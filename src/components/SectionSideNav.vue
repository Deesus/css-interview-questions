<template>

    <div class="side-nav">
        <div class="side-nav__header">CSS Interview Questions</div>
        <div v-for="(question, index) in questionList" :key="index">
            <router-link :to="{name: question.routeName }">
                <div class="side-nav__item" @click="linkClicked(index)"> {{ question.title }}</div>
            </router-link>
        </div>

    </div>

</template>


<script>
    export default {
        name: 'LayoutSideNav',


        data() {
            return {  };
        },

        methods: {
            linkClicked(index) {
                this.$store.commit('setSelectedQuestionIndex', index);
            }
        },

        computed: {
            questionList() {
                return this.$store.state.questionList;
            }
        }
    }
</script>


<style scoped lang="less">
    @import "../styles/base/_constants";


    .side-nav {
        width: @side-nav-width;
        font-size: @font-size-small;
        grid-area: side-nav;
        padding: 0 14px;
        left: 0;
        top: 0;
        height: 100%;
        overflow-y: auto;
        border-right: 1px solid rgb(201, 201, 201);
        background: @bg-color;

        &__header {
            padding-top: 30px;
            padding-bottom: 20px;
            text-transform: uppercase;
            color: darken(@font-color-blue, 40%);
        }

        &__item {
            padding: 4px 0;
            cursor: pointer;
            border-bottom: 1px solid transparent;

            &:hover {
                color: @font-color-blue;
                border-bottom-color: @font-color-blue;
            }
         }
    }
</style>
