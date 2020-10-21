import Vue from 'vue'
import router from './router'
import App from './App.vue'
import './utils/antd-v'
import './style/reset.css'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
