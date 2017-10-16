import Vue from 'vue';
import VueRouter from 'vue-router';

import Index from './pages/index.vue';
import Contacts from './pages/contacts.vue';
import Blog from './pages/blog.vue';
import Blogpost from './pages/blogpost.vue';
import Portfolio from './pages/portfolio.vue';
import Portfolio2 from './pages/portfolio-2.vue';
import Portfolio3 from './pages/portfolio-3.vue';
import Portfolio4 from './pages/portfolio-4.vue';
import UiKit from './pages/ui-kit.vue';
import NotFound from './pages/not-found.vue';

Vue.use(VueRouter);

const routes = [
	{ path: '', component: Index },
	{ path: '/index', component: Index },
	{ path: '/contacts', component: Contacts },
	{ path: '/blog', component: Blog },
	{ path: '/blogpost', component: Blogpost },
	{ path: '/portfolio', component: Portfolio },
	{ path: '/portfolio-2', component: Portfolio2 },
	{ path: '/portfolio-3', component: Portfolio3 },
	{ path: '/portfolio-4', component: Portfolio4 },
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
