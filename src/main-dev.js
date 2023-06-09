import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './axios/index-dev'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import './assets/style/common.css'
import './assets/font/iconfont'
import VueScrollTo from 'vue-scrollto'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
import VideoPlayer from 'vue-video-player'
// mock模拟数据
import './mock/index.js'
// 网站统计
/* eslint-disable */
// var _hmt = _hmt || []
// window._hmt = _hmt; // 将_hmt挂载到window下

// (function () {
//   var hm = document.createElement('script')
//   hm.src = 'https://hm.baidu.com/hm.js?xxxxxxxxx'
//   var s = document.getElementsByTagName('script')[0]
//   s.parentNode.insertBefore(hm, s)
// })()
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)
Vue.use(Viewer)
Vue.use(ElementUI)
// Vue.use(animated)
Vue.use(VueScrollTo)
Vue.component('mavon-editor', mavonEditor)
// 默认选项
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 1500,
  easing: 'ease',
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
