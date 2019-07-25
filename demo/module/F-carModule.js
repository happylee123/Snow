var mysql=require("mysql");

var db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"web190"
})


var json={
    F_car_productlis:function(id,fn){
       var sql=`SELECT * 
       FROM shoppingcart_table AS a 
            JOIN 
            produc_table AS b 
            ON  a.product_id=b.product_id
            JOIN
            merchandisepictures_table AS c
            ON b.picture_id=c.picture_id    
            JOIN 
            specification_table AS d
            ON b.specification_id=d.specification_id
       WHERE a.user_id=${id}`
        db.query(sql,function(err,data){
            fn(err,data)
        })
        
    }
}


module.exports=json;