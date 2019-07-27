const express = require('express');
const myRouter = express.Router();
const B_Controller=require('../controller/B-Controller.js');


//banner 图的请求
myRouter.get('/getBannerImg',B_Controller.getBannerImg);
//下方展示区域的img 请求
myRouter.get('/getExhibitionImg',B_Controller.getExhibitionImg);




//子选项赛选功能
myRouter.get('/getChild1Send',function (req,res) {
    var json = req.query;
    console.log('子选项1',json);
    res.send('成功1')
})
myRouter.get('/getChild2Send',function (req,res) {
    var json = req.query;
    console.log('子选项2',json);
    res.send('成功2')
})
myRouter.get('/getChild3Send',function (req,res) {
    var json = req.query;
    console.log('子选项3',json)
    res.send('成功3')
})



module.exports = myRouter;

