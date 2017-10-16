'use strict'

let merge = require('deepmerge')
let path = require('path')
let postcssImport = require('postcss-import')
let webpack = require('webpack')

module.exports = (neutrino, options = {}) => {
	const NODE_MODULES = path.resolve(__dirname, '../node_modules')
	let config = neutrino.config
	// let loaderExtensions = options.test || /\.(s(a|c)ss|less)$/
	let loaderExtensions = options.test || /\.css$/
	let postcssOptions = merge({
		sourceMap:  false,
		plugins: [postcssImport({ addDependency: webpack })]
	}, options)
	let postcssLoader = require.resolve('postcss-loader')
	let syntaxHtml =  require.resolve('postcss-html')

	// default values
	if (!options.include && !options.exclude) {
		options.include = [neutrino.options.source, neutrino.options.tests]
	}

	config
		.module.rule('style')
			//	 .test(styleExtensions)
			.use('css')
				.tap((opts = {}) => merge({ importLoaders: 1 }, opts))
				.end()
			.end().end()
		.module.rule('postcss')
			.pre()
			.test(loaderExtensions)
			.include
				.merge(options.include || [])
				.end()
			.exclude
				.add(NODE_MODULES)
				.merge(options.exclude || [])
				.end()
			.use('postcss')
				.loader(postcssLoader)
				.tap((opts = {}) => merge(opts, postcssOptions))
				.end()
			.end().end()
		.module.rule('postcss-html')
			.pre()
			.test( /\.html?$/)
			.include
				.merge(options.include || [])
				.end()
			.exclude
				.add(NODE_MODULES)
				.merge(options.exclude || [])
				.end()
			.use('postcss')
				.loader(postcssLoader)
				.tap((opts = {}) => merge(opts, postcssOptions))
				.tap((opts = {}) => merge(opts, {
					// exec: undefined,
					// parser: syntaxHtml
					syntax: syntaxHtml
					// stringifier: undefined,	 
					// config: undefined
				}))
				.end()
			.end().end()
		.module.rule('vue')
			.use('vue')
				.tap((opts = {}) => merge(opts, {
					postcss: postcssOptions
				}))
				.end()
			.end().end()
		.resolveLoader.modules
			.add(NODE_MODULES)
			.end().end()
}