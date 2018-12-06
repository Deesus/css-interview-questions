// N.b. we can use Node-style modules (`require`) instead of ES6 modules as well:
// TODO: clean up imports - do we even need some of these (e.g. index.html import)?
import 'babel-runtime/regenerator';
import 'webpack-hot-middleware/client?reload=true';         // creates websocket connection (and reloading on change)
import './styles/app.less';
// TODO: should we import `user_solution?`
// import '../user_solution.css';
import '../index.html';

import Vue from 'vue';
import App from './App.vue';
import store from './store';
import VueRouter from 'vue-router';
Vue.use (VueRouter);

import routes from './routes';
const router = new VueRouter({
   routes
});


// ==================================================
// vue instance:
// ==================================================

// TODO: we get `[Vue warn]: Cannot find element: #app' unless we use `window.onload`; need to fix something in Webpack
window.onload = function() {

    new Vue({
        el: '#app',

        data: { },

        router,

        store,

        render(h) {
            return h(App);
        }
    });
};
