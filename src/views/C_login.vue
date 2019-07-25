<template>
  <div class="login">
     <div>
    <div class="d1">
        <img src="../assets/logo2.png" class="img3" height="130" width="130"/>
        <div class="d11">登录</div>
        <div >
            <span class="iconfont icon-xingmingyonghumingnicheng icon"></span>
            <input type="text" id="ipt1" placeholder="请输入账号名" v-model="usernametext" @blur="Musername" @input="Musername" >
            <div class="div1" v-show="isuser">{{Uwron}}</div>
        </div>
        <div >
            <span class="iconfont icon-mima icon"></span>
            <input type="password" id="ipt2" placeholder="请输入密码" v-model="passtext" @blur="Mpass" @input="Mpass">
            <div class="div2" v-show="ispass">{{Pwron}}</div>
        </div>
        <div class="log-d1"></div>
        <div class="d5">
        <input type="checkbox" class="ipt3" id="checkinput"><span>自动登录</span>
          <div class="d9">
            <router-link to='/register' id="register">注册账号</router-link>
            <router-link to="/forget" id="forget">忘记密码?</router-link>
          </div>
        </div>
        <button type="button" class="btn btn-primary" id="uploadbtn" @click="loginbtn">登录</button>
 
       
        <div class="d8"></div>
    </div>
</div>
   
    
  </div>
</template>

<script>
import store from '../vuex/C_store';
export default {
 store,
 name:'login',
 data(){
   return {
     usernametext:"",
     passtext:'',
     Uwron:"",
     Pwron:"",
     isuser:false,
     ispass:false,
     reg:[
       {username:/[a-zA-z0-9]{3,12}/},
       {pass:/[a-zA-z0-9]{3,12}/}
     ]
     
   }
 },
 methods:{
   //验证封装
   fn1(usernametext,isuser,Uwron,regindex,regname,fn){
     if(!this[usernametext].trim()){
       this[isuser]=true;
       this[Uwron]="不能为空";
       return false;
     }
     if(!this.reg[regindex][regname].test(this[usernametext])){
       this[isuser]=true;
       this[Uwron]="请输入字母开头至少8-12位，包括字母、数字";
       return false;
     }else{
       //----------------------发起axios请求
        return fn()
     }  
   },
   //验证用户名
   Musername(){
     /*
     if(!this.usernametext.trim()){
       this.isuser=true;
       this.Uwron="不能为空";
       return false;
     }
     if(!this.reg[0].username.test(this.usernametext)){
       this.isuser=true;
       this.Uwron="请输入字母开头至少8-12位，包括字母、数字";
       return false;
     }else{
       //----------------------发起axios请求
         this.isuser=false;
         return true;
     }  
    */
   let that=this;
    this.fn1('usernametext','isuser','Uwron',0,'username',function(){
      that.isuser=false;
      return true
    })
   
   },
   //验证密码
   Mpass(){
     let that=this;
    this.fn1('passtext','ispass','Pwron',1,'pass',function(){
        that.ispass=false;
        return true
    })
   },
   loginbtn(){
     let that=this;
     let usertrue= this.fn1('usernametext','isuser','Uwron',0,'username',function(){
                    that.isuser=false;
                    return true
                  })
    let  passtrue=this.fn1('passtext','ispass','Pwron',1,'pass',function(){
                      that.ispass=false;
                      return true
                  })

     if(usertrue && passtrue){
       //------------------------发送axios请求,验证用户名和密码是否正确
        this.$axios.post("/api/login",{
             params:{
                name:this.usernametext,
                pass:this.passtext
             }
        }).then(function(res){
               let data=res.data.error
               //返回{error：1}，弹出警示框
                if(data){
                    //弹框
                    that.$alert('用户名或密码错误', '错误', {
                      confirmButtonText: '确定',
                    });
                    //保存数据在vuex中
                     this.$store.commit();
                     return false;
                }
                
                that.$router.push('/index')
        })
     }
  
     
   }
   
   
 }
};
</script>

<style scope lang='less'>
@import '../styles/C_pub.less';
@import '../font/C_font/iconfont.css';
* {
  margin: 0;
  padding: 0;
}
.icon{
  font-size: 16px;
  color: #b4b4b4;
  margin-left:14px;
  position: relative;
  top:px;
}
.login{
  //注册
#register{
  color: @colormain;
  margin-right:6px;
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
//忘记密码
#forget{
  color: #b4b4b4;
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
  border: 1px solid #d6d6d6;
  line-height: 62px;
  width: 451px;
  margin-top: 0;
}
.d1 div {
  width: 369px;
  height: 49px;
  margin: 0 auto;
  border: 1px solid #cacaca;
  margin-top: 20px;
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
#checkinput{
  margin-left:10px;
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
#ipt2,#ipt1{
  width: 329px;
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
.d1 .btn1 {
  width: 130px;
  height: 49px;
  float: left;
  position: absolute;
  right: 0;
  background: #fbfbfb;
  border: 1px solid #f2f2f2;
  color: #c1c1c1;
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
.d1 .d5 .d9 {
  width: 150px;
  height: 30px;
  border: 0;
  margin: 0;
  position: absolute;
  right: -23px;
  top: 14px;
}
.d1 .div1 {
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
.d1 .div2 {
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
.d1 .div3 {
  width: 120px;
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
.d1 .div4 {
  width: 130px;
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
  width: 80px;
}
.d1 .reg-div1 {
  width: 94px;
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

// .d1 .d10 .qq,
// .d1 .d10 .wechat {
//   font-family: "iconfont" !important;
//   font-size: 23px;
//   font-style: normal;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
// }
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
}


</style>


