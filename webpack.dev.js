const path = require('path');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = merge(commonConfig, {
	mode: 'development',
	devtool: 'cheap-module-source-map',
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'public'),
		},
		port: 9000,
	},
	plugins: [new ReactRefreshWebpackPlugin()],
});
