var mysql=require("mysql");

var db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"web190",
    timezone : "08:00"
})


var json={
    F_car_productlis:function(id,fn){
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
       WHERE a.user_id=${id}`
        db.query(sql,function(err,data){
            fn(err,data)
        })
        
    },
     F_car_remove_ss:function(ids,fn){
        var id=ids.join(",");

        var sql=`DELETE FROM shoppingcart_t WHERE cart_id IN(${id})`
        db.query(sql,function(err,data){
            fn(err,data)
        })
       
       
     
     },
     F_howmuch:function(id,fn){
        var sql=`SELECT *  
        FROM  product_t AS a
              JOIN 
              second_t AS b
              ON a.second_id=b.second_id
        WHERE a.product_id=${id}`
        db.query(sql,function(err,data){
            fn(err,data)
        })
       
       
     
     },
     F_savenumber:function(id,number,fn){
        var sql=`UPDATE  shoppingcart_t SET cart_num=${number} WHERE cart_id=${id}`
        db.query(sql,function(err,data){
            fn(err,data)
        })

     }
}


module.exports=json;