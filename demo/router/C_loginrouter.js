const express = require('express');
const myRouter = express.Router();
const C_logincontrller=require('../controller/C_logincontrller.js');

//登录注册
myRouter.get('/login',C_logincontrller.login)

module.exports=myRouter;