import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/style/tailwind.css'
import { sync } from 'vuex-router-sync'

Vue.config.productionTip = false

sync(store, router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
