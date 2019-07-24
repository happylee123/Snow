const B_module=require('./../module/B-module.js');

let json = {
    getBannerImg: function (req,res) {
        B_module.getBannerImg(function(err,data){
            if(err){
                console.log('数据库查询失败'+err)
                res.send({error: 1,msg: err})
            }else{
                console.log('成功');
                res.send({error: 0,msg: data})
            }
        })
    }
}



module.exports = json










module.exports = json;