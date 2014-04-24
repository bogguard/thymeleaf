module.exports = {
	prod: {
		files: ['<%= package.sass %>/*.scss', '<%= package.sass %>/**/*.scss', '<%= package.jssrc %>/main.js', '<%= package.jssrc %>/3rdparty/*.js', '<%= package.jssrc %>/modules/*.js', '<%= package.jssrc %>/config/*.js', '<%= package.jssrc %>/*.js'],
		tasks: ['sass:prod', 'bless:prod', 'concat', 'uglify', 'copy', 'notify:sass', 'notify:js']
	},
	dev: {
		files: ['<%= package.sass %>/*.scss', '<%= package.sass %>/**/*.scss', '<%= package.jssrc %>/main.js', '<%= package.jssrc %>/3rdparty/*.js', '<%= package.jssrc %>/modules/*.js', '<%= package.jssrc %>/config/*.js', '<%= package.jssrc %>/*.js'],
		tasks: ['sass:dev', 'bless:dev', 'concat', 'uglify', 'copy', 'notify:sass', 'notify:js']
	}
};
