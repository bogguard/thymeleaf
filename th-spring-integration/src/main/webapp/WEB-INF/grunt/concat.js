module.exports = {
	options: {
		compress: false,
		separator: ''
	},
	dist: {
		src: [
			'<%= package.jssrc %>/3rdparty/*.js',
			'<%= package.jssrc %>/main.js',
			'<%= package.jssrc %>/modules/*.js',
			'<%= package.jssrc %>/*.js'
		],
		dest: '<%= package.js %>/main.js'
	}
};