import Vue from 'vue'
import App from './App.vue'
import VueFire from 'vuefire'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export const navbarBus = new Vue()

Vue.use(VueFire)
Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  render: h => h(App)
})
