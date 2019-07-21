import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('./views/C_login.vue'),
    },
    {
      path:"/index",
      name:'index',
      component: () => import('./views/index.vue'),
      children:[
        {path:'/',
        name:'Home',
        component: () => import('./views/Home.vue')
      },
      {
        path: '/bcommodity',
        name: 'bcommodity',
        component: () => import('./views/BCommodity.vue'),
      },
      {
        path: '/bdetails',
        name: 'bdetails',
        component: () => import('./views/Bdetails.vue')
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
        path: '/about',
        name: 'about',
        component: () => import( './views/About.vue')
      }
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('./views/C_cart.vue'),
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('./views/C_order.vue'),
    },
    {
      path: '/compelet',
      name: 'compelet',
      component: () => import('./views/C_compelet.vue'),
    },
    {
      path: '/pay',
      name: 'pay',
      component: () => import('./views/C_pay.vue'),
    }
  ]
})
