'use strict'

const path = require('path')
const merge = require('deepmerge')

module.exports = (neutrino, options = {}) => {
	const LOADER_EXTENSIONS = /\.vue$/
	const NODE_MODULES = path.resolve(__dirname, '../node_modules')
	let config = neutrino.config
	let compileRule = config.module.rules.get('compile')
	let vueRule = config.module.rule('vue')
	let extractLoader = require.resolve('extract-loader')
	let htmlLoader =  require.resolve('html-loader')

	vueRule
		.test(LOADER_EXTENSIONS)
		.use('vue')
		.loader(require.resolve('vue-loader'))
		.tap((opts = {}) => merge(opts, options))

	if (compileRule && compileRule.uses.has('babel')) {
		const babelOptions = compileRule.use('babel').get('options')

		vueRule
			.use('vue')
				.tap((opts = {}) => merge({
					// preserveWhitespace: false,
					loaders: {
						js: {
							loader: 'babel-loader',
							options: babelOptions
						}
					}
				}, opts))
				.end()
			.use('extract-html')
				.loader(extractLoader)
				.end()
			.use('html')
				.loader(htmlLoader)
				.tap((opts = {}) => merge({
					// root: neutrino.options.source
					interpolate: true,
					attrs: [':url', 'link:href', 'source:src']
					//minimize: false
				}, opts))
				.end()
	}

	config
		.resolve.extensions
			.add('.vue')
			.end().end()
		.resolveLoader.modules
			.add(NODE_MODULES)
			.end().end()
}
