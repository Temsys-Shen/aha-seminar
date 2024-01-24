import 'tippy.js/dist/tippy.css'
import './assets/main.css'
import './assets/fonts/noto-sans.css'
import './assets/fonts/roboto-condensed.css'

import { createApp } from 'vue'
import App from './App.vue'
import MobileAppVue from './MobileApp.vue'
// import router from './router'

const app = createApp(App)
const mobileApp = createApp(MobileAppVue)
const isMobile =
  //ipad、webOS不算移动端,除非竖屏看
  /Android|iPhone|iPod|BlackBerry/i.test(
    navigator.userAgent
  ) || window.innerWidth < 769

if (isMobile) {
  mobileApp.mount('#app')
} else {
  app.mount('#app')
}
