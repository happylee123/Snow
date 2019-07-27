const express = require('express');
const myRouter = express.Router();
const A_controller=require('../controller/A-controller.js');


//展示收获信息
myRouter.get('/show',A_controller.show),
//添加收获地址
myRouter.get('/addmessage',A_controller.addmessage);


module.exports = myRouter;