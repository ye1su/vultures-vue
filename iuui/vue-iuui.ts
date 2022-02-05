import type { App } from 'vue'
import TreeInstall, { Tree } from './tree'
import ButtonInstall, { Button } from './button'

const installs = [
  TreeInstall,
  ButtonInstall,
]

export {
  Tree,
  Button,
}

export default {
  version: '0.0.1',
  install(app: App): void {
    installs.forEach((p) => app.use(p as any))
  }
}
