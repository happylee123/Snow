var mysql=require("mysql");

var db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"web190",
    timezone : "08:00"
})


var json={
    F_address:function(id,fn){
        var sql=`SELECT * FROM address_t WHERE user_id=${id} `
        db.query(sql,function(err,data){
            fn(err,data)
        })
        
    },
    F_orderlist:function(id,fn){
        
        var sql=`SELECT * 
       FROM shoppingcart_t AS a 
            JOIN 
            product_t AS b 
            ON  a.priduct_id=b.product_id
            JOIN
            images_t AS c
            ON b.product_id=c.product_id
            JOIN 
            second_t AS d
            ON b.second_id=d.second_id
       WHERE a.cart_id in(${id})`
        db.query(sql,function(err,data){
            fn(err,data)
        })
        
    },
    F_save_orderlist:function(objinfo,fn){
 
    for (let i = 0; i < objinfo.ids.length; i++) {
        var sql=`INSERT INTO order1_t VALUES 
        (NULL,${objinfo.ids[i]},${objinfo.proids[i]},'${objinfo.ordernums[i]}','${objinfo.buytime[i]}',
        ${objinfo.paynumber[i]},'${objinfo.price[i]}',
        '${objinfo.beizhu[i]}',${objinfo.state[i]},NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,
        '${objinfo.adress[i]}','${objinfo.relname[i]}','${objinfo.retel[i]}');`
        db.query(sql,function(err,data){
            fn(err,data)
        })
        
    }
        
        
        
        
    },
    F_watch_order:function(order_id,fn){
        var sql1=`
        SELECT order_num FROM order1_t
        WHERE order_id=${order_id}
        `
        
        db.query(sql1,function(err,data){
            let order_num=data[0].order_num;
            console.log(order_num)
            var sql=`SELECT order_id,user_id,order_num,order_price,number,re_address,re_name,re_tel,p.main_head
            FROM order1_t AS o  
                JOIN product_t AS p
                ON o.product_id=p.product_id  
            WHERE o.order_num='${order_num}'`
             db.query(sql,function(err,data){
                
                fn(err,data)
             })
           
        })
        
    }
}


module.exports=json;