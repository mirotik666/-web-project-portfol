'use strict'

module.exports = {
	rules: {
		'id-length': ['error', { min: 2, properties: 'never', exceptions: ['i'] }],
		'max-len': ['error', 120, {ignoreComments: true, ignoreUrls: true, ignoreStrings: true}],
		'quote-props': [1, 'consistent-as-needed'],
		'eol-last': 0,
		'comma-dangle': 0,
		'linebreak-style': 0,
		'no-tabs': 0,
		'indent': ['error', 'tab']
	}
}

