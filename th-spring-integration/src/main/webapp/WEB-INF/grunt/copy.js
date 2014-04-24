module.exports = {
	dist:{
		files: [
			{
				expand: true,
				cwd: '<%= package.jssrc %>/vendor/', 
				src: ['**'], 
				dest: '<%= package.js %>/'
			},
			{
				expand: true,
				cwd: '<%= package.jssrc %>/config/', 
				src: ['**'], 
				dest: '<%= package.js %>/'
			}
		]
	}
};