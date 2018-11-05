import Vue from 'vue'
import Router from 'vue-router'
import xaddMovie from '@/page/xaddMovie'
import Hottopic from '@/page/hottopic'
import newsDetails from '@/page/newsDetails'
import preDetails from '@/page/preDetails'
import xhome from '@/page/xhome'
import login from '@/page/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'xhome',
      component: xhome
    },
    {
      path: '/hottopic',
      name: 'Hottopic',
      component: Hottopic
    },
    // {
    //   path: '/Lmovie',
    //   name: 'Lmovie',
    //   component: Lmovie
    // },
    {
      path: '/xaddMovie',
      name: 'xaddMovie',
      component: xaddMovie
    },
    {
      path: '/newsdetails/:newsid',
      name: 'newsdetails',
      component: newsDetails
    },
    {
      path: '/predetails/:pid',
      name: 'predetails',
      component: preDetails
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }

  ],
  mode:"history"
})
