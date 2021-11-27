import Vue from 'vue'
import paper from 'paper'
import App from './App.vue'
import store from './store'
import VTooltip from 'v-tooltip'
import './index.css'

paper.install(window)
Vue.prototype.$store = store
Vue.config.productionTip = false

Vue.use(VTooltip)

export default new Vue({
  store,
  render: (h) => h(App)
}).$mount('#app')
