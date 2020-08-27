import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

export default new Router({
  routes: [{
      path: '/home',
      component: () => import('@/views/Home'),
      children:[
      	{
      		path:'vote',
      		component : () => import('@/components/vote')
      	},
        {
        	path:'list',
        	component : () => import('@/components/list')
        },
      	{
      		path:'/home',
      		redirect:'vote'
      	}
      ]
    },
    //登陆
    {
      path: '/login',
      component: () => import('@/views/LogIn'),
    },
    {
      path: '/img',
      component: () => import('@/views/img'),
    },
    {
      path: '/*',
      redirect: '/home'
    }
  ]
})
