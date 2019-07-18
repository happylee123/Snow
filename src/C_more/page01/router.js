import Vue from 'vue'
import VueRouter from 'vue-router'
import Page1 from './Page01.vue'


Vue.use(VueRouter);

const routes = [
    {
        path: '/page1',
        name: 'page1',
        components:{
          Page1
        }
    }
];

export default new VueRouter({
    routes: routes
})
