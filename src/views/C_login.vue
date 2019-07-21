<template>
  <div class="login">
     <div>
    <div class="d1">
        <img src="" class="img3" height="130" width="130"/>
        <div class="d11">登录</div>
        <div>
            <span class="glyphicon glyphicon-earphone"></span>
            <input type="text" id="ipt1" placeholder="请输入账号">
            <div class="div1"></div>
        </div>
        <div>
            <span class="glyphicon glyphicon-lock"></span>
            <input type="password" id="ipt2" placeholder="请输入密码">
            <div class="div2"></div>
        </div>
        <div class="log-d1"></div>
        <div class="d5">
        <input type="checkbox" class="ipt3" ><span>自动登录</span>
          <div class="d9">
            <a href="C-register.html" >注册账号</a>
            <a href="C-forget.html">忘记密码</a>
          </div>
        </div>
        <router-link to="/index">
        <button type="button" class="btn btn-primary" id="uploadbtn">登录</button>
         </router-link>
        <!-- <div class="d10">
       <span>其他账号登录：<a href="C-wechat.html" style="text-decoration: none "><span class="qq">&#xe630;</span></a>
           <a href="C-wechat.html" style="text-decoration: none"><span class="wechat">&#xe614;</span></a></span>
        </div> -->
        <div class="d8"></div>
    </div>

</div>
   
    
  </div>
</template>

<script>
export default {
 name:'login'
};
</script>
<style scope lang='less'>
@import '../styles/C_pub.less';

* {
  margin: 0;
  padding: 0;
}
#uploadbtn{
  background-color:@colormain; 
  outline: none;
  border: none;
  color: #fff;
  &:hover{
    background-color: #3aa0e9;
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
  background-color: #fff;
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
  border: 1px solid #d6d6d6;
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
   color: #cccccc;
}
#ipt2::-webkit-input-placeholder{
   color: #cccccc;
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


