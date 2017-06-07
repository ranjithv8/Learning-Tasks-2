var webpack = require('webpack');
module.exports = {
	context: __dirname + '/src/app',
	entry: {
		app: './index.js',
	},
	output: {
		path: __dirname + '/dist',
		filename: 'app.bundle.js'
	}
};