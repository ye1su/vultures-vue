/*
 * @Author: sifengyuan
 * @Date: 2022-07-23 17:52:58
 * @LastEditors: sifengyuan
 * @LastEditTime: 2022-07-25 22:05:31
 * @FilePath: /vultures/packages/index.ts
 * @Description: update here
 */

import { App, Plugin } from 'vue';
import loadInstaBasellPlugin from './base-components'
import loadInstallGraphPlugin from './graph-conponents'


const VulPlugin: Plugin = {
  install(app: App) {
    loadInstaBasellPlugin(app)
    loadInstallGraphPlugin(app)
  },
};

export default VulPlugin;
