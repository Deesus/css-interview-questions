import QuestionCenterTheModal           from '../components/QuestionCenterTheModal.vue';
import QuestionSelectOnlyButtons        from '../components/QuestionSelectOnlyButtons.vue';
import QuestionTwoImagesSpacedInARow    from '../components/QuestionTwoImagesSpacedInARow.vue';
import QuestionVCenterItems             from '../components/QuestionVCenterItems.vue';
import QuestionHCenterElement           from '../components/QuestionHCenterElement.vue';
import QuestionOverlappingLayers        from '../components/QuestionOverlappingLayers.vue';
import QuestionMarginBetweenListItems   from '../components/QuestionMarginBetweenListItems.vue';



export default [
    {
        title: "Overlapping Layers",
        description: "These two panels are overlapping. Make the yellow panel display above the blue one.",
        routeName: "overlapping-layers",
        component: QuestionOverlappingLayers

        // N.b. we COULD have defined test scripts for each question object but this would be tedious.
        // Also, we could achieve the same thing by simply having an image of the expected behavior.
    },

    {
        title: "Margin Between List Items",
        description: "Add 12px margin between each list item, but not the first one.",
        routeName: "margin-between-items",
        component: QuestionMarginBetweenListItems
    },

    {
        title: "Horizontal Centering",
        description: "Horizontally center the button inside it's container.",
        routeName: "h-center-element",
        component: QuestionHCenterElement
    },

    {
        title: "Vertically Align in a Row",
        description: "Currently, all the elements in the container are stacked on top of each other -- correct " +
            "this by displaying all of them in a single row and vertically centering them inside the container.",
        routeName: "v-align-elements",
        component: QuestionVCenterItems
    },

    {
        title: "Color Only the Buttons",
        description: "Select the buttons and set their background color to 'red.' However, the input fields should remain white.",
        routeName: "color-only-buttons",
        component: QuestionSelectOnlyButtons
    },

    {
        // TODO: n.b. this problem can be solved using flexboxes, so we need to revise it
        title: "Center the Modal",
        routeName: "center-modal",
        description: "Center the modal both vertically and horizontally (with respect to the container). Note that the " +
            "width of the modal is randomly generated -- you'll have to figure out a way for the modal to be centered " +
            "regardless of its width",
        component: QuestionCenterTheModal
    },

    {
        title: "Two Images Spaced in a Row",
        description: "Fit both the images on a single row with a 40px margin between them. Ensure both images are of " +
            "equal size, and that, together, they take up the entire width of the container (minus the 40px gap between them)." +
            "Hint: you'll want to give the images responsive widths.",
        routeName: "two-images-in-row",
        component: QuestionTwoImagesSpacedInARow,
    }
];
