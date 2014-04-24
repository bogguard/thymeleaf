module.exports = {
	options: {
		force: true
	},
	dev: {
		files: {
			// destination : source
			'<%= package.css %>/main.css' : '<%= package.csssrc %>/main.css',
			'<%= package.css %>/main-old-ie.css' : '<%= package.csssrc %>/main-old-ie.css'
		}
	},
	prod: {
		files: {
			// destination : source
			'<%= package.css %>/main.min.css': '<%= package.csssrc %>/main.min.css',
			'<%= package.css %>/main-old-ie.min.css' : '<%= package.csssrc %>/main-old-ie.min.css'
		}
	}
};