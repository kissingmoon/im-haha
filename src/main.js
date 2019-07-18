import Vue from 'vue'
import fastclick from './js/fastclick.js'
import { PullRefresh, List, Icon, Popup, Dialog, Toast } from 'vant'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import router from './router'
import App from './App.vue'
window.Dialog = Dialog
window.toast = function(params) {
  if (!params) {
    console.log('toast null')
    return
  }
  let toastObj = {
    duration: 1500
  }
  if (typeof params == 'string') {
    toastObj = Object.assign({}, toastObj, { message: params })
  } else if (typeof params == 'object') {
    toastObj = Object.assign({}, toastObj, params)
  }
  Toast(toastObj)
}
import './style/css/reset.css'
import './style/css/base.css'
import './style/less/transition.less'
import 'swiper/dist/css/swiper.css'

import ImsHeader from '@/components/ims-header/ims-header'
import ImsImage from '@/components/ims-image.vue'
import ImsBtn from '@/components/ims-btn.vue'
import loading from './components/loading/loading.js'
import interfaces from './config/url.js'
import $http from './js/http.js'
import api from './js/api.js'
import { openVueTool } from './js/tools.js'
import { Swipe, SwipeItem } from 'vant'

openVueTool()
Vue.use(List)
  .use(Icon)
  .use(Popup)
  .use(Dialog)
  .use(PullRefresh)
  .use(VueAwesomeSwiper)
  .use(Swipe)
  .use(SwipeItem)

Vue.component('ims-header', ImsHeader)
Vue.component('ims-image', ImsImage)
Vue.component('ims-btn', ImsBtn)

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
