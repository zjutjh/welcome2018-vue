import Vue from 'vue'
import Router from 'vue-router'

//import HelloWorld from '@/components/HelloWorld'
//import demo1 from '@/components/demo1.vue'

import login from '@/components/login.vue'      //登录页
import result1 from '@/components/result1.vue'  //学号班级
import result2 from '@/components/result2.vue'  //班级
import result3 from '@/components/result3.vue'  //同学
import login2 from '@/components/login2.vue'    //查寝室登录页
import result4 from '@/components/result4.vue'  //寝室
import result5 from '@/components/result5.vue'  //室友

Vue.use(Router)

export default new Router({
  routes: [

    /*{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo1',
      name: 'demo1',
      component: demo1
    },*/
    {
      path: '/1',
      name: 'login',
      component: login
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
    },
    {
      path: '/result3',
      name: 'result3',
      component: result3
    },
    {
      path: '/',
      name: 'login2',
      component: result5
    },
    {
      path: '/result4',
      name: 'result4',
      component: result4
    },
    {
      path: '/result5',
      name: 'result5',
      component: result5
    },

  ]
})
