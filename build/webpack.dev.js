const { resolve } = require('node:path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

// 合并公共配置,并添加开发环境配置
module.exports = merge(baseConfig, {
	mode: 'development',
	devServer: {
		port: 3000,
		compress: false,
		hot: true,
		open: true,
		historyApiFallback: true,
		static: {
			directory: resolve(__dirname, '../public'),
		},
	},
});
