<template>

    <div class="side-nav">

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
    .side-nav {
        width: 280px;
        position: fixed;
        height: 100%;
        overflow-y: auto;
        border-right: 2px solid rgb(201, 201, 201);
        background: white;

        &__item {
             padding: 10px 14px;
             border-bottom: 1px solid rgb(201, 201, 201);
             cursor: pointer;
         }
    }
</style>
