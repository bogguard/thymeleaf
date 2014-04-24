module.exports = {
	options: {
		mangle: true,
		compress: true,
		beautify: false,
		banner: '/*! <%= package.title || package.name %> - v<%= package.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
				'<%= package.homepage ? "* " + package.homepage + "\\n" : "" %>' +
				' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= package.author.name %>;' +
				' Licensed <%= _.pluck(package.licenses, "type").join(", ") %> */\n'
	},
	dist: {
		src: '<%= package.js %>/main.js',
		dest: '<%= package.js %>/main.min.js'
	}
};