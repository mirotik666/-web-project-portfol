'use strict'

let airbnbPreset = require('neutrino-preset-airbnb-base')

let eslintConfig = require('./eslint.config.js')
let eslintVueMiddleware = require('../../middlewares/middleware-eslint-vue.js')

module.exports = function (neutrino) {
	neutrino.use(airbnbPreset, {
		eslint: eslintConfig
	})
	neutrino.use(eslintVueMiddleware, {
		eslint: {
			// envs: { node: true },
			rules: {
				'vue/html-no-self-closing': 'off',
				'vue/no-invalid-template-root': 'off'
			}
		}
	})
}