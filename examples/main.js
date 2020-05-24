import Vue from 'vue'
import App from './App.vue'

import myUI from '../packages/index'

Vue.config.productionTip = false

Vue.use(myUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
