//引入express
const express=require('express');
//搭建服务
const app=express();
//引入配置图标
 const favicon=require('serve-favicon');
//引入日志
const morgan=require('morgan');
//post映入
const bodyParse=require('body-parser');
//引入session
const cookie=require('cookie-parser');
//引入cookie
const session=require('express-session');

//使用cookie
app.use(cookie());
//配置session
app.use(session({
    secret:'demo',   //session的签名 秘钥
    resave:true, //覆盖 重新保存 当客户端，发送多个请求时，当一个请求在另一个请求结束时，覆盖session
    rolling:true,// 在每个seesion请求后重新计时
    saveUninitialized:true,  //初始化session是否保存
    cookie:{
        maxAge:24*60*60*1000  //设置过期时间  单位是毫秒
    }
}));

//配置静态文件访问目录
app.use(express.static(__dirname+'/public'));
//配置图标
 app.use(favicon(__dirname+'/public/favicon.ico'));


//配置日志
app.use(morgan('dev'));


//配置post
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended:false}));

//路由拦截


// app.all('*',function(req,res,next){
//     res.header('Access-Control-Allow-Origin','*');
//     res.header('Access-Control-Allow-Headers','X-Requested-With');
//     res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
//     res.header('X-Powered-By','3.2.1');
//     res.header('Content-Type','application/json;charset=utf-8');

//     next();
// })


//路由拦截
/*server.all('*',function (req,res,next) {
    if(req.session.user){
        next();
    }else{
        //进入登录页面，和在登录页面发送的请求都不能拦截
        if(req.url=='/login.html' || req.headers.referer=='http://localhost/login.html') {
            next();
        }else{
            res.redirect('/login.html');
        }
    }
});*/

//路由的拦截与使用
// const A_Router= require('./router/A-Router.js');
// app.use(A_Router);

// const B_Router= require('./router/B-Router.js');
// app.use(B_Router);

//----------------------------lee的路由
const C_Router= require('./router/C_loginrouter.js');
app.use(C_Router);

const carRouter= require('./router/F-carRouter.js');
app.use(carRouter);

const payRouter= require('./router/F-payRouter.js');
app.use(payRouter);

const orderRouter= require('./router/D-orderRouter.js');
app.use(orderRouter);

//配置端口号
app.listen(1818,function () {
    console.log('项目启动了')
});