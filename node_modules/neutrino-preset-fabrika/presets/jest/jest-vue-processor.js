'use strict'

let babel = require('babel-core')
let transpile = require('vue-template-es2015-compiler')
let vueCompiler = require('vue-template-compiler')
// let pugCompiler = require('pug')

function babelify(src, filename, babelOptions) {
	return babel.transform(src, Object.assign({}, { filename }, babelOptions)).code
}

function toFunction (code) {
	return transpile('function render () {' + code + '}')
}

function vue(src, filePath, config) {
	let component = vueCompiler.parseComponent(src, { pad: true })
	let { script, template } = component
	let js = ''
	let html = ''

	script = script || { lang: null }
	template = template || { lang: null }

	switch (script.lang){
	case null: break
	case '':
	case undefined:
		js = babelify(script.content, filePath, config.globals.BABEL_OPTIONS)
		break
	default:
		throw filePath + ': unknown <script lang="' + script.lang + '">'
	}


	switch(template.lang) {
	case null: break
	// case 'pug':
	// 	html = pugCompiler.compile(template.content)()
	// 	break
	case 'html':
	case '':
	case undefined:
		html = template.content
		break
	default:
		throw filePath + ': unknown <template lang="' + template.lang + '">'
	}

	let compiled = vueCompiler.compile(html)
	let render = toFunction(compiled.render)
	let staticRenderFns = `[${compiled.staticRenderFns.map(toFunction).join(',')}]`

	return `
		;(function(){
			${js}
		})()
		if (module.exports.__esModule) { module.exports = module.exports.default }
		var __vue__options__ = (typeof module.exports === "function"
			? module.exports.options
			: module.exports)
		__vue__options__.render = ${render}
		__vue__options__.staticRenderFns = ${staticRenderFns}
		`
}

module.exports = {
	process: function(src, filePath, config) {
		let output = src
		if (filePath.endsWith('.vue')) {
			output = vue(src, filePath, config)
		}
		return output
	}
}