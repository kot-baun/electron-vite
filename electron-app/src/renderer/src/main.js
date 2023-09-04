import { createApp } from 'vue'
import App from './App.vue'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
//icon
// import PrimeVue from 'primevue/config'

createApp(App)
  .use(VueSidebarMenu)
  // .use(PrimeVue)
  .mount('#app')
