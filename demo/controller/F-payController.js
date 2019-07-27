var f_payModule=require("../module/F-payModule")

var json={
    F_address:function(req,res){
        var user_id=req.session.userid;
        f_payModule.F_address(user_id,function(err,data){
            if(!err){
                res.send({error:0,data:data})
            }else{
                res.send({error:0,err:err})
            }
        })
    },
    F_orderlist:function(req,res){
        var ids=JSON.parse(req.body.params.id).join(",") ;
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
        let info=JSON.parse(req.body.params.info);
        //--------------获取参数
        let ids=[];
        let ordernums=[];
        let buytime=[];   
        //用户id
        let id=req.session.userid;
        //时间轴订单号
        let ordernumber=Date.now();
        //下单日期
        var myDate = new Date();  
        let downdate=myDate.getFullYear()+'-'+ myDate.getMonth()+'-'+myDate.getDate()+' '+myDate.getHours()+':'+ myDate.getMinutes()+':'+myDate.getSeconds();
        for (let i = 0; i < info.price.length; i++) {
            ids.push(id);
            ordernums.push(ordernumber);
            buytime.push(downdate)
             
        } 


        //产品id
        let proids=info.product_ids;
        //购买数量
        let paynumber=info.paynumber;
        //订单金额
        let price=info.price;
        //订单状态
        let state=info.state;
        //收货地址
        let  relname=info.relname;
        let  retel=info.retel;
        let  adress=info.adress;
        //订单备注
        let beizhu=info.beizhu;

        let objinfo={
            ids:ids,
            proids:proids,
            ordernums:ordernums,
            buytime:buytime,
            paynumber:paynumber,
            price:price,
            beizhu:beizhu,
            state:state,
            adress:adress,
            relname:relname,
            retel:retel
        }
        console.log(ordernums,buytime);
        var is=0;
        f_payModule.F_save_orderlist(objinfo,function(err,data){
            if(!err){
                is++;
                console.log(is)
                console.log("保存成功");
                              
                if(is==info.product_ids.length){
                    res.send({error:0,data:data.insertId})
                    console.log(data)
                }
            console.log(data)
            }else{
                console.log(err)
                res.send({error:1,data:err})
            }           
        })
        
        
    },
    F_watch_order:function(req,res){
        var order_id=req.body.params.order_id ;
        console.log(order_id)
        f_payModule.F_watch_order(order_id,function(err,data){
            if(!err){
                res.send({error:0,data:data})
            }else{
                res.send({error:1,err:err})
            }
        })
    }
}

module.exports=json;
