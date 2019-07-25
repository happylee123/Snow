const loginModule=require('../module/C_loginmodule.js')

var obj={
    login:function(req,res){
        let username=req.body.params.name;
        let pass=req.body.params.pass;
        
        loginModule.login(username,pass,function(err,data){
           if(!err){
            if(data.length==0){
                res.send({error:1})
            }else{
                //添加session
                req.session.userid=data[0].user_id;
                res.send({error:0});
            }
           }else{
             res.send('数据库连接失败')
           }
        })
       
    },
    existsUser:function(req,res){
        let user=req.body.parmas.name;
     
        loginModule.existsUser(user,function (err,data) {  
            if(!err){
                console.log(data[0]['COUNT(1)'])
                if(!data[0]['COUNT(1)']){
                    res.send({error:0})
                }else{
                    res.send({error:1})
                }
              }else{
                res.send('数据库连接错误')
              }
        })
        
    },
    adduser:function(req,res){
        let user=req.body.parmas.name;
        let phone=req.body.parmas.phone;
        let pass=req.body.parmas.pass;
       
         
        loginModule.adduser(user,phone,pass,function(err,data){
            if(!err){
                if(data.protocol41){
                    res.send({error:0})
                }else{
                    res.send({error:1,data:data})
                }
            }else{
                console.log('数据库连接失败')
                res.send({error:1,data:data})
            }
        })
        
    },
    apdatepass:function(req,res){
        let userid=req.body.parmas.userid;
        let pass=req.body.parmas.pass;

        loginModule.apdatepass(userid,pass,function(err,data){
            if(!err){
                if(data.protocol41){
                    res.send({error:0})
                }else{
                    res.send({error:1,data:data})
                }
            }else{
              res.send({error:1,data:data})
            }
        })
        
    },
    finduser:function(req,res){
        let phone=req.body.params.phone;

                
        loginModule.finduser(phone,function(err,data){
            if(!err){
               if(data.length){
                   res.send({error:0,data:data[0].user_id});
               }else{
                   res.send({error:1});
               }
            }else{
                console.log({error:1,data:'数据库错误'})
            }
        })
        
    }
}

module.exports=obj;