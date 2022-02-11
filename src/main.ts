import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import { directive } from '/@/utils/directive'
import { i18n } from '/@/i18n/index'
import other from '/@/utils/other'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '/@/theme/index.scss'
import * as ElIcons from '@element-plus/icons-vue'
import mitt from 'mitt'
import screenShort from 'vue-web-screen-shot'
import VueGridLayout from 'vue-grid-layout'

const app = createApp(App)
Object.keys(ElIcons).forEach(key => {
  app.component(key, (ElIcons as any)[key])
})

directive(app)
other.elSvg(app)

app
  .use(router)
  .use(store, key)
  .use(ElementPlus, { i18n: i18n.global.t, size: other.globalComponentSize })
  .use(i18n)
  .use(screenShort, { enableWebRtc: false })
  .use(VueGridLayout)
  .mount('#app')

app.config.globalProperties.mittBus = mitt()
