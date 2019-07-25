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
    F_save_orderlist:function(user_id,product_ids,order_num,date,product_num_str,address_id,text,sumprice,fn){
        if(product_ids.length==1){
            var sql=`INSERT INTO order1_t
                     VALUES (NULL,'${user_id}','${parseInt(product_ids)}','${order_num}','${date}','${parseInt(product_num_str)}','1',NULL,NULL,NULL,NULL,'${address_id}','${text}','${sumprice}'); `
            db.query(sql,function(err,data){
                fn(err,data)
            })
        }else if(product_ids.length>1){
            for (let i = 0; i < product_ids.length; i++) {
                var sql=`INSERT INTO order1_t
                         VALUES (NULL,'${user_id}','${parseInt(product_ids[i])}','${order_num}','${date}','${parseInt(product_num_str[1])}','1',NULL,NULL,NULL,NULL); `
                db.query(sql,function(err,data){
                    fn(err,data)
                })
                
            }
        }
        
        
        
    },
    F_watch_order:function(order_id,user_id,fn){
        
        var sql=`SELECT * 
        FROM order1_t AS a
             JOIN address_t AS b
             ON a.address_id=b.address_id
             JOIN product_t AS c
             ON a.product_id=c.product_id
        WHERE a.order_id=${order_id} AND a.user_id=${user_id}`
        db.query(sql,function(err,data){
            fn(err,data)
        })
        
    }
}


module.exports=json;