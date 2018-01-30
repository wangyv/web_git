import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/Test'
import test1 from '@/components/Test1'
import test2 from '@/components/Test2'
import Error from '@/components/Error'
import Count from '@/components/Count'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      alias: '/acbc'
    }, {
      path: '/Test',
      name: 'test',
      component: test,
      children: [{
        path: 'Test1',
        component: test1,
        name: '/test/test1'
      }, {
        path: 'Test2/:userId(\\d+)/:username',
        component: test2,
        name: '/Test/Test2',
        beforeEnter (to, from, next) {
          console.log(to)
          console.log(from)
          next()
        }
      }, {
        path: '/home/:userId(\\d+)/:username',
        redirect: 'Test2/:userId(\\d+)/:username'
      }]
    }, {
      path: '/Error',
      component: Error
    }, {
      path: '/Count',
      component: Count
    }
  ]
})
