import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Controls from '@/components/Controls'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },{
      path: '/login',
      component: Login,
      name:'login'
    },{
      path: '/controls',
      component: Controls,
      name: 'controls'
    }
  ]
})
