import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/base.css';
import  './assets/css/pub.css';

// router.beforeEach((to, from, next) => {
//  if(to.meta.requireAuth){

//  }
  
// })

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
