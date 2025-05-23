import { defineConfig } from 'vite';
import AutoImport from "unplugin-auto-import/vite";
import Components from 'unplugin-vue-components/vite';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers';
import path from 'path';
import vue from '@vitejs/plugin-vue'; // 引入 @vitejs/plugin-vue
import wasm from 'vite-plugin-wasm';

export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './'), // 根据实际情况调整路径
		},
	},
	plugins: [
		vue(), // 添加 @vitejs/plugin-vue 插件
		AutoImport({
			imports: [
				"vue",
				"vue-router",
				"@vueuse/core",
				{
					"naive-ui": ["useDialog", "useMessage", "useNotification", "useLoadingBar"],
				},
			],
			eslintrc: {
				enabled: true,
				filepath: "./auto-eslint.mjs",
			},
		}),
		Components({
			resolvers: [NaiveUiResolver()], // 自动按需导入 Naive UI
		}),
		wasm(), // 添加 wasm 插件
	],
	css: {
		preprocessorOptions: {
			scss: {
				silenceDeprecations: ["legacy-js-api"],
			},
		},
	},
	build: {
		minify: 'terser', // 生产环境压缩
		terserOptions: {
			compress: {
				drop_console: true,
			},
		},
	},
});