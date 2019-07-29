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
    },
    getExhibitionImg: function(req,res){
        var from = req.query.exhibitionImg;
        // console.log(json)
        B_module.getExhibitionImg(from,function (err,data) {
            if(err){
                console.log('数据查询失败'+err)
            }else{
                console.log("数据获取成功")
                // console.log(data)
                res.send({error: 0,msg: data})
            }
        })
    },
}



module.exports = json










module.exports = json;