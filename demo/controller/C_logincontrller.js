const loginModule=require('../module/C_loginmodule.js')

var obj={
    login:function(req,res){

        // loginModule.login(req.query.tel,req.query.pass,function(err,data){
        //     if(err){
        //         console.log('数据库错误')
        //     }
        //     else{
        //       if(data.length){
        //           if(data[0].pass==req.query.pass){
        //               req.session.userId=data[0].user_id;
        //               console.log(data[0].user_id,req.session.userId)
        //               res.send({error:0,id:data[0].user_id})
        //           }else{
        //               res.send({error:1})//密码错误
        //           }
        //       }else{
        //           res.send({error:2})//账号不存在
        //       }
        //     }
        // })
        loginModule.login()
}
}

module.exports=obj;