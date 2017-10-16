import Vue from 'vue';
import router from './router';
import Body from './body.vue';

new Vue({ // eslint-disable-line no-new
	el: 'body',
	router,
	render(callback) {
		return callback(Body);
	}
});
