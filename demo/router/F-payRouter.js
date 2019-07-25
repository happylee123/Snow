var express=require("express");
var router=express.Router();

// 引入控制层
var f_payController=require('../controller/F-payController');


router.post('/F_address',f_payController.F_address);






module.exports=router