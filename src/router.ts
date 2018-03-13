import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Social from './views/Social.vue';
import Projects from './views/Projects.vue';
import Contact from './views/Contact.vue';

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
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        }
    ]
});
