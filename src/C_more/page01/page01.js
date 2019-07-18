import Vue from 'vue'
import Page1 from './Page01.vue'
import router from './router'


new Vue({
    router,
    render: h => h(Page1)
}).$mount('#app');