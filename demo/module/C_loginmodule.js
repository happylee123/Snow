var mysql=require("mysql");

var db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'web190'
})


var obj={
    login:function(username,pass,fn){
        //console.log("jlkjlkj")
        let sql=`SELECT user_id FROM user_t WHERE user_name='${username}' and pass='${pass}'`
        db.query(sql,function(err,data){
           fn(err,data)
        }) 
    },
    existsUser:function(username,fn){
        let sql=`SELECT COUNT(1) FROM user_t WHERE user_name='${username}'`
        db.query(sql,function(err,data){
           fn(err,data)
        }) 
    },
    adduser:function(name,phone,pass,fn){
        let sql=`INSERT INTO user_t VALUE(NULL,'${name}','${phone}','${pass}',DEFAULT)`
        db.query(sql,function(err,data){
           fn(err,data)
        }) 
    },
    apdatepass:function(userid,pass,fn){
        let sql=`UPDATE user_t SET pass='${pass}' WHERE user_id=${userid}`
        db.query(sql,function(err,data){
           fn(err,data)
        }) 
    },
    finduser:function(phone,fn){
        let sql=`SELECT user_id FROM user_t WHERE phone=${phone}`
        db.query(sql,function(err,data){
           fn(err,data)
        }) 
    }
}

module.exports=obj;