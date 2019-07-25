var express=require("express");
var router=express.Router();

// 引入控制层
var f_carController=require('../controller/F-carController');

//产品列表页
router.post('/F_car_productlis',f_carController.F_car_productlis);






module.exports=router