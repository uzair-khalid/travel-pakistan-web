module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'react-app',
		'airbnb-base',
	],
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx'],
			},
		},
	},
	overrides: [
		{
			files: ['*.js', '*.jsx'],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	rules: {
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'comma-dangle': 0,
		'no-console': 0,
		'react/prop-types': 0,
		'import/prefer-default-export': 0,
		'class-methods-use-this': 0,
		indent: ['error', 'tab'],
		'no-tabs': 0,
		'no-param-reassign': 0,
		'no-return-assign': 0,
		'no-plusplus': 0,
		'no-use-before-define': 0,
		'no-eval': 0,
		'import/no-cycle': 0,
		'global-require': 0,
		'import/no-dynamic-require': 0,
		'import/named': 0,
		'arrow-body-style': 0,
		'no-shadow': 0,
		'default-param-last': 0,
		'linebreak-style': 0,
	},
};
