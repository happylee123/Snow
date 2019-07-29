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
            // console.log(data)
            fn(err,data)
        })
    },
    getExhibitionImg: function (from,fn) {
        // console.log(from)
        var sql1 = `
        SELECT second_body,img_src,price
        FROM product_t AS a
        INNER JOIN second_t AS b ON a.second_id = b.second_id
        INNER JOIN images_t AS c ON a.product_id = c.product_id
        WHERE main_head LIKE  "%from%"
        `;
        
        db.query(sql1,function (err,data) {
            // console.log(data)
            fn(err,data)
        })
    }
}


module.exports = json
