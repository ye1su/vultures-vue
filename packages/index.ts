/*
 * @Author: sifengyuan
 * @Date: 2022-07-23 17:52:58
 * @LastEditors: sifengyuan
 * @LastEditTime: 2022-07-23 21:57:12
 * @FilePath: /iuUI/packages/index.ts
 * @Description: update here
 */

import { App, Plugin } from 'vue';
import loadInstallPlugin from './base-components'


const VulPlugin: Plugin = {
  install(app: App) {
    loadInstallPlugin(app)
  },
};

export default VulPlugin;

export * from './vul-base/button';