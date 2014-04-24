module.exports = {
	// these paths should match directories
	files: [
		'<%= package.img %>'
	],
	options: {
		// also run images through ImageAlpha.app before ImageOptim.app
		imageAlpha: true,
		// also run images through JPEGmini.app after ImageOptim.app
		jpegMini: false,
		// quit all apps after optimisation
		quitAfter: true
	}
};