module.exports = {
	options: {
		curly: true,
		browser: true,
		jquery: true,
		node: true,
		camelcase: true,
		eqeqeq: true,
		eqnull: true,
		indent: 2,
		latedef: true,
		newcap: true,
		quotmark: 'single',
		trailing: true,
		undef: true,
		unused: true,
		maxlen: 120,
		strict: true,
		globals: {
			'$': true,
			'bean': true,
			'bonzo': true,
			'qwery': true,
			'Arbiter': true,
			'moment': true,
			'reqwest': true,
			'App': false,
			'Toggle': false,
			'Tabs': false,
			'Pikaday': true,
			'Cycle': true,
			'Dialog': true,
			'Tooltip': true,
			'Validate': true,
			'FB': true,
			'Social': true,
			'escape': false,
			'unescape': false,
			'ssoConnect': false, //sso library
			'util': false,
			'throttle': false, //event throttling function,
			'Streamer': true,
			'Popover': true
		},
		reporter: require('jshint-stylish')
	},
	all: ['<%= package.js %>/modules/*.js', '<%= package.jssrc %>/*.js']
};