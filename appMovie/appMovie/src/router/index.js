import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import predetails from '@/page/predetails'
import LmovieHot from '@/page/LmovieHot'
import LmovieWill from '@/page/LmovieWill'
import hottopic from '@/components/hottopic'
import home from '@/page/xhome'
import search from '@/page/search'
import list from '@/page/list'
import person from '@/page/person'
import zdetail from '@/page/zdetail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
    	path: '/list',
      name: 'list',
      component: list
    },
    {
    	path: '/person',
      name: 'person',
      component: person
    }, 

    {
    	path: '/detail',
      name: 'zdetail',
      component: zdetail

    },
    {
      path: '/predetails',
      name: 'predetails',
      component: predetails
    },
    {
      path: '/hottopic',
      name: 'hottopic',
      component: hottopic
    },
    {
      path: '/LmovieHot',
      name: 'LmovieHot',
      component: LmovieHot
    },
    {
      path: '/LmovieWill',
      name: 'LmovieWill',
      component: LmovieWill
    },
  ],
  mode:'history'
})
