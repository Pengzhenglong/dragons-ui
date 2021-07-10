import Vue from 'vue'
import App from './App.vue'
import DgButton from './components/button.vue'
import './assets/fonts/font.scss'

Vue.component(DgButton.name, DgButton)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
