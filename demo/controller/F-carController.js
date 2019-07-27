var f_carModule=require("../module/F-carModule")

var json={
    F_car_productlis:function(req,res){
        var userid= req.session.userid;
        f_carModule.F_car_productlis(userid,function(err,data){
              if(!err){
                  res.send({error:0,data:data})
              }else{
                  console.log(err)
                  res.send({error:1,data:err})
              }
        })
        console.log(userid)
    },
    F_car_remove_ss:function(req,res){
       var id= JSON.parse(req.body.params.id);
       let num=0;
       console.log(id,num)
       f_carModule.F_car_remove_ss(id,function(err,data){
             if(!err){
                 num++
                 if(num==id.length){
                    res.send({error:0})
                 }         
             }else{
                 res.send({error:1})
             }
       })
       
  
     
    },
    F_howmuch:function(req,res){
        var id= req.body.params.id;
        f_carModule.F_howmuch(id,function(err,data){
             if(!err){
                 res.send({error:0,data:data})
             }else{
                res.send({error:1,data:err})
             }
        })
        
      
    },
    F_savenumber:function(req,res){
        var cartid=req.body.params.cartid;
        var number=req.body.params.number;
        console.log(cartid,number)
        f_carModule.F_savenumber(cartid,number,function(err,data){
             if(!err){
                 res.send({error:0})
             }else{
                res.send({error:1,data:err})
             }
        })
        
      
    }
 

}

module.exports=json;
