var express=require("express");
var router=express.Router();

// 引入控制层
var f_payController=require('../controller/F-payController');

//地址
router.post('/F_address',f_payController.F_address);
//订单列表信息
router.post('/F_orderlist',f_payController.F_orderlist);
//提交订单
router.post('/F_save_orderlist',f_payController.F_save_orderlist);

//-------------------------订单处理
//查询订单
router.post('/order/F_watch_order',f_payController.F_watch_order);






module.exports=router