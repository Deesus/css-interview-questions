<template>

    <div class="side-nav">
        <div class="side-nav__header">CSS Interview Questions</div>
        <div v-for="(question, index) in questionList" :key="index">
            <router-link :to="{name: question.routeName }">
                <div class="side-nav__item" @click="linkClicked(index, question.title)"> {{ question.title }}</div>
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
            linkClicked(index, questionTitle) {
                this.$store.commit('setSelectedQuestionIndex', index);
                this.$store.commit('setSelectedQuestionTitle', questionTitle);
                console.log(this.$store.state.selectedQuestionTitle);
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
        grid-column: ~"2/3";
        grid-row: ~"2/3";
        padding: 0 14px;
        height: 100%;
        overflow-y: auto;
        background: @bg-color;

        &__header {
            padding-top: 30px;
            padding-bottom: 20px;
            text-transform: uppercase;
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
