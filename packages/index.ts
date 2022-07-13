import { App, Plugin } from 'vue'

import { ButtonPlugin } from './Button'

const RoughUIPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app)
  },
}

export default RoughUIPlugin

export * from './Button'
