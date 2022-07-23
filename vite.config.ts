/*
 * @Author: sifengyuan
 * @Date: 2022-07-23 10:50:48
 * @LastEditors: sifengyuan
 * @LastEditTime: 2022-07-23 21:42:58
 * @FilePath: /iuUI/vite.config.ts
 * @Description: update here
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
const { resolve } = require('path');


export default defineConfig({
  plugins: [vue(), vueJsx()],
  build: {
		outDir: 'lib',
		lib: {
			entry: resolve(__dirname, 'packages/index.ts'), 
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
