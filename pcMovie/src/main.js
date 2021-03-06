// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);
import axios from 'axios'
Vue.prototype.axios = axios
axios.defaults.withCredentials=true
axios.defaults.baseURL = 'http://localhost:81'

Vue.prototype.url = 'http://localhost:81';
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
     App
  },
  template: '<App/>'
})
