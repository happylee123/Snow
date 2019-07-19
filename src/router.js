import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Bsummary from "./components/Bsummary.vue";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/bcommodity',
      name: 'bcommodity',
      component: () => import('./views/BCommodity.vue'),
    },
    { //商品详情页
      path: '/bdetails',
      name: 'bdetails',
      component: () => import('./views/Bdetails.vue'),
      children: [
        {
          //规格
          path: "/bsummary",
          name: "bsummary",
          component: Bsummary
          // component: () => import('./components/Bsummary.vue')
        },
        {
          //  详情参数
          path: "/bparameter",
          name: "bparameter",
          component: () => import("./components/Bparameter.vue")
        },
        {
          //  用户评论
          path: "/bcomment",
          name: "bcomment",
          component: () => import("./components/Bcomment.vue")
        }
      ]
    },
    {
      path:'/microsheet',
      name: 'reaction',
      //component: () => import( './views/reaction.vue')
    },
    {
      path:'/lens',
      name: 'lens',
      //component: () => import( './views/lens.vue')
    },
    {
      path:'/study',
      name: 'study',
      //component: () => import( './views/study.vue')
    },
    
    {
      path: '/C_Backstage',
      name: 'C_Backstage',
      component: () => import( './views/C_Backstage.vue')
    }
  ]
})
