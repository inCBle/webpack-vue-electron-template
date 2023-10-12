const { join, resolve } = require('node:path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const isApp = process.env.NODE_ENV === 'app';

module.exports = {
	entry: resolve(__dirname, '../src/main.js'),
	output: {
		filename: 'static/js/[name].[contenthash].js',
		path: join(__dirname, '../dist'),
		clean: true,
		publicPath: isApp ? './' : '/',
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: 'vue-loader',
			},
			{
				test: /\.(sa|sc|c)ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: resolve(__dirname, '../public/index.html'),
			inject: 'body',
		}),
		new CopyPlugin({
			patterns: [
				{
					from: resolve(__dirname, '../public'),
					to: resolve(__dirname, '../dist'),
					filter: (source) => !source.includes('index.html'),
				},
				{
					from: resolve(__dirname, '../electron'),
					to: resolve(__dirname, '../dist/electron'),
				},
			],
		}),
	],
	resolve: {
		extensions: ['.vue', '.js', '.json'],
		alias: {
			'@': resolve(__dirname, '../src'),
		},
	},
};
