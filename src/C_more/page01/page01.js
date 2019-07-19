import Vue from 'vue'
import Page01 from './page01.vue'
import router from './router'

import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../../assets/base.css';
import  '../../assets/css/pub.css'

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.use(ElementUI)

new Vue({
    router,
    render: h => h(Page01)
}).$mount('#app');