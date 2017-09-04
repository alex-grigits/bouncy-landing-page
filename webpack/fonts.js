module.exports = function() {
	return {
		module: {
			rules: [
				{
					test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]',
								outputPath: 'fonts/'
							}
						}
					]
				}
			]
		}
	};
};
