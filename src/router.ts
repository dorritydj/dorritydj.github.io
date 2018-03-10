import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Social from './views/Social.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/social',
            name: 'social',
            component: Social
        }
    ]
});
