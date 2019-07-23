var db=require("mysql");

db.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'web190'
})


var obj={
    login:function(){
        console.log("jlkjlkj")
       
    }
}

module.exports=obj;