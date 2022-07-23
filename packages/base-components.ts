/*
 * @Author: sifengyuan
 * @Date: 2022-07-23 21:53:26
 * @LastEditors: sifengyuan
 * @LastEditTime: 2022-07-23 21:55:57
 * @FilePath: /iuUI/packages/base-components.ts
 * @Description: update here
 */
import { App } from 'vue';
import ButtonPlugin  from './vul-base/button';
import CardPlugin from './vul-base/card';

const loadInstallPlugin = (app: App) => {
  ButtonPlugin.install?.(app);
  CardPlugin.install?.(app);
}

export default loadInstallPlugin
