/*
 * @Author: sifengyuan
 * @Date: 2022-07-23 10:50:48
 * @LastEditors: sifengyuan
 * @LastEditTime: 2022-07-23 19:23:38
 * @FilePath: /iuUI/vite.config.ts
 * @Description: update here
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
const { resolve } = require('path');

console.log(resolve(__dirname, 'packages/index.ts'), '----');


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  build: {
		outDir: 'lib',
		lib: {
			entry: resolve(__dirname, 'packages/index.ts'), //指定组件编译入口文件
			name: 'VulturesVue',
			fileName: 'vultures-vue',
		},
		rollupOptions: {
			external: ['vue'],
			output: {
				globals: {
					vue: 'Vue',
				},
			},
		},
	},
})
