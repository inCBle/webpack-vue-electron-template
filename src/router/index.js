import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

Vue.use(Router);

const routes = [
	{ path: '/', redirect: 'home' },
	{ path: '/home', component: Home },
	{ path: '/about', component: About },
];

export default new Router({
	scrollBehavior: () => ({ y: 0 }),
	routes,
});
