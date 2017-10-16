import Vue from 'vue';
import VueRouter from 'vue-router';

import Index from './pages/index.vue';
import Contacts from './pages/contacts.vue';

import UiKit from './pages/ui-kit.vue';
import NotFound from './pages/not-found.vue';

Vue.use(VueRouter);

const routes = [
	{ path: '', component: Index },
	{ path: '/index', component: Index },
	{ path: '/contacts', component: Contacts },

	{ path: '/ui-kit', component: UiKit },
	{ path: '*', component: NotFound },
];
const router = new VueRouter({
	// mode: 'history',
	routes,
	scrollBehavior(to, from, savedPosition) {
		return savedPosition || { x: 0, y: 0 };
	},
});

export default router;
