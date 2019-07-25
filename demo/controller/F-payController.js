var f_payModule=require("../module/F-payModule")

var json={
    F_address:function(req,res){
        var user_id=req.body.user_id
        f_payModule.F_address(user_id,function(err,data){
            if(!err){
                res.send({error:0,data:data})
            }else{
                res.send({error:0,err:err})
            }
        })
    },
    F_orderlist:function(req,res){
        var ids=JSON.parse(req.body.id).join(",") ;
        console.log(ids)
        f_payModule.F_orderlist(ids,function(err,data){
            if(!err){
                res.send({error:0,data:data})
            }else{
                res.send({error:1,err:err})
            }
        })
    },
    F_save_orderlist:function(req,res){
        var address_id=req.body.address_id;
        var product_ids=req.body.product_ids.split(",");
        var product_single_price=req.body.product_single_price.split(",");
        var product_num_str=req.body.product_num_str.split(",");
        var product_small_price=req.body.product_small_price.split(",");
        var big_price=req.body.big_price.split(",");
        var sunfei=req.body.sunfei.split(",");
        var sumprice=req.body.sumprice.split(",");
        var text=req.body.text.split(",");
        var user_id=req.body.user_id

        var time=new Date();
        var year=time.getFullYear();
        var mouth=time.getMonth();
        if(mouth.toString.length==1){
            mouth="0"+mouth
        }
        var day=time.getDate();

        var order_num=''+year+mouth+day+'';
        var date=year+"-"+mouth+"-"+day;
        //console.log(order_num,date);

        var is=0;
        f_payModule.F_save_orderlist(user_id,product_ids,order_num,date,product_num_str,address_id,text,sumprice,function(err,data){
            if(!err){
                is++;
                console.log(is)
                console.log("保存成功");
               // console.log(data)               
                if(is==product_ids.length){
                    res.send({error:0,data:data.insertId})
                }
            }else{
                console.log(err)
                res.send({error:1,data:err})
            }           
        })
        
        
    },
    F_watch_order:function(req,res){
        var order_id=req.body.order_id ;
        var user_id=req.body.user_id
        console.log(order_id)
        f_payModule.F_watch_order(order_id,user_id,function(err,data){
            if(!err){
                res.send({error:0,data:data})
            }else{
                res.send({error:1,err:err})
            }
        })
    }
}

module.exports=json;
