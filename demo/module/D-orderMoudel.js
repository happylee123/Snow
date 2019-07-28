var mysql=require('mysql');
var db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'web190',
    timezone : "08:00"
});


var orderModule= {
    DgetOrder: function (Did, fn) {
        var sql = `SELECT DISTINCT order_num 
         FROM order1_t 
        JOIN product_t ON order1_t.product_id=product_t.product_id 
        JOIN model1_t ON product_t.model_id=model1_t.model_id 
        JOIN images_t ON product_t.product_id=images_t.product_id 
        JOIN second_t ON product_t.second_id=second_t.second_id
         WHERE user_id=${Did}
         ORDER BY order_id DESC`;
        
        db.query(sql, function (err, data) {
           let arr=[];
           let num=0;

            for (let i = 0; i < data.length; i++) {
                var sql=`SELECT *
                FROM order1_t 
                JOIN product_t ON order1_t.product_id=product_t.product_id 
                JOIN model1_t ON product_t.model_id=model1_t.model_id 
                JOIN images_t ON product_t.product_id=images_t.product_id 
                JOIN second_t ON product_t.second_id=second_t.second_id 
                WHERE order_num=${data[i].order_num}`

                db.query(sql,function(err,resdata){
                    if(!err){
                        num++;
                        arr.push({
                            res:resdata,
                            order_num:resdata[0].order_num,
                            state:resdata[0].state,
                            buy_time:resdata[0].buy_time
                        })
                        console.log(arr)
                    }else{
                        console.log('错误')
                    }
                    console.log(data.length)
                    if(num==data.length){
                        fn(arr)
                    }
                })
               
            }
            
           
           
        })
    },
    DsureGoods:function (Did,fn) {
        var sql = `SELECT * FROM order1_t WHERE user_id=${Did}`;
        db.query(sql, function (err, data) {
                // console.log(data)
                fn(err, data)
            })
    },
    update:function (Dnum,fn) {
        var sql=`UPDATE order1_t SET state=5 WHERE order_num=${Dnum}`;
        db.query(sql, function (err, data) {
            // console.log(data)
            fn(err, data)
        })
    },
    Dlosefirm:function (Dnum,fn) {
        var sql=`UPDATE order1_t SET state=7 WHERE order_num=${Dnum}`;
        db.query(sql, function (err, data) {
            // console.log(data)
            fn(err, data)
        })
    },
    DsearchOrder:function (Did,Dcon,fn) {
        var sql=`SELECT * FROM order1_t JOIN product_t ON order1_t.product_id=product_t.product_id JOIN model1_t ON product_t.model_id=model1_t.model_id JOIN images_t ON product_t.product_id=images_t.product_id JOIN second_t ON product_t.second_id=second_t.second_id WHERE user_id=${Did} and main_head like '%${Dcon}%'`;
        db.query(sql, function (err, data) {
            // console.log(data)
            fn(err, data)
        })
    },
    DgetPage:function (id,fn) {
        var sql=`select count(1) as num from order1_t where user_id='${id}' `;
        db.query(sql, function (err, data) {
            // console.log(data)
            fn(err, data)
        })
    },
    DgetCon:function (num,id,fn) {
        var sql=`SELECT * FROM order1_t JOIN product_t ON order1_t.product_id=product_t.product_id JOIN model1_t ON product_t.model_id=model1_t.model_id JOIN images_t ON product_t.product_id=images_t.product_id JOIN second_t ON product_t.second_id=second_t.second_id where user_id="${id}" limit ${(num-1)*5},5`;

        db.query(sql, function (err, data) {
            // console.log(data)
            fn(err, data)
        })
    },
    C_deletorder:function (orderid,fn) {
        var sql=`DELETE FROM order1_t WHERE order_num=${orderid}`;

        db.query(sql, function (err, data) {
            fn(err, data)
        })
    },

};

module.exports=orderModule;