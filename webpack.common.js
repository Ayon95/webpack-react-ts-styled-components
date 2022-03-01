const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, './src/index.tsx'),

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.jsx'],
	},

	module: {
		rules: [
			{
				test: /\.(js|ts)x?$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: 'React TS styled-components Webpack demo',
			template: path.resolve(__dirname, './public/index.html'),
		}),
	],
};
