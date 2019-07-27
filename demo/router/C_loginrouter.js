const express = require('express');
const myRouter = express.Router();
const C_logincontrller=require('../controller/C_logincontrller.js');

//登录 验证用户名和密码是否正确
myRouter.post('/C_login',C_logincontrller.login),

//注册 验证用户名是否存在
myRouter.post('/existsUser',C_logincontrller.existsUser),

//添加用户
myRouter.post('/adduser',C_logincontrller.adduser);


//修改密码
myRouter.post('/apdatepass',C_logincontrller.apdatepass)

//通过手机号查找到用户
myRouter.post('/finduser',C_logincontrller.finduser)


//首页加载时查找用户
myRouter.post('/username',C_logincontrller.username)

//退出登录
myRouter.post('/C_exit',C_logincontrller.C_exit)


module.exports=myRouter;