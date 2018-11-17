<template>
    <div class="side-nav">
        <div class="side-nav__item" v-for="(question, index) in questionList" :key="index" @click="selectQuestion(index)"> {{ question.title }} </div>

        <!--<div id="btn-example-1" class="btn" @click="showExample(1)">1</div>-->
        <!--<div id="btn-example-2" class="btn" @click="showExample(2)">2</div>-->
        <!--<span id="btn-example-3" class="btn" @click="showExample(3)">3</span>-->
        <!--<span id="btn-example-4" class="btn" @click="showExample(4)">4</span>-->
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
