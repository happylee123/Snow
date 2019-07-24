const mysql = require('mysql');

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'web190',
    timezone : '08:00'
})

const json = {
    getBannerImg: function (fn) {
        var sql = `SELECT * FROM banner_t`
        db.query(sql,function (err,data) {
            console.log(data)
            fn(err,data)
        })
    }
}


module.exports = json
