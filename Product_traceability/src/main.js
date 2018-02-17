// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import 'bootstrap/css/bootstrap.min.css'
import 'bootstrap/js/bootstrap.min'
import '@/assets/js/rem'
import '@/assets/css/reset.css'


import '@/assets/css/H-ui.css'
import '@/assets/css/H-ui.admin.css'
import '@/assets/css/H-ui.login.css'
import '@/assets/css/H-ui.ie.css'
import '@/assets/Hui-iconfont/1.0.8/iconfont.css'
// import '@/assets/js/layer'
// import '@/assets/js/H-ui.min'
// import '@/assets/js/H-ui.admin.page'
// import '@/assets/js/index.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
