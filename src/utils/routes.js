import questionList from './questionList';
import QuestionVCenterItems from '../components/QuestionVCenterItems.vue';
import QuestionSelectOnlyButtons from '../components/QuestionSelectOnlyButtons.vue';

// let allRoutes = [];
//
// // add questions' routes:
// for (let i=0; i < questionList.length; i++) {
//     console.log(questionList[0].routeName);
//     allRoutes.push(
//         {
//             path: `/question/${questionList[0].routeName}`,
//             name: questionList[0].routeName,
//             component: questionList[0].component
//         }
//     );
// }
//
// // add default route:
// allRoutes.push({
//     path: '*',
//     redirect: { name: 'center-the-modal' }
// });
//
//
// export default allRoutes;

export default [
    {
        path: '/question/v-align-elements',
        name: 'v-align-elements',
        component: QuestionVCenterItems
    },
    {
        path: '/question/color-only-buttons',
        name: 'color-only-buttons',
        component: QuestionSelectOnlyButtons
    }
];
