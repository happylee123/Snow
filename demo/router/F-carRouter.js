var express=require("express");
var router=express.Router();

// 引入控制层
var f_carController=require('../controller/F-carController');

// 或者 产品列表渲染啊
router.post('/F_car_productlis',f_carController.F_car_productlis);

//删除产品
router.post('/F_car_remove_ss',f_carController.F_car_remove_ss);


//查询库存
router.get('/F_howmuch',f_carController.F_howmuch);

//保存购物车每个产品加购的数量
router.post('/F_savenumber',f_carController.F_savenumber);





module.exports=router