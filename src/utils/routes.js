import questionList from './questionList';
import Home from '../components/Home.vue';


let allRoutes = [];

// ---------- add questions' routes: ----------
for (let i=0; i < questionList.length; i++) {
    allRoutes.push(
        {
            path: `/question/${questionList[i].routeName}`,
            name: questionList[i].routeName,
            component: questionList[i].component
        }
    );
}


// ---------- add other routes: ----------
allRoutes = [
    ...allRoutes,

    // 'home' view:
    {
        path: '/',
        name: 'home',
        component: Home
    },

    // default route:
    {
        path: '*',
        redirect: { name: 'home' }
    }
];


export default allRoutes;
