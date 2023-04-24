/*
 * @Author: sifengyuan
 * @Date: 2022-07-25 22:02:30
 * @LastEditors: sfy
 * @LastEditTime: 2023-04-22 09:46:39
 * @FilePath: /vultures-vue/packages/graph-conponents.ts
 * @Description: update here
 */
import { App } from 'vue'
import EchartCoumnarPlugin from './vul-graph/echart-columnar'
import ERPlugin from './vul-graph/er-relation'

const loadInstallGraphPlugin = (app: App) => {
  EchartCoumnarPlugin.install?.(app)
  ERPlugin.install?.(app)
}

export default loadInstallGraphPlugin
