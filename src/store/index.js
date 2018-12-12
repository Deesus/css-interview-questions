import Vue from 'vue';
import Vuex from 'vuex';
import questionList from '../utils/questionList';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        questionList: questionList,
        selectedQuestionIndex: 0,
        selectedQuestionTitle: '',
        shouldShowQuestionMarkup: false
    },

    // TODO: create constants for mutation names:
    mutations: {
        // when the link on the side panel is selected, we update the view on the main panel:
        setSelectedQuestionIndex(state, index) {
            state.selectedQuestionIndex = index;
        },

        setSelectedQuestionTitle(state, questionTitle) {
            state.selectedQuestionTitle = questionTitle;
        },

        showQuestionMarkup(state, shouldShow) {
            state.shouldShowQuestionMarkup = shouldShow;
        }
    }
});
