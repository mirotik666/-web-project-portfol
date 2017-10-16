'use strict'

let arrify = require('arrify')
let merge = require('deepmerge')

module.exports = function (neutrino, options = {}) {
	let config = neutrino.config
	let lintRule = config.module.rule('lint')
	const EXTENSIONS = arrify(lintRule.get('test')).concat([/\.vue$/])

	config.module
		.rule('lint')
		.test(EXTENSIONS)
		.use('eslint')
			.tap(opts => opts || {})
			.tap(opts  => {
				let eslintOptions = merge(opts, {
					parserOptions: {
						parser: opts.parser
					},
					baseConfig: {
						extends:  [
							'plugin:vue/recommended'
						]
					},
					plugins: ['vue'],
					rules: {
						'vue/jsx-uses-vars': 'error'
					}
				})
				delete eslintOptions.parser
				return eslintOptions
			})
			.tap(opts => merge(opts, options.eslint || {}))
}