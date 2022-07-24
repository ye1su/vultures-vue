/*
 * @Author: sifengyuan
 * @Date: 2022-07-23 21:53:26
 * @LastEditors: sifengyuan
 * @LastEditTime: 2022-07-24 21:19:12
 * @FilePath: /vultures/packages/base-components.ts
 * @Description: update here
 */
import { App } from 'vue'
import ButtonPlugin from './vul-base/button'
import CardPlugin from './vul-base/card'
import InputPlugin from './vul-base/input'
import ModalPlugin from './vul-base/modal'
import RipplePlugin from './vul-base/ripple'
import SearchPlugin from './vul-base/search'
import SkeletonPlugin from './vul-base/skeleton'
import SwitchPlugin from './vul-base/switch'
import TooltipPlugin from './vul-base/tooltip'
import TreePlugin from './vul-base/tree'

const loadInstallPlugin = (app: App) => {
  ButtonPlugin.install?.(app)
  CardPlugin.install?.(app)
  InputPlugin.install?.(app)
  ModalPlugin.install?.(app)
  RipplePlugin.install?.(app)
  SearchPlugin.install?.(app)
  SkeletonPlugin.install?.(app)
  SwitchPlugin.install?.(app)
  TooltipPlugin.install?.(app)
  TreePlugin.install?.(app)
}

export default loadInstallPlugin
