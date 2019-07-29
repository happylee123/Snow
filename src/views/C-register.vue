<template>
   <div class="register">
       <div>
    <div class="d1">
        <div class="d2">注册账号</div>
        <div>

            <span class="iconfont icon-xingmingyonghumingnicheng" aria-hidden="true"></span>
            <input type="text" class="ipt1 pubinput " placeholder="用户名"  v-model="text.username" @blur="Musernameexists" @input="Musernameexists" >
            <div class="div1" v-show="is.username">{{wron.username}}</div>
        </div>
        <div class="div5"></div>
        <div>
            <span class="iconfont icon-group48"></span>
            <input type="text"  class="ipt2 in1 pubinput " placeholder="手机号" v-model="text.phone" @blur="phone"  @input="phone">
            <div class="div2" v-show="is.phone">{{wron.phone}}</div>
        </div>
        <div class="d3">
        <div class="d4" >
            <span class="glyphicon glyphicon-comment"></span>
            <input type="text"  class="reg-ipt " placeholder="请输入短信验证码" v-model="text.messge">
             <div class="reg-div1" id='reg-div1' v-show="is.messge">{{wron.messge}}</div>
        </div>
            <button class="btn1" :style="[sty]" @click="Myzbtn" :disabled='disbtn'>{{yztext}}</button>
        </div>
        <div>
            <span class="iconfont icon-mima"></span>
            <input type="password"   class="ipt3 in1 pubinput " placeholder="密码" v-model="text.pass" @blur="password" @input="password">
            <div class="div3" v-show="is.pass">{{wron.pass}}</div>
        </div>
        <div class="div6"></div>
        <div>
            <span class="iconfont icon-iconfontmima1"></span>
            <input type="password"   class="ipt4 in1 pubinput " placeholder="重复密码" v-model="text.confpass"  @blur="isconfpass"  @input="isconfpass">
            <div class="div4" v-show="is.confpass">{{wron.confpass}}</div>
        </div>
       <div class="d5">
        <input type="checkbox" class="reg-ipt1" :checked='ischeckd' @click="clause">
        <span :id="isxing">*</span>
        <span>我已阅读并同意遵守<a class="lay">法律声明</a >和<a class="self">隐私条款</a></span>
        </div>
        <button type="button" class="btn btn-primary" @click="register">注册</button>
        <p>如果您已拥有账号，则可在此 <router-link to="/login" id="loginbtn">登陆</router-link></p>
    </div>

</div>
   </div>
</template>

