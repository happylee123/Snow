const A_module=require('./../module/A-module.js');
let json = {
    show: function (req,res) {
        A_module.show(function(err,data){
            if(err){
                console.log('数据库查询失败'+err)
                res.send({error: 1,msg: err})
            }else{
                console.log('成功');
                res.send({error: 0,msg: data})
            }
        })
    },
}



module.exports = json