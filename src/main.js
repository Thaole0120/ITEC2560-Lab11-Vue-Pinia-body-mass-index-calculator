import { createApp, createTextVNode } from 'vue'
import {createPinia } from 'pinia'

import './style.css'
import App from './App.vue'

//createApp(App).mount('#app')
const app = createApp(App)
const pinia = createPinia()

app.use(pinia)

app.mount('#app')


