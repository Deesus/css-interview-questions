import QuestionCenterTheModal           from './components/Questions/QuestionCenterTheModal.vue';
import QuestionSelectOnlyButtons        from './components/Questions/QuestionSelectOnlyButtons.vue';
import QuestionTwoImagesSpacedInARow    from './components/Questions/QuestionTwoImagesSpacedInARow.vue';
import QuestionVCenterItems             from './components/Questions/QuestionVCenterItems.vue';
import QuestionHCenterElement           from './components/Questions/QuestionHCenterElement.vue';
import QuestionOverlappingLayers        from './components/Questions/QuestionOverlappingLayers.vue';
import QuestionMarginBetweenListItems   from './components/Questions/QuestionMarginBetweenListItems.vue';
import QuestionClickPassThrough         from './components/Questions/QuestionClickPassThrough.vue';
import QuestionBlackAndWhite            from './components/Questions/QuestionBlackAndWhite.vue'
import QuestionTruncateText             from './components/Questions/QuestionTruncateText.vue';

export default [
    {
        title: QuestionOverlappingLayers.title,
        routeName: "overlapping-layers",
        component: QuestionOverlappingLayers

        // N.b. we COULD have defined test scripts for each question object but this would be tedious.
        // Also, we could achieve the same thing by simply having an image of the expected behavior.
    },

    {
        title: QuestionMarginBetweenListItems.title,
        routeName: "margin-between-items",
        component: QuestionMarginBetweenListItems
    },

    {
        title: QuestionHCenterElement.title,
        routeName: "h-center-element",
        component: QuestionHCenterElement
    },

    {
        title: QuestionClickPassThrough.title,
        routeName: "click-pass-through",
        component: QuestionClickPassThrough
    },

    {
        title: QuestionVCenterItems.title,
        routeName: "v-align-elements",
        component: QuestionVCenterItems
    },

    {
        title: QuestionTruncateText.title,
        routeName: "truncate-text",
        component: QuestionTruncateText
    },

    {
        title: QuestionBlackAndWhite.title,
        routeName: "black-and-white",
        component: QuestionBlackAndWhite
    },

    {
        title: QuestionSelectOnlyButtons.title,
        routeName: "color-only-buttons",
        component: QuestionSelectOnlyButtons
    },

    {
        title: QuestionCenterTheModal.title,
        routeName: "center-modal",
        component: QuestionCenterTheModal
    },

    {
        title: QuestionTwoImagesSpacedInARow.title,
        routeName: "two-images-in-row",
        component: QuestionTwoImagesSpacedInARow,
    }
];
