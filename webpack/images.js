module.exports = function() {
	return {
		module: {
			rules: [
				{
					test: /\.(png|jpg|svg|gif)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]',
								outputPath: 'images/'
							}
						}
					]
				}
			]
		}
	};
};
