import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';
import store from './vuex/store'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/base.css';
import  './assets/css/pub.css';

router.beforeEach((to, from, next) => {
if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限
      
    if (localStorage.getItem('user')){ // 判断缓存里面是否有 userName  //在登录的时候设置它的值
              next();
          } else {
              next({
                  path: '/',
                  query: {
                      redirect: to.fullPath
                  } // 将跳转的路由path作为参数，登录成功后跳转到该路由
              })
          }
      } else {
          next();
      }


 });



Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.use(ElementUI)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
