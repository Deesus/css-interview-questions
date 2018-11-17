<template>
    <div class="side-nav">

        <div v-for="(question, index) in questionList" :key="index">
            <router-link :to="{name: question.routeName }">
                <div class="side-nav__item" > {{ question.title }}</div>
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
            selectQuestion(index) {
                this.$store.commit('selectQuestionByIndex', index);
            }
        },


        computed: {
            questionList() {
                return this.$store.state.questionList;
            }
        }
    }
</script>


<style scoped>
    .side-nav {
        width: 280px;
        position: fixed;
        height: 100%;
        overflow-y: auto;
        border-right: 2px solid rgb(201, 201, 201);
    }

    .side-nav__item {
        padding: 10px 14px;
        border-bottom: 1px solid rgb(201, 201, 201);
        cursor: pointer;
    }
</style>
