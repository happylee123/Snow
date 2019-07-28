var express=require('express');
var orderRouter=express.Router();
var orderController=require('./../controller/D-orderController.js');


orderRouter.post('/Dorder',orderController.DgetOrder);     //查询所有订单
orderRouter.post('/C_deletorder',orderController.C_deletorder); 

orderRouter.post('/Dconfirm',orderController.DsureGoods);
orderRouter.post('/Dcloseorder',orderController.Dlosefirm);     //关闭订单
orderRouter.post('/DsearchOrder',orderController.DsearchOrder);     //查找订单（关键字）
orderRouter.post('/DgetPage',orderController.DgetPage);     //分页、获取页码
orderRouter.post('/DgetCon',orderController.DgetCon);     //分页、页面数据


module.exports=orderRouter;