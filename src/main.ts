import { createApp } from 'vue'
import App from './App.vue'

import RoughUI from '../packages'

import router from './router'

createApp(App).use(RoughUI).use(router).mount('#app')
