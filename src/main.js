import Vue from 'vue'
import fastclick from './js/fastclick.js'
import { PullRefresh, List, Icon, Popup, Dialog, Toast } from 'vant'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import router from './router'
import App from './App.vue'
window.Dialog = Dialog
window.toast = function(params) {
  let toastObj = {}
  let message, duration
  if (typeof params == 'string') {
    message = params
    duration = 1500
    toastObj = {
      message,
      duration
    }
  } else if (typeof params == 'object') {
    toastObj = params
  }
  Toast(toastObj)
}
import './style/css/reset.css'
import './style/css/base.css'
import './style/less/transition.less'
import 'swiper/dist/css/swiper.css'

import ImsHeader from '@/components/ims-header/ims-header'
import loading from './components/loading/loading.js'
import interfaces from './config/url.js'
import $http from './js/http.js'
import api from './js/api.js'

Vue.use(List)
  .use(Icon)
  .use(Popup)
  .use(Dialog)
  .use(PullRefresh)
  .use(VueAwesomeSwiper)

Vue.component('ims-header', ImsHeader)

Vue.config.productionTip = false

Vue.prototype.interfaces = interfaces
Vue.prototype.$loading = loading
Vue.prototype.$http = $http
Vue.prototype.$api = api

fastclick.attach(document.body)
fastclick.prototype.focus = function(targetElement) {
  targetElement.focus()
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
