module.exports = {
	// for production
	prod: {
		files: {
			'<%= package.csssrc %>/main.min.css': '<%= package.sass %>/main.scss',
			'<%= package.csssrc %>/main-old-ie.min.css': '<%= package.sass %>/main-old-ie.scss'
		},
		options: {
			style : 'compressed'
		}
	},
	// for development
	dev: {
		files: {
			'<%= package.csssrc %>/main.css': '<%= package.sass %>/main.scss',
			'<%= package.csssrc %>/main-old-ie.css': '<%= package.sass %>/main-old-ie.scss'
		},
		options: {
			style : 'expanded',
			lineNumbers: true,
			trace: false
		}
	}
};