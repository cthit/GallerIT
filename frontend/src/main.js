// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'
import App from './App'
import router from './router'
import store from './vuex'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

Vue.component('icon', Icon)

Vue.use(VueLazyLoad, {
  preLoad: 2,
  error: 'http://images1.fanpop.com/images/image_uploads/Funny-Cat-Pictures-animal-humor-935491_500_375.jpg',
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
