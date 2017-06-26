var webpack = require('webpack');
module.exports = {
	context: __dirname + '/src/app',
	entry: {
		app: './index.js',
		vendor: 'angular'
	},
	output: {
		path: __dirname + '/dist',
		filename: '[name].bundle.js'
	},
	plugins: [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
    })
  ]
};
