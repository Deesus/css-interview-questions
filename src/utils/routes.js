import questionList from '../questionList';
import QuestionHome from '../components/Questions/QuestionHome.vue';


let allRoutes = [];

// ---------- add questions' routes: ----------
for (let question of questionList) {
    allRoutes.push({
        path:       `/question/${question.routeName}`,
        name:       question.routeName,
        component:  question.component
    });
}


// ---------- add other routes: ----------
allRoutes = [
    ...allRoutes,

    // 'home' view:
    {
        path: '/',
        name: 'home',
        component: QuestionHome
    },

    // default route:
    {
        path: '*',
        redirect: { name: 'home' }
    }
];


export default allRoutes;
