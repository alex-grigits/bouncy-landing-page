const webpack = require('webpack');

module.exports = function() {
	return {
		devServer: {
			stats: 'errors-only',
			port: 9000,
			// hot: true
		},
		// plugins: [
		// 	new webpack.HotModuleReplacementPlugin({
		// 		multiStep: true
		// 	})
		// ]
	};
};
