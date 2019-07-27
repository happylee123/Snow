var mysql=require("mysql");

var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'1',
    database:'web190'
})

// connection.connect();
 
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

var json = {
    show: function(fn){
        var sql =`SELECT * FROM user_t`
        connection.query(sql,function(err,data){
            fn(err,data)
        })
    },
    addmessage: function(fn){
        var sql =`INSERT INTO user_t VALUE('${name}','${phone}','${pass}')`
        connection.query(sql,function(err,data){
            fn(err,data)
        })
    },
}


module.exports = json