/*
 * @Author: sifengyuan
 * @Date: 2022-07-23 17:52:58
 * @LastEditors: sifengyuan
 * @LastEditTime: 2022-07-23 18:05:46
 * @FilePath: /iuUI/packages/index.ts
 * @Description: update here
 */

import { App, Plugin } from 'vue';
import  ButtonPlugin  from './button';

const loadInstallPlugin = (app: App) => {
  ButtonPlugin.install?.(app);

}

const VulPlugin: Plugin = {
  install(app: App) {
    loadInstallPlugin(app)
  },
};

export default VulPlugin;

export * from './button';