import Vue from 'vue'
import VueRouter from 'vue-router'
import Page01 from './page01.vue'
import headeree from '../../components/C_header'

Vue.use(VueRouter);

const routes = [
    {
        path: '/page1',
        name: 'page1',
        components:{
          Page01
        }
    },
    {
        path: '/aa',
        name: 'aa',
        component:headeree
    }
];

export default new VueRouter({
    routes: routes
})
