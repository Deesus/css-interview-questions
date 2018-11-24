import QuestionCenterTheModal           from '../components/QuestionCenterTheModal.vue';
import QuestionSelectOnlyButtons        from '../components/QuestionSelectOnlyButtons.vue';
import QuestionTwoImagesSpacedInARow    from '../components/QuestionTwoImagesSpacedInARow.vue';
import QuestionVCenterItems             from '../components/QuestionVCenterItems.vue';
import QuestionHCenterElement           from '../components/QuestionHCenterElement.vue';
import QuestionOverlappingLayers        from '../components/QuestionOverlappingLayers.vue';
import QuestionMarginBetweenListItems   from '../components/QuestionMarginBetweenListItems.vue';



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
        title: QuestionVCenterItems.title,
        routeName: "v-align-elements",
        component: QuestionVCenterItems
    },

    {
        title: QuestionSelectOnlyButtons.title,
        routeName: "color-only-buttons",
        component: QuestionSelectOnlyButtons
    },

    {
        // TODO: n.b. this problem can be solved using flexboxes, so we need to revise it
        title: QuestionCenterTheModal.title,
        routeName: "center-modal",
        component: QuestionCenterTheModal
    },

    {
        title: QuestionMarginBetweenListItems.title,
        routeName: "two-images-in-row",
        component: QuestionTwoImagesSpacedInARow,
    }
];