<script>
export default {
    name:"register",
     data(){
   return {
     text:{
        username:"",
        phone:'',
        messge:'',
        pass:'',
        confpass:''
     },
     wron:[{
        username:"",
        phone:'',
        messge:'',
        pass:'',
        confpass:''
     }],
     checkword:{
       username:['不能为空','请输入字母开头至少8-12位，包括（字母、数字）'],
       phone:['不能为空','请输入正确的电话号码'],
       messge:['不能为空','验证码错误'],
       pass:['不能为空','请输入字母开头至少8-12位，包括（字母、数字）'],
       confpass:['不能为空','请输入字母开头至少8-12位，包括（字母、数字）']
     },
     is:{
        username:false,
        phone:false,
        messge:false,
        pass:false,
        confpass:false
     },
     reg:{
        username:/^(?![^a-zA-Z]+$)(?!D+$).{6,12}$/,
        phone:/^1[3|4|5|8][0-9]\d{4,8}$/,
        pass:/^(?![^a-zA-Z]+$)(?!D+$).{6,12}$/,
        confpass:/^(?![^a-zA-Z]+$)(?!D+$).{6,12}$/,

     },
     isor:false,  //用户名验证时使用的中间键
     ischeckd:false,  //条款选择
     isxing:'' ,    //星星类的杨思显示
     sty:{
              'color':'#fff',
               'background-color': '#0a83d7'
      },
      yztext:'获取验证码',
      disbtn:false
   }
 },
 methods:{
   //验证封装
   fn(name,fn){
     if(!this.text[name].trim()){
       this.is[name]=true;      //是否显示错误提示
       this.wron[name]=this.checkword[name][0];  //错误提示的内容
       //this.isor[name]=false;               //返回一个false
       return false;
     }
     if(!this.reg[name].test(this.text[name])){
       this.is[name]=true;    
       this.wron[name]=this.checkword[name][1];
       //this.isor[name]=false;
       return false;
     }else{
        return fn()
     }  
   },
   //验证用户名
   Musername(){
     /** 
     if(!this.text.usernametext.trim()){
       this.is.isuser=true;
       this.wron.Uwron="不能为空";
       return false;
     }
     if(!this.reg[0].username.test(this.text.usernametext)){
       this.is.isuser=true;
       this.wron.Uwron="请输入字母开头至少8-12位，包括字母、数字";
       return false;
     }else{
       //----------------------发起axios请求
        this.is.isuser=false;
         return true;
     }  
    */
    let that=this;
     this.fn('username',function(){
        that.is.username=false;
        return true;
     })
  
   },
   Musernameexists(){
       let that=this;
       this.fn('username',function(){  
          //------------------------发送axios请求,验证用户名和密码是否正确
         that.$axios.post('/api/existsUser',{
             parmas:{
                name:that.text.username
            }
          }).then(function(res){
            let data=res.data.error
            if(data){
               that.is.username=true;
               that.wron.username='用户名已经存在';
               that.isor=false;
            }else{
               that.is.username=false;
               that.wron.username='';
               that.isor=true;
            }
          });
    
        })
   },
   //验证电话号码
   phone(){
     let that=this;
      this.fn('phone',function(){
        that.is.phone=false;
        return true;
     })
   },
   //验证密码
   password(){
      let that=this;
      this.fn('pass',function(){
        that.is.pass=false;
        return true;
     })
      //alert('hjk')
     
   },
   //确认密码验证
   isconfpass(){
      let that=this;
      this.fn('confpass',function(){
        that.is.confpass=false;
      
        if(that.text.confpass==that.text.pass){
            that.is.confpass=false;
            that.wron.confpass='';
           return true;
        }else{
           that.is.confpass=true;
           that.wron.confpass='两次密码不一致';
           return false;
        }
        
     })
     
   },
   //点击注册验证
   register(){
      let that=this;
      let istrue=[];
      let arr=[];
      let success=0;
      for (const k in this.is) {
        if(k!='messge'){
           arr.push(k)                        
        }
        
      }
      for (let i = 0; i < arr.length; i++) { 
        if(arr[i]=='username'){
           this.fn('username',function(){
                     //------------------------发送axios请求,验证用户名和密码是否正确
                    that.$axios.post('/api/existsUser',{
                        parmas:{
                            name:that.text.username
                        }
                      }).then(function(res){
                        let data=res.data.error
                        if(data){
                          that.is.username=true;
                          that.wron.username='用户名已经存在';
                          that.isor=false;
                        }else{
                          that.is.username=false;
                          that.wron.username='';
                          that.isor=true;
                        }
                      });
                
                    })
          istrue.push(that.isor);
        }else if(arr[i]=='confpass'){
          let is= this.fn('confpass',function(){
                  that.is.confpass=false;
                
                  if(that.text.confpass==that.text.pass){
                      that.is.confpass=false;
                      that.wron.confpass='';
                    return true;
                  }else{
                    that.is.confpass=true;
                    that.wron.confpass='两次密码不一致';
                    return false;
                  }
                  
              })
            istrue.push(is)   
        }
        else{
           let is=this.fn(arr[i],function(){
                    that.is[arr[i]]=false;
                    return true;
             })
           istrue.push(is)  
        }
           
      }
      //如果istrue数组里面有一个true就让变量success+1
       for (let i = 0; i < istrue.length; i++) {  
        if(!istrue[i]){
          break;
        }else{
          success++
        }
         
       }
       //success=4的时候进行短信验证和勾选条款的验证
       if(success==4){
         
           //-----进行短信验证
           if(this.text.messge=='5201314'){
              this.is.messge=false;
              this.wron.messge='';
              //-----------------验证有没有勾选条款
              if(this.ischeckd){
                  
                  //-------------------请求添加一个用户账号
                  this.$axios.post('/api/adduser',{
                      parmas:{
                        name:this.text.username,
                        phone:this.text.phone,
                        pass:this.text.pass
                      }
                  }).then(function(res){
                         console.log(res)
                         let data=res.data.error
                         if(!data){
                            //-----------------注册成功弹框
                            that.$confirm('注册成功', '提示', {
                                confirmButtonText: '确定',
                                cancelButtonText: '取消',
                                type: '	success'
                              }).then(() => {
                                that.$router.push('/login')
                              })
                         }else{
                            //-----------------注册失败弹框
                            console.log(res.data.data)
                            that.$alert('注册失败', '失败', {
                              confirmButtonText: '确定',
                            });
                         }
                  })
                  
              }else{
                  //-----------------显示一个红色的*号在条款前面        
                this.isxing='xing';
              }
               
           }else{
              this.is.messge=true;
              this.wron.messge='验证码不正确'
           }
           
           
         
       }
      
   },
   //条款选择
   clause(){
     this.ischeckd=!this.ischeckd;
   },
   //点击获取验证码按钮效果
   Myzbtn(){
     //--------------------发送axios的请求发送验证码
     let that=this
     this.sty={
              'color':'#fff',
              'background-color': '#bababa'
      }
     this.yztext=60;
     this.disbtn=true;
      let time=setInterval(function(){
        that.yztext--
        if(that.yztext==0){
          clearInterval(time);
          this.disbtn=false;
          that.sty={
              'color':'#fff',
              'background-color': '#0a83d7'
              };
          that.yztext='重新发送验证码';
        }
        
      }, 1000);
      
   }

   
   
 }
}
</script>
<style scope lang='less'>
@import '../styles/C_pub.less';
@import '../font/C_font/iconfont.css';

