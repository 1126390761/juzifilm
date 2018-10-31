import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hottopic from '@/page/hottopic'
import Lhot from '@/page/Lhot'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hottopic',
      name: 'Hottopic',
      component: Hottopic
    },
    {
      path: '/Lhot',
      name: 'Lhot',
      component: Lhot
    }
  ]
})
