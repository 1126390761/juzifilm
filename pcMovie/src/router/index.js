import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/xhome'
import xaddMovie from '@/page/xaddMovie'
import movieItem from '@/components/movieItem2'
import rankingList from '@/components/rankingList'
import zmovieIntroduction from '@/page/zmovieIntroduction'
import hottopic from '@/page/hottopic'
import zlist  from '@/page/zlist'
import Lmovie  from '@/page/Lmovie'
import search from '@/page/search'
import userInfo from '@/page/userInfo'
import newsDetails from '@/page/newsDetails'
import preDetails from '@/page/preDetails'
import login from '@/page/login'
import theater from '@/page/theater'
import selectfield from '@/page/selectfield'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/hottopic',
      name: 'hottopic',
      component: hottopic
    },
    {
      path: '/list',
      name: 'zlist',
      component: zlist
    },
    {
      path: '/movieinfo',
      name: 'zmovieIntroduction',
      component: zmovieIntroduction
    },
    {
      path: '/Lmovie',
      name: 'Lmovie',
      component: Lmovie
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/add',
      name: 'xaddMovie',
      component: xaddMovie
    },
    {
      path: '/user',
      name: 'userInfo',
      component: userInfo
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
    },
    {
      path: '/theater',
      name: 'theater',
      component: theater
    },
    {
      path: '/selectfield',
      name: 'selectfield',
      component: selectfield
    }
  ],
  mode:"history"
})