* {
  margin: 0;
  padding: 0;
}
.register{
    //注册
#register{
  color: @colormain;
  margin-right:6px;
}
//已有账号，登录
#loginbtn{
    color: @colormain;
    margin-left: 2px;
}
//登录框的placeholder颜色设置
input::-webkit-input-placeholder{
    color: #bababa;
}
//登录按钮
.btn-primary{
    background-color: #0a83d7;
    outline: none;
    border: none;
    color: #fff;
    &:hover{
         background-color: #3aa0e9;
    }
}
//条款
.d5 a{
    color: @colormain;
    cursor: default;
    &:hover{
        color: #3aa0e9;
    }
}


.d5 a.lay{
    margin-right: 2px;
}
.d5 a.self{
    margin-left: 2px;
}
//条框前的input
.reg-ipt1{
    width: 15px;
    height: 15px;
    position: relative;
    top:-2px;
}

#uploadbtn{
  background-color:@colormain; 
  outline: none;
  border: none;
  color: #fff;
  &:hover{
    background-color: #3296dd;
  }
}
.d1 {
  border: 1px solid #d6d6d6;
  border-radius: 8px;
  width: 451px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 2px 4px 5px #d6d6d6;

}
.d1 .d2 {
  text-align: center;
  font-size: 24px;
  height: 62px;
  border:none;
  line-height: 62px;
  width: 451px;
  margin-top: 0;
  color: #3f3f3f;
}
.d1 div {
  width: 369px;
  height: 49px;
  margin: 0 auto;
  border: 1px solid #cacaca;
  margin-top: 18px;
  border-radius: 6px;
  position: relative;
  z-index: -1;
}
.d1 input {
  height: 44px;
  vertical-align: middle;
  outline: none;
  border: 0px;
  margin-left: 10px;
  font-size: 15px;
}
.d1 .sa-ipt1 {
  height: 44px;
  vertical-align: middle;
  outline: none;
  border: 0px;
  margin-left: 33px;
  font-size: 15px;
  width: 85px;
  
}
#ipt1::-webkit-input-placeholder{
   color: #bdbdbd;
}
#ipt2::-webkit-input-placeholder{
   color: #bdbdbd;
}

.d1 .sa-div1 {
  width: 77px;
  right: 10px;
  position: absolute;
  height: 30px;
  color: white;
  background: #d16d62;
  top: -13px;
  border: 0;
  display: none;
  text-align: center;
  line-height: 30px;
}
.d1 .glyphicon {
  font-size: 20px;
  color: #bababa;
  line-height: 49px;
  position: absolute;
  left: 10px;
}
.d1 .re-div1 {
  width: 131px;
  right: 10px;
  position: absolute;
  height: 30px;
  color: white;
  background: #d16d62;
  top: -13px;
  border: 0;
  display: none;
  text-align: center;
  line-height: 30px;
}
//发送验证码按钮
.d1 .btn1 {
outline: none;
border:none;
  width: 130px;
  height: 49px;
  float: left;
  position: absolute;
  right: 0;
  background-color: #0a83d7;
  border: 1px solid #f2f2f2;
  color: #ffffff;
  &:hover{
      background-color: #3296dd;
  }
}
.d1 .d3 {
  position: relative;
  border: 0px;
}
.d1 .d4 {
  float: left;
  width: 230px;
  margin: 0;
}
.d1 .d5 {
  position: relative;
  border: 0;
}
.d1 .d5 span{
    color: #7a7a7a;
}
.d1 .d5 .d9 {
  width: 150px;
  height: 30px;
  border: 0;
  margin: 0;
  position: absolute;
  right: -31px;
  top: 14px;
}
.d1 .div1,.d1 .div2,.d1 .div3,.d1 .div4 {
  width: 371px;
  position: absolute;
  height: 24px;
  color: white;
  background: #eeeeee;
  border: 0;
  text-align: center;
  line-height: 30px;
  bottom: -18px;
  left: -1px;
  z-index: 10000;
  border-radius:0 0 6px 6px;
  // border:1px solid gainsboro;
  color: #3296dd;
  line-height: 24px;
  font-size: 12px;
}


