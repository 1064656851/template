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


import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
Vue.use(Vuex)

router.beforeEach((to, from, next) => {
  //我在这里模仿了一个获取用户信息的方法
  let isLogin = window.localStorage.getItem('userid');
  if (isLogin) {
    //如果用户信息存在则往下执行。
    next()
  } else {
    //如果用户token不存在则跳转到login页面
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})


Vue.config.productionTip = false;
Vue.prototype.$ajax = axios;



/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  },
  template: '<App/>'
})
