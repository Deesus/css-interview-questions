import Vue from 'vue';
import Vuex from 'vuex';
import navLinks from '../utils/navLinks';
import { SELECT_NAV_LINK_INDEX_MUTATION,
         SELECT_NAV_LINK_TITLE_MUTATION,
         SHOW_QUESTION_MARKUP_MUTATION } from '../store/mutationTypes';

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        navLinks:                 navLinks,
        selectedQuestionIndex:    0,
        selectedQuestionTitle:    '',
        shouldShowQuestionMarkup: false
    },


    mutations: {
        // when the link on the side panel is selected, we update the view on the main panel:
        [SELECT_NAV_LINK_INDEX_MUTATION](state, index) {
            state.selectedQuestionIndex = index;
        },

        [SELECT_NAV_LINK_TITLE_MUTATION](state, questionTitle) {
            state.selectedQuestionTitle = questionTitle;
        },

        [SHOW_QUESTION_MARKUP_MUTATION](state, shouldShow) {
            state.shouldShowQuestionMarkup = shouldShow;
        }
    }
});
