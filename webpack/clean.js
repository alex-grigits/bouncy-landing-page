const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = function() {
	return {
		plugins: [
			new CleanWebpackPlugin(
				['dist'],
				{
					root: __dirname,
					verbose: true,
					dry: false
				}
			)
		]
	};
};

