'use strict'

let jestPreset = require('neutrino-preset-jest')

module.exports = function(neutrino){
	neutrino.use(jestPreset, {
		transformIgnorePatterns: ['<rootDir>/node_modules/(?!.+/.+\\.vue$)'],
		moduleNameMapper: {
			// '^@[/](.+)': '<rootDir>/src/$1'
			// '^image![a-zA-Z0-9$_-]+$': 'GlobalImageStub',
			// '^[./a-zA-Z0-9$_-]+\\.png$': '<rootDir>/RelativeImageStub.js',
			// 'module_name_(.*)': '<rootDir>/substituted_module_$1.js',

			// mock all npm modules
			// '^(?![\\./])': require.resolve('./jest-vue-component-mock.js')
		},
		unmockedModulePathPatterns: ['vue'],
		moduleFileExtensions: ['vue'],
		transform: {
			// '.*/node_modules/.+/.+\\.vue$': require.resolve('./jest-vue-component-mock.js'),
			'^((?!node_modules/).)+\\.vue$': require.resolve('./jest-vue-processor.js')
			// '^.+\\.vue$': require.resolve('./jest-vue-processor.js')
		}
	})
}