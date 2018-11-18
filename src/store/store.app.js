import Vue from 'vue';
import Vuex from 'vuex';
import questionList from '../utils/questionList';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        questionList: questionList
    },

    mutations: {

    }
});
