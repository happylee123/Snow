var orderModule=require('./../module/D-orderMoudel.js');

var orderController= {
    DgetOrder: function (req, res) {
       
        orderModule.DgetOrder(req.session.userid, function (arr) {          
           res.send({error:0,data:arr})
        })

    },
    C_deletorder:function(req,res){
        let orderid=req.body.params.orderid
        orderModule.C_deletorder(orderid,function (err,data) {   
            if(!err){
                res.send({error:0})
            }else{
                res.send({error:1})
            }      
           
        })
        
    },
    DsureGoods:function (req,res) {
        orderModule.DsureGoods(req.session.userid,function (err, data) {
            if (err) {
                console.log('数据库错误:' + err)
            } else {
                // res.send({error: 0, data: data})
                orderModule.update(req.body.order_number,function (err,data) {
                    if (err) {
                        console.log('数据库错误:' + err)
                    }else {
                        res.send({error: 0})
                    }
                })
            }
        })
    },
    Dlosefirm:function (req, res) {
        orderModule.Dlosefirm(req.body.ordernum, function (err, data) {
            if (err) {
                console.log('数据库错误:' + err)
            } else {
                res.send({error: 0, data: data})
            }
        })

    },
    DsearchOrder:function (req, res) {
        orderModule.DsearchOrder(req.session.userid,req.body.con, function (err, data) {
            if (err) {
                console.log('数据库错误:' + err)
            } else {
                res.send({error: 0, data: data})
            }
        })

    },
    DgetPage:function (req, res) {
        orderModule.DgetPage(req.session.userid,function (err, data) {
            if (err) {
                console.log('数据库错误:' + err)
            } else {
                res.send({error: 0,num:Math.ceil(data[0].num/5)})
            }
        })

    },
    DgetCon:function (req, res) {
    orderModule.DgetCon(req.body.num,req.session.userid,function (err, data) {
        if (err) {
            console.log('数据库错误:' + err)
        } else {
            res.send({error: 0,data: data})
        }
    })

},
};

module.exports=orderController;