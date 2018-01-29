import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/Test'
import test1 from '@/components/Test1'
import test2 from '@/components/Test2'
import Error from '@/components/Error'

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
      path: '/test',
      name: 'test',
      component: test,
      children: [{
        path: 'test1',
        component: test1,
        name: '/test/test1'
      }, {
        path: 'test2/:userId(\\d+)/:username',
        component: test2,
        name: '/test/test2',
        beforeEnter (to, from, next) {
          console.log(to)
          console.log(from)
          next()
        }
      }, {
        path: '/home/:userId(\\d+)/:username',
        redirect: 'test2/:userId(\\d+)/:username'
      }]
    }, {
      path: '/error',
      component: Error
    }
  ]
})
