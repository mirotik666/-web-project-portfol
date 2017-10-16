'use strict'

let path = require('path')
let sveltePreset = require('neutrino-preset-svelte')
let merge = require('deepmerge')
let jestVuePreset = require('./presets/jest/jest-vue-preset.js')
let vuePreset = require('./presets/vue-preset.js')
let stylelintPreset = require('./presets/stylelint/stylelint-preset.js')
let eslintPreset = require('./presets/eslint/eslint-preset.js')

module.exports = function (neutrino, options = {}) {
	const NODE_MODULES = path.resolve(__dirname, 'node_modules')
	let config = neutrino.config

	config
		.resolve.modules
			.add(NODE_MODULES)
			.end().end()
		.resolveLoader.modules
			.add(NODE_MODULES)
			.end().end()

	neutrino.use(eslintPreset)
	neutrino.use(sveltePreset, merge({
		server: {
			public: true,
			port: 3000,
			https: false,
			open: true
		},
		browsers: ['last 3 versions']
	}, options))
	neutrino.use(stylelintPreset)
	neutrino.use(vuePreset)
	neutrino.use(jestVuePreset)

	// var len = config.toConfig().module.rules.length
	// console.log(config.toConfig().module.rules[len-2].use[0])
}