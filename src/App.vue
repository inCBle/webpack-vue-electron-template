<!--
 * @Date: 2023-10-12 18:48:40
 * @LastEditors: 吴迪
 * @LastEditTime: 2023-10-13 02:59:15
 * @FilePath: \vue-webpack-electron-￥？？\src\App.vue
-->
<template>
	<div class="container">
		<h1>
			当前electron版本 <span style="color: red;">{{ version }}</span>
		</h1>
		<header class="nav">
			<router-link class="link" to="/home">首页</router-link>
			<router-link class="link" to="/about">关于</router-link>
		</header>
		<main class="view">
			<router-view></router-view>
		</main>
		<footer></footer>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				version: null,
			};
		},
		created() {
			this.version = window.appApi?.getElectronVersions();
		},
	};
</script>

<style lang="scss" scoped>
	.container {
		text-align: center;
	}
	.nav {
		display: flex;
		justify-content: center;

		.link {
			margin: 0 10px;
		}
	}
	.view {
		width: 900px;
		height: 600px;
		margin: 0 auto;
		background-color: pink;
	}
</style>
