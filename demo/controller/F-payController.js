var f_payModule=require("../module/F-payModule")

var json={
    F_address:function(req,res){
        f_payModule.F_address(function(err,data){
            if(!err){
                res.send(data)
            }else{
                res.send(err)
            }
        })
    }
}

module.exports=json;
