// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
import axios from 'axios';
import './assets/css/init.css'
import store from './store'
import Vuex from 'vuex'



Vue.use(Vuex)


Vue.config.productionTip = false;
Vue.prototype.$ajax = axios;



/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
