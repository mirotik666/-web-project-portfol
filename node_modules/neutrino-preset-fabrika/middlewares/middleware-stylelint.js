'use strict'

let path = require('path')
let merge = require('deepmerge')
let stylelint = require('stylelint')
let postcssReporter = require('postcss-reporter')
let postCssPreloaderMiddleware = require('./middleware-postcss-preloader.js')

module.exports = function (neutrino, options = {}) {
	let prodRun = (process.env.NODE_ENV === 'production')

	neutrino.use(postCssPreloaderMiddleware, {
		include: options.include,
		exclude: options.exclude,
		sourceMap: true, /* 'inline' */
		plugins: [
			// require("postcss-import")({
			// 	plugins: [
			// 	require("stylelint")({ /* your options */ })
			// 	]
			// }),
			stylelint(options),
			postcssReporter({
				plugins: ['stylelint'],
				noPlugin: false,
				// throwError : Boolean(prodRun),
				// clearReportedMessages: true,
				clearAllMessages: true
			})
		]
	})

	neutrino.register('stylelintrc', function(){
		return options.config
	})
	neutrino.register('stylelint', function() {
		let defaultPattern = path.join(
			path.basename(neutrino.options.source),
			'**/*.css'
		)
		let includePattern = (options.include || [])
			.map(function (include) {
				return path.join(
					path.basename(neutrino.options.source),
					path.basename(include),
					'**/*'
				)
			})
		let excludePattern = (options.exclude || [])
			.map(function (exclude) {
				return path.join(
					path.basename(neutrino.options.source),
					path.basename(exclude),
					'**/*'
				)
			})
		let stylelintOptions = merge(options, {
			files: includePattern.length ? includePattern : defaultPattern,
			ignoreFiles: excludePattern,
			disableDefaultIgnores: true,
			formatter: 'verbose'
		})

		return stylelint.lint(stylelintOptions)
			.then(function({errored, output}) {
				if (errored) {
					throw output
				}
				else {
					return output
				}
			})
	})
}