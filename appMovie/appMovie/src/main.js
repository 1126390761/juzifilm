// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
// import VueRouter from 'vue-router
import { ViewBox } from 'vux'
import { Tabbar, TabbarItem,Actionsheet} from 'vux'
import router  from './router'
import App from './App'
import axios from 'axios'
// import Home from './components/HelloFromVux'

// Vue.use(VueRouter)

// const routes = [{
//   path: '/',
//   component: Home
// }]

// const router = new VueRouter({
//   routes
// })
Vue.component('tabbar', Tabbar)
Vue.component('tabbar-item', TabbarItem)
Vue.component('actionsheet', Actionsheet)
Vue.component('view-box', ViewBox)
FastClick.attach(document.body)

Vue.prototype.axios = axios
axios.defaults.withCredentials=true
axios.defaults.baseURL = 'http://localhost:81'
Vue.prototype.url = 'http://localhost:81';
FastClick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
