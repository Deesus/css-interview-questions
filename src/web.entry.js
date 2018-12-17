// N.b. we can use Node-style modules (`require`) instead of ES6 modules as well:
import './styles/app.less';
import '../index.html';

import Vue from 'vue';
import App from './App.vue';
import store from './store';
import VueRouter from 'vue-router';
Vue.use (VueRouter);

import routes from './utils/routes';
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
