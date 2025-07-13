import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueI18n from '@/plugins/i18n'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app
.use(createPinia())
.use(router)
.use(VueI18n)

app.mount('#app')
