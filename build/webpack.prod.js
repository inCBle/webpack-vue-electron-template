/*
 * @Date: 2023-10-12 18:48:09
 * @LastEditors: 吴迪
 * @LastEditTime: 2023-10-13 02:58:24
 * @FilePath: \vue-webpack-electron-￥？？\build\webpack.prod.js
 */
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

module.exports = merge(baseConfig, {
	mode: 'production', // 生产模式,会开启tree-shaking和压缩代码,以及其他优化
});
