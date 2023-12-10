/*
 * @Author: sifengyuan
 * @Date: 2022-07-23 21:53:26
 * @LastEditors: sfy
 * @LastEditTime: 2023-04-22 09:46:17
 * @FilePath: /vultures-vue/packages/base-components.ts
 * @Description: update here
 */
import { App } from 'vue'
import ButtonPlugin from './Basic/button'



const loadInstaBasellPlugin = (app: App) => {
  ButtonPlugin.install?.(app)
}

export default loadInstaBasellPlugin
