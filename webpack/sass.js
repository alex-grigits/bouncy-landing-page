const path = require('path');

module.exports = function(paths) {
	return {
		module: {
			rules: [
				// Apply loader
				{
					test: /\.(scss|sass)$/,
					include: paths,
					use: [
						'style-loader',
						'css-loader',
						// 'postcss-loader',
						'sass-loader',

						// TODO: share vars.sass, grid.sass and mixins.scss
						// {
						// 	loader: 'sass-resources-loader',
						// 	options: {
						// 		resources: [
						// 			path.resolve(__dirname, './src/blocks/_base/_vars.sass'),
						// 			path.resolve(__dirname, './src/blocks/_base/_mixins.scss'),
						// 			path.resolve(__dirname, './src/blocks/_base/_grid.sass')
						// 		]
						// 	}
						// }
					]
				}
			]
		}
	}
};
