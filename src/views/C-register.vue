<template>
   <div class="register">
       <div>
    <div class="d1">
        <div class="d2">注册账号</div>
        <div>

            <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
            <input type="text" class="ipt1" placeholder="用户名">
            <div class="div1"></div>
        </div>
        <div class="div5"></div>
        <div>
            <span class="glyphicon glyphicon-earphone"></span>
            <input type="text"  class="ipt2 in1" placeholder="手机号">
            <div class="div2"></div>
        </div>
        <div class="d3">
        <div class="d4" >
            <span class="glyphicon glyphicon-comment"></span>
            <input type="text"  class="reg-ipt " placeholder="短信验证码">
             <div class="reg-div1"></div>
        </div>
            <button class="btn1">获取验证码</button>
        </div>
        <div>
            <span class="glyphicon glyphicon-lock"></span>
            <input type="password"   class="ipt3 in1" placeholder="密码">
            <div class="div3"></div>
        </div>
        <div class="div6"></div>
        <div>
            <span class="glyphicon glyphicon-lock"></span>
            <input type="password"   class="ipt4 in1" placeholder="重复密码">
            <div class="div4"></div>
        </div>
       <div class="d5">
        <input type="checkbox" class="reg-ipt1">
        <span>我已阅读并同意遵守<a class="lay">法律声明</a >和<a class="self">隐私条款</a></span>
        </div>
        <button type="button" class="btn btn-primary">注册</button>
        <p>如果您已拥有账号，则可在此 <router-link to="/" id="loginbtn">登陆</router-link></p>
    </div>

</div>
   </div>
</template>

<script>
export default {
    name:"register",
}
</script>
<style scope lang='less'>
@import '../styles/C_pub.less';

* {
  margin: 0;
  padding: 0;
}
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
  margin-top: 12px;
  border-radius: 6px;
  position: relative;
  z-index: -1;
}
.d1 input {
  height: 44px;
  vertical-align: middle;
  outline: none;
  border: 0px;
  margin-left: 33px;
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
.d1 .div1 {
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
.d1 .div2 {
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


</style>
