import Vue from 'vue'
import Router from 'vue-router'
import Bsummary from "./components/Bsummary.vue";


Vue.use(Router)

export default new Router({
  routes: [
    {//登录
      path: '/',
      name: 'login',
      component: () => import('./views/C_login.vue'),
    },
    {//注册
      path: '/register',
      name: 'register',
      component: () => import('./views/C-register.vue'),
    },
    {
      //忘记密码
      path: '/forget',
      name: 'forget',
      component: () => import('./views/C_forget.vue'),
    },
    {
      //修改密码
      path: '/changepass',
      name: 'changepass',
      component: () => import('./views/C_changepass.vue'),
    },
    {//首页
      path: '/index',
      name: 'index',
      meta:{
        requireAuth:true
      },
      component: () => import('./views/index.vue'),
      children:[
        {//首页
        path: '/',
        name: 'Home',
        component: () => import('./views/Home.vue'),
      },
      {//单反
        path: '/bcommodity',
        name: 'bcommodity',
        component: () => import('./views/BCommodity.vue'),
      },
      {//微单
        path:'/microsheet',
        name: 'reaction',
        //component: () => import( './views/reaction.vue')
      },
      {//镜头
        path:'/lens',
        name: 'lens',
        //component: () => import( './views/lens.vue')
      },
      {//学习教程
        path:'/A_study',
        name: 'study',
        component: () => import( './views/A_study.vue')
      },
      { //商品详情页---------------------------------------------------//老赵路由
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
        //  用户评论
        path: "/about",
        name: "about",
        component: () => import("./views/About.vue")
      }
     ]
    }
    ,
    {
      path: '/cart',
      name: 'cart',
      meta:{
        requireAuth:true
      },
      component: () => import('./views/C_cart.vue'),
    },
    {
      path: '/order',
      name: 'order',
      meta:{
        requireAuth:true
      },
      component: () => import('./views/C_order.vue'),
    },
    {
      path: '/compelet',
      name: 'compelet',
      meta:{
        requireAuth:true
      },
      component: () => import('./views/C_compelet.vue'),
    },
    {
      path: '/pay',
      name: 'pay',
      meta:{
        requireAuth:true
      },
      component: () => import('./views/C_pay.vue'),
    },
    {//个人中心
      path: '/personIndex',
      name: 'personIndex',
      meta:{
        requireAuth:true
      },
      component: () => import('./views/C-personIndex.vue'),
      children:[
        {//个人中心详情
          path: '/',
          name: 'peopel',
          component: () => import('./views/C_people.vue'),
        },
        {//我的订单
          path: '/orderlist',
          name: 'orderlist',
          component: () => import('./views/C_orderList.vue'),
        }
        ,
        {//我的评价
          path: '/evaluate',
          name: 'evaluate',
          component: () => import('./views/B_evaluate.vue'),
        },
         {//售后服务
          path: '/aftersale',
          name: 'aftersale',
          component: () => import('./views/A_aftersale.vue'),
        },
         {//地址
          path: '/address',
          name: 'address',
          component: () => import('./views/A_address.vue'),
        }
      ]
    }
  ]
});


