// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'
import App from './App'
import router from './router'
import store from './vuex'

Vue.use(VueLazyLoad, {
  preLoad: 2,
  error: 'static/error.png',
  loading: 'static/loading.png',
  attempt: 1
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
