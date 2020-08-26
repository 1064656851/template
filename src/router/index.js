import Vue from 'vue'
import Router from 'vue-router'
import homeRouter from './home'


Vue.use(Router)

export default new Router({
  routes: [
    homeRouter,
    {
       path : '/*',
       redirect : '/home'
    }
  ]
})
