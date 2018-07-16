import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import demo1 from '@/components/demo1.vue'

import main from '@/components/main.vue'
import result1 from '@/components/result1.vue'
import result2 from '@/components/result2.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo1',
      name: 'demo1',
      component: demo1
    },
    {
      path: '/main',
      name: 'main',
      component: main
    },
    {
      path: '/result1',
      name: 'result1',
      component: result1
    },
    {
      path: '/result2',
      name: 'result2',
      component: result2
    }
  ]
})
