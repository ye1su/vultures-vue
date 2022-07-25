/*
 * @Author: sifengyuan
 * @Date: 2022-07-25 22:02:30
 * @LastEditors: sifengyuan
 * @LastEditTime: 2022-07-25 22:04:28
 * @FilePath: /vultures/packages/graph-conponents.ts
 * @Description: update here
 */
import { App } from 'vue'
import EchartCoumnarPlugin from './vul-graph/echart-columnar'

const loadInstallGraphPlugin = (app: App) => {
  EchartCoumnarPlugin.install?.(app)

}

export default loadInstallGraphPlugin
