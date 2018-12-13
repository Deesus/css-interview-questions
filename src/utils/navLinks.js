/**
 * This is a list of navigation links (i.e. links on the side-panel).
 *
 * N.b. the intersection/reuse of this module (`navLinks.js`) along with `questionList.js` and `routes.js`.
 * Currently, the list of nav links is simple: just the home view plus the questions; so this module seems a but superfluous.
 * TODO: perhaps there is a way to consolidate this module with 'routes' and/or 'questionList' since there is a lot of overlap.
 *
 *
 * Object item's API:
 *  title {string}:             name/title text that appears on navigation list
 *  routeName {string}:         route name used by `route.js` (should match)
 *  component {Vue component}:  Vue component file
 *  isNavHeading {boolean}:     specifies that the item is a nav heading and not a link; if true, then special styles are applied
 */

import QuestionHome from '../components/Home.vue';
import questionList from '../questionList';


export default [

    // home/main view:
    {
        title:        QuestionHome.title,
        routeName:    'home',     // TODO: should use some constant to ensure this name matches the one in `routes.js`
        component:    QuestionHome,
        isNavHeading: true
    },

    // list of questions:
    ...questionList

    // TODO: we should further split the nav list into difficultly levels (and associated subheading)
];