.d1 .dd {
  width: 350px;
  position: absolute;
  color: gray;
  z-index: 9999;
  box-shadow: 0 4px 9px 1px rgba(140, 155, 116, 0.24);
  left: 40px;
  font-size: 15px;
  background: white;
  height: auto;
  display: none;
}
.d1 .div5 {
  width: 350px;
  position: absolute;
  z-index: 9999;
  box-shadow: 0 4px 9px 1px rgba(140, 155, 116, 0.24);
  left: 40px;
  font-size: 15px;
  background: white;
  height: auto;
  display: none;
  top: 110px;
  color: gray;
}
.d1 .for-d1 {
  width: 85px;
  right: 10px;
  position: absolute;
  height: 30px;
  color: white;
  background: #d16d62;
  top: -13px;
  border: 0;
  display: none;
  text-align: center;
  line-height: 30px;
}
.d1 .reg-ipt {
  width: 130px;
}
.d1 .reg-div1 {
  font-size: 12px;
  width: 80px;
  right: 6px;
  position: absolute;
  height: 30px;
  color: #c03e30;
  top: -9px;
  border: 0;
  text-align: center;
  line-height: 30px;
}
#reg-div1{
  border: 1px solid #d16d62;
}
.d1 #for-ipt2 {
  width: 100px;
  height: 48px;
}
.d1 .div6 {
  width: 350px;
  position: absolute;
  color: gray;
  z-index: 9999;
  box-shadow: 0 4px 9px 1px rgba(140, 155, 116, 0.24);
  left: 40px;
  font-size: 15px;
  background: white;
  height: auto;
  display: none;
  top: 318px;
}
.d1 .log-d1 {
  width: 350px;
  position: absolute;
  color: gray;
  z-index: 9999;
  box-shadow: 0 4px 9px 1px rgba(140, 155, 116, 0.24);
  left: 40px;
  font-size: 15px;
  background: white;
  height: auto;
  display: none;
  top: 302px;
}
.d1 .btn-primary {
  width: 369px;
  height: 48px;
  display: block;
  margin: 0 auto;
}
.d1 p {
  text-align: center;
  padding: 10px 0;
  font-size: 12px;
}
.d1 .b1 {
  margin-top: 20px;
}
.d1 .d8 {
  border: 0;
  height: 30px;
}
.d1 .d10 {
  border: 0;
}
.d1 .d10 span {
  margin-left: 20px;
}
/* @font-face {
  font-family: 'iconfont';
  src: url('../font/C-font/iconfont.eot');
  src: url('../font/C-font/iconfont.eot?#iefix') format('embedded-opentype'), url('../font/C-font/iconfont.woff2') format('woff2'), url('../font/C-font/iconfont.woff') format('woff'), url('../font/C-font/iconfont.ttf') format('truetype'), url('../font/C-font/iconfont.svg#iconfont') format('svg');
} */
.d1 .d10 .qq,
.d1 .d10 .wechat {
  font-family: "iconfont" !important;
  font-size: 23px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.d1 .inp1 {
  margin: 0;
  border-radius: 45px;
}
.d1 .inp2 {
  margin: 0;
  border-radius: 45px;
}
.d1 #btn1 {
  margin: 20px auto;
}
.d1 .img1 {
  margin-top: 25px;
  margin-left: 176px;
  display: block;
}
.d1 .img3 {
  display: block;
  margin: 0 auto;
}
.d1 .d11 {
  margin-top: 5px;
  border: 0;
  text-align: center;
  font-size: 24px;
}
.d1 .d12 {
  width: 200px;
  border-radius: 40px;
  text-align: center;
  line-height: 49px;
  color: white;
  background: #333333;
}
.d1 #btn2 {
  font-size: 25px;
}
.d1 .d13 {
  border: 0;
  text-align: center;
  color: #070807;
  font-size: 20px;
}
.d1 .d13 #sp1 {
  color: #070807;
  font-size: 20px;
}
.d1 .p1 {
  font-size: 15px;
}
/*# sourceMappingURL=C-lulu.css.map */
//星星
#xing{
  color: rgb(228, 23, 23);
  font-size: 18px;
}
.pubinput{
  width: 320px
}
.iconfont{
  font-size: 16px;
  color: #b4b4b4;
  margin-left:14px;
  position: relative;
  top:px;
}
}

</style>
