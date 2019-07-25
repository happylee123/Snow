var mysql=require("mysql");

var db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"web190"
})


var json={
    F_address:function(fn){
        var sql=`SELECT * FROM receiving_address `
        db.query(sql,function(err,data){
            fn(err,data)
        })
        
    }
}


module.exports=json;