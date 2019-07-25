var f_carModule=require("../module/F-carModule")

var json={
    F_car_productlis:function(req,res){
        var userid= req.body.userid
        f_carModule.F_car_productlis(userid,function(err,data){
              if(!err){
                  res.send({error:0,data:data})
              }else{
                  console.log(err)
                  res.send({error:1,data:err})
              }
        })
    }
}

module.exports=json;
