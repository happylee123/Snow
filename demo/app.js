//引入express
const express=require('express');
//引入配置图标
const favicon=require('serve-favicon');
//引入日志
const morgan=require('morgan');
//post映入
const bodyParse=require('body-parser');
const mysql=require('mysql');
//搭建服务
const app=express();
//配置静态文件访问目录
app.use(express.static(__dirname+'/public'));
//配置图标
app.use(favicon(__dirname+'/public/favicon.ico'));
//配置日志
app.use(morgan('dev'));


//配置post
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:false}));

// app.all('*',function(req,res,next){
//     res.header('Access-Control-Allow-Origin','*');
//     res.header('Access-Control-Allow-Headers','X-Requested-With');
//     res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
//     res.header('X-Powered-By','3.2.1');
//     res.header('Content-Type','application/json;charset=utf-8');

//     next();
// })
//路由的拦截与使用
const A_Router= require('./router/A-Router.js');
app.use(B_Router);

const B_Router= require('./router/B-Router.js');
app.use(B_Router);

const C_Router= require('./router/C-Router.js');
app.use(B_Router);

//配置端口号
app.listen(1314,function () {
    console.log('项目启动了')
});