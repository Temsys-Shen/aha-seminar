import './assets/main.css'
import './assets/fonts/noto-sans.css'
import './assets/fonts/roboto-condensed.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.mount('#app')
