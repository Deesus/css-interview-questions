import QuestionCenterTheModal           from '../components/QuestionCenterTheModal.vue';
import QuestionSelectOnlyButtons        from '../components/QuestionSelectOnlyButtons.vue';
import QuestionTwoImagesSpacedInARow    from '../components/QuestionTwoImagesSpacedInARow.vue';
import QuestionVCenterItems             from '../components/QuestionVCenterItems.vue';



export default [
    {
        title: "Vertically Align in a Row",
        description: "Currently, the element on the container are stacked on top of each other correct " +
            "this by placing them in a single row and vertically aligning them.",
        routeName: "v-align-elements",
        component: QuestionVCenterItems
    },

    {
        title: "Color Only the Buttons",
        description: "Select the buttons and set them to 'red,' but don't change the color of the other elements.",
        routeName: "color-only-buttons",
        component: QuestionSelectOnlyButtons
    },

    {
        title: "Center the Modal",
        routeName: "center-modal",
        component: QuestionCenterTheModal
    },

    {
        title: "Two Images Spaced in a Row",
        routeName: "two-images-in-row",
        component: QuestionTwoImagesSpacedInARow
    }
];
