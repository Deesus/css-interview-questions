import Vue from 'vue';
import Vuex from 'vuex';
import questionList from '../utils/questionList';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        questionList: questionList,
        selectedQuestionIndex: 0
    },

    mutations: {
        // when the link on the side panel is selected, we update the view on the main panel:
        setSelectedQuestionIndex(state, payload) {
            state.selectedQuestionIndex = payload;
        }
    }
});
