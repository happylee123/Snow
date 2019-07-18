import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/reaction',
      name: 'reaction',
      //component: () => import( './views/Commodity.vue')
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
