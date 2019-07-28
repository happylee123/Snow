<template>
  <div class="peopleint">
    <!--标题栏-->
    <div id="E-title" class="E-title">
      <div>
        <span>个人中心</span>
      </div>
    </div>
    <!--个人中心显示区域-->
    <div id="E-user-list" class="clearfix">
      <!--用户头像-->
      <div id="E-user-head-img" class="clearfix">
        <div id="E-user-head-img-Y">
          <img :src="img" alt="404" />
        </div>
        <p>
          <span>修改头像</span>
          <button class="E-btn" id="E-user-img-btn">
            上传图片
            <input type="file" id="fileinput" />
          </button>
        </p>
      </div>
      <!--用户名-->
      <div class="E-user-content">
        <p>
          <span class="iconfont icon-wenti E-user-font"></span>
        </p>
        <p>
          <b>基础资料</b>
          <br />
          <span>自定义昵称</span>
        </p>
        <p>
          <button id="E-user-pass-name-btn" @click="show('Kname')">修改</button>
        </p>
      </div>
      <!--账号密码-->
      <div class="E-user-content">
        <p>
          <span class="iconfont icon-suo E-user-font"></span>
        </p>
        <p>
          <b>账号密码</b>
          <br />
          <span>用于保护账号信息和登录安全</span>
        </p>
        <p>
          <button id="E-user-pass-change-btn" @click="show('Kpass')">修改</button>
        </p>
      </div>
      <!--手机-->
      <div class="E-user-content">
        <p>
          <span class="iconfont icon-shouji E-user-font"></span>
        </p>
        <p>
          <b>安全手机</b>
          <br />
          <span>安全手机可以用于登录、重置密码或其他安全验证</span>
        </p>
        <p>
          <button id="E-user-pass-phone-btn"  @click="show('Kphone')">修改</button>
        </p>
      </div>
      <!--安全问题-->
      <div class="E-user-content">
        <p>
          <span class="iconfont icon-question E-user-font"></span>
        </p>
        <p>
          <b>密保问题</b>
          <br />
          <span>密保问题用于安全验证</span>
        </p>
        <p>
          <button id="E-user-pass-question-btn"  @click="show('kmibao')">修改</button>
        </p>
      </div>
    </div>


    <!-- <div id="E-UP-mask-YN">
      <span class="iconfont icon-cuo" style="font-size: 24px;font-weight: bold"></span>
      <span>修改失败</span>
    </div> -->

    <!--1111遮罩层 修改昵称----------------------------------------------------------------------------------------->
    <div id="E-user-pass-mask" v-show="Kname">
      <!--主体-->
      <div id="E-user-pass-mask-body">
        <h3 id="E-user-pass-mask-head" >昵称修改</h3>
        <a href="javascript:;" id="E-user-pass-mask-exit" @click="hide('Kname')">×</a>
        <hr />
        <!-- -1111111111111------------- -->
        <div id="E-user-pass-mask-content" >
          <div>
               新昵称 <input type="password" placeholder="请输入新的昵称" style="margin-top:6px">
          </div>
        </div>
        <div id="E-user-pass-mask-btn">
          <button id="E-user-pass-mask-btn-no" class="E-btn" @click="hide('Kname')">取消</button>
          <button id="E-user-pass-mask-btn-yes" class="E-btn"  @click="hide('Kname')" >确定</button>
        </div>
      </div>
    </div>
   
    <!--22222遮罩层  修改密码----------------------------------------------------------------------------------------->
    <div id="E-user-pass-mask" v-show="Kpass">
      <!--主体-->
      <div id="E-user-pass-mask-body">
        <h3 id="E-user-pass-mask-head" >密码修改</h3>
        <a href="javascript:;" id="E-user-pass-mask-exit" @click="hide('Kpass')">×</a>
        <hr />
        <!-- -1111111111111------------- -->
        <div id="E-user-pass-mask-content" >
          <div>
              <p>原密码</p>
              <input type="password" placeholder="请输入旧密码">
              <a href="">忘记密码</a>
          </div>
          <div>
              <p>新密码</p>
              <input type="password" placeholder="请输入新密码">
              <input type="password" placeholder="请再次输入密码">
          </div>
          
        </div>
        <div id="E-user-pass-mask-btn">
          <button id="E-user-pass-mask-btn-no" class="E-btn" @click="hide('Kpass')">取消</button>
          <button id="E-user-pass-mask-btn-yes" class="E-btn"  @click="hide('Kpass')" >确定</button>
        </div>
      </div>
    </div>

    <!--333333遮罩层 手机号修改----------------------------------------------------------------------------------------->
    <div id="E-user-pass-mask" v-show="Kphone">
      <!--主体-->
      <div id="E-user-pass-mask-body">
        <h3 id="E-user-pass-mask-head" >密码修改</h3>
        <a href="javascript:;" id="E-user-pass-mask-exit" @click="hide('Kphone')">×</a>
        <hr />
        <!-- -1111111111111------------- -->
        <div id="E-user-pass-mask-content" >
          <div id="E-user-pass-mask-phone">
                <p><b>为确认身份，我们仍需验证您的安全手机</b></p>
                <p>点击获取验证码按钮，将会发送一条有验证码的短信至手机： <span style="color: orange">187...069</span></p>
                <input type="text" placeholder="输入验证码" id="E-user-pass-mask-phone-prove" style="width: 148px" >
                <button style="width: 160px;height: 25px" id="E-user-pass-mask-phone-prove-btn" >获取验证码</button>
                <a href="javascript:;">无法获取验证码？</a>
                <span class="iconfont icon-cuo" id="E-user-pass-mask-phone-prove-cuo" style="top:86px;left:130px"></span>
                <span class="iconfont icon-dui" id="E-user-pass-mask-phone-prove-dui" style="top:86px;left:130px"></span>
            </div>
            <div id="E-user-pass-mask-pass-new">
                <p><b>新手机号</b></p>
                <input type="text" placeholder="输入新手机号"  id="E-user-pass-mask-pass-new-phone" >
                <span id="E-user-pass-mask-pass-new-pass-cuo" class="iconfont icon-cuo"></span>
                <span id="E-user-pass-mask-pass-new-pass-dui" class="iconfont icon-dui"></span>
                <br>
                <input type="text" placeholder="输入验证码" id="E-user-pass-mask-pass-new-phone-prove" style="width: 148px" >
                <span class="iconfont icon-cuo" id="E-user-pass-mask-phone-prove-new-cuo" style="top:67px;left:133px"></span>
                <span class="iconfont icon-dui" id="E-user-pass-mask-phone-prove-new-dui" style="top:67px;left:133px"></span>
                <button style="width: 160px;height: 25px" id="E-user-pass-mask-phone-new-btn" >获取验证码</button>
                <br>
            </div>
          
        </div>
        <div id="E-user-pass-mask-btn">
          <button id="E-user-pass-mask-btn-no" class="E-btn" @click="hide('Kphone')">取消</button>
          <button id="E-user-pass-mask-btn-yes" class="E-btn"  @click="hide('Kphone')" >确定</button>
        </div>
      </div>
    </div>
    

    <!--333333遮罩层 手机号修改----------------------------------------------------------------------------------------->
    <div id="E-user-pass-mask" v-show="kmibao">
      <!--主体-->
      <div id="E-user-pass-mask-body">
        <h3 id="E-user-pass-mask-head" >密码修改</h3>
        <a href="javascript:;" id="E-user-pass-mask-exit" @click="hide('kmibao')">×</a>
        <hr />
        <!-- -1111111111111------------- -->
        <div id="E-user-pass-mask-content" >
           <div id="E-user-pass-mask-question">
                            <p><b>请牢记您的密保问题</b></p>
                            <div>
                                <!--问题1-->
                                <div class="E-user-pass-question">
                                    <p class="E-user-pass-question-p" id="E-user-pass-question-1">
                                        <b qnum=${aEQ[0].question_id}>我的名字</b>
                                        <span class="iconfont icon-xia"></span>
                                        <ul class="E-user-pass-question-ul" id="E-user-pass-question-1-key">
                                            <li>我的电话</li>
                                            <li>我住在那个城市</li>
                                        </ul>
                                    </p>
                                    <input type="text" placeholder="请输入答案" id="E-UP-key-1">
                                    <span class="iconfont icon-cuo" id="E-UP-key-1-cuo"></span>
                                    <span class="iconfont icon-dui" id="E-UP-key-1-dui"></span>
                                </div>
                              
                                <h4 style="margin-bottom: 15px" id="E-UP-key-content">*请输入2-10个字符</h4>
                            </div>
                        </div>
          
        </div>
        <div id="E-user-pass-mask-btn">
          <button id="E-user-pass-mask-btn-no" class="E-btn" @click="hide('kmibao')">取消</button>
          <button id="E-user-pass-mask-btn-yes" class="E-btn"  @click="hide('kmibao')" >确定</button>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: "people",
  data() {
    return {
      img: require("../assets/E-user-img.jpg"),
      Kpass:false,  //修改基础资料
      Kname:false,
      Kphone:false,
      kmibao:false,
    };
  },
  methods: {
    show(tk){//显示弹框
      this[tk]=true;
    },//隐藏弹框
    hide(tk){
      this[tk]=false;
    }
  }
};
</script>
<style scope lang='less'>
@import "../font/E-font/font_ocnv4h6skj9/iconfont.css";
.peopleint {
  #E-user-img-btn {
    position: relative;
    #fileinput {
      width: 80px;
      position: absolute;
      top: 0px;
      left: 0px;
      background-color: transparent;
      opacity: 0;
    }
  }

  .E-title {
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    background: #f9f9f9;
    border-bottom: #cccccc solid 1px;
  }
  .E-title > div > span {
    margin-left: 20px;
  }
  .E-btn {
    width: 80px;
    border: 1px solid skyblue;
    border-radius: 5px;
    height: 29px;
    cursor: pointer;
  }
  input {
    border-radius: 5px;
    border: #8d8d8d 1px solid;
    padding-left: 5px;
  }
  input:focus {
    border: #a3e9f6 1px solid;
    outline: 0;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #77b4ad;
  }
  /*# sourceMappingURL=E-css-util.css.map */

  #E-user-content {
    height: 30px;
    margin-top: 5px;
  }
  #E-user-content > p {
    float: left;
    margin-left: 50px;
    line-height: 30px;
  }
  #E-user-content > p:hover {
    cursor: pointer;
  }
  #E-user-list {
    width: 954px;
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    border: 1px solid #cfcfcf;
    position: relative;
    background: white;
    padding-bottom: 10px;
  }
  #E-user-list .icon-shang {
    position: absolute;
    top: -12px;
    left: 56px;
    color: #cfcfcf;
    background: #ededed;
    width: 15px;
    height: 12px;
  }
  #E-user-head-img {
    margin-left: 40px;
    margin-top: 5px;
    padding-top: 20px;
    width: 880px;
    margin-bottom: 20px;
  }
  #E-user-head-img > div {
    float: left;
    width: 100px;
    height: 100px;
    border: #0aa0f6 solid 1px;
    border-radius: 50%;
    overflow: hidden;
  }
  #E-user-head-img > div > img {
    width: 100px;
    height: 100px;
  }
  #E-user-head-img > p {
    float: left;
    width: 100px;
    height: 100px;
    line-height: 40px;
    padding-left: 40px;
    padding-top: 10px;
  }
  #E-user-head-img > p > span {
    font-size: 20px;
    font-weight: bold;
  }
  #E-user-head-img > p > button {
    background: #0aa0f6;
    color: white;
  }
  .E-user-content {
    height: 60px;
    margin-left: 40px;
    margin-top: 5px;
    padding-top: 20px;
    width: 880px;
    border-top: 1px solid #ccc;
    position: relative;
  }
  .E-user-content > p {
    float: left;
    height: 60px;
    margin-left: 10px;
  }
  .E-user-content > p > span {
    line-height: 30px;
    color: #8d8d8d;
  }
  .E-user-content > p .E-user-font {
    font-size: 30px;
    color: orange;
    line-height: 60px;
  }
  .E-user-content > p > b {
    font-size: 20px;
  }
  .E-user-content > p > button {
    position: absolute;
    top: 35px;
    right: 80px;
    width: 80px;
    border: 1px solid skyblue;
    border-radius: 5px;
    background: #0aa0f6;
    height: 29px;
    color: white;
    cursor: pointer;
  }
  #E-user-pass-mask {
    background: rgba(0, 0, 0, 0.3);
    z-index: 999;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    // display: none;
  }
  #E-user-pass-mask-body {
    background: white;
    width: 400px;
    height: 350px;
    padding: 20px 20px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top:-175px;
    margin-left: -200px;
    border-radius: 5px;
  }
  #E-user-pass-mask-body > a {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  #E-user-pass-mask-body #E-user-pass-mask-content {
    padding: 10px 40px 0 40px;
  }
  #E-user-pass-mask-body #E-user-pass-mask-content > div {
    margin-bottom: 20px;
    position: relative;
  }
  #E-user-pass-mask-body #E-user-pass-mask-content > div > p {
    font-size: 16px;
    margin-bottom: 10px;
  }
  #E-user-pass-mask-body #E-user-pass-mask-content > div > input {
    width: 98%;
    height: 25px;
    margin-bottom: 5px;
  }
  #E-user-pass-mask-body #E-user-pass-mask-content > div > a {
    color: #0aa0f6;
  }
  #E-user-pass-mask-body #E-user-pass-mask-content > div > span {
    font-weight: bold;
    font-size: 18px;
    position: absolute;
    top: 34px;
    right: 5px;
    display: none;
  }
  .icon-cuo {
    color: red;
  }
  .icon-dui {
    color: green;
  }
  #E-user-pass-mask-head {
    font-size: 18px;
    font-weight: bold;
  }
  #E-user-pass-mask-pass {
    margin-top: 10px;
  }
  #E-user-pass-mask-pass-new {
    margin-top: 15px;
    margin-bottom: 25px;
  }
  #E-user-pass-mask-pass-new > div {
    position: absolute;
    top: 68px;
    right: 0;
  }
  #E-user-pass-mask-pass-new > div > span {
    font-weight: bold;
    font-size: 18px;
    position: absolute;
    top: 0;
    right: 5px;
    display: none;
  }
  #E-user-pass-mask-pass-new > h4 {
    width: 100%;
    text-align: center;
  }
  #E-user-pass-mask-btn {
    margin-top: 20px;
    text-align: center;
  }
  #E-user-pass-mask-btn-yes {
    background: #0aa0f6;
    color: white;
    margin-left: 40px;
  }
  #E-user-pass-mask-btn-no {
    background: white;
  }
  .E-user-pass-question {
    position: relative;
  }
  #E-user-pass-mask-question > div > h4 {
    width: 100%;
    text-align: center;
    margin-top: 5px;
  }
  .E-user-pass-question-p {
    width: 100%;
    height: 25px;
    border: #8d8d8d 1px solid;
    border-radius: 5px;
    line-height: 25px;
    padding-left: 8px;
    color: black;
  }
  .E-user-pass-question-p > b {
    font-weight: normal;
  }
  .E-user-pass-question-p:hover {
    cursor: pointer;
  }
  .icon-xia {
    position: absolute;
    top: 2px;
    right: 0;
  }
  .E-user-pass-question-ul {
    border-radius: 5px;
    border: #8d8d8d 1px solid;
    width: 328px;
    display: none;
    position: absolute;
    top: 26px;
    left: 0;
    background: white;
    z-index: 2;
  }
  .E-user-pass-question-ul > li {
    height: 25px;
    line-height: 25px;
    text-align: left;
    width: 321px;
    padding-left: 8px;
  }
  .E-user-pass-question > input {
    width: 101%;
    height: 25px;
    margin-top: 5px;
    margin-bottom: 15px;
  }
  .E-user-pass-question > span {
    position: absolute;
    top: 34px;
    right: -3px;
    font-size: 20px;
    font-weight: bold;
    display: none;
  }
  /*修改用户名的遮罩层 开始*/
  #E-UP-name-mask {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 999;
    top: 0;
    left: 0;
    display: none;
  }
  #E-UP-NM-body {
    width: 300px;
    height: 200px;
    background: white;
    border-radius: 5px;
    position: absolute;
    top: 160px;
    left: 500px;
    padding: 20px 20px;
  }
  #E-UP-NM-head {
    font-size: 20px;
    font-weight: bold;
  }
  #E-UP-NM-exit {
    position: absolute;
    top: 9px;
    right: 13px;
  }
  #E-UP-NM-mask-content {
    margin-top: 40px;
    font-size: 16px;
    text-align: center;
  }
  #E-UP-NM-mask-content > input {
    height: 25px;
    line-height: 25px;
  }
  #E-UP-NM-mask-content > p {
    font-size: 14px;
    color: #8d8d8d;
    margin-top: 5px;
  }
  #E-UP-NM-mask-btn {
    margin-top: 40px;
    text-align: center;
  }
  #E-UP-NM-mask-btn-no {
    background: white;
  }
  #E-UP-NM-mask-btn-yes {
    background: #0aa0f6;
    color: white;
    margin-left: 30px;
  }
  /*修改用户名的遮罩层 结束*/
  /*修改头像遮罩层 开始*/
  #E-UP-img-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    display: none;
  }
  #E-UP-IM-body {
    width: 800px;
    height: 500px;
    position: absolute;
    top: 50px;
    left: 280px;
    background: white;
    border-radius: 5px;
    padding: 20px 20px;
  }
  #E-UP-IM-body > div {
    float: left;
  }
  #E-UP-IM-head {
    font-size: 20px;
    font-weight: bold;
  }
  #E-UP-IM-exit {
    position: absolute;
    top: 9px;
    right: 13px;
  }
  #E-UP-IM-img-left {
    width: 122px;
    height: 235px;
    text-align: center;
    margin-left: 50px;
    margin-top: 10px;
  }
  #E-UP-IM-img-left > p {
    margin-top: 5px;
  }
  #E-UP-IM-img-left > input {
    margin-top: 10px;
    border: none;
    border-radius: 0;
    width: 75px;
    text-align: center;
  }
  #E-UP-IM-min-img {
    background: url("../assets/E-user-img.jpg");
    border-radius: 50%;
    border: #0aa0f6 solid 1px;
  }
  #E-UP-IM-img-right {
    width: 540px;
    height: 370px;
    border: 1px solid #ccc;
    margin-top: 10px;
    margin-left: 30px;
    position: relative;
  }
  #E-UP-img-boss {
    width: 540px;
    height: 370px;
    overflow: scroll;
  }
  #E-UP-img-boss-mask {
    width: 523px;
    height: 353px;
    position: absolute;
    top: 0;
    left: 0;
    display: none;
  }
  #E-UP-img-boss-mask > div {
    float: left;
  }
  #E-UP-img-BM-top {
    width: 100%;
    height: 75px;
    background: rgba(0, 0, 0, 0.3);
  }
  #E-UP-img-BM-bottom {
    width: 100%;
    height: 76px;
    background: rgba(0, 0, 0, 0.3);
  }
  #E-UP-img-BM-left {
    width: 161px;
    height: 202px;
    background: rgba(0, 0, 0, 0.3);
  }
  #E-UP-img-BM-right {
    width: 160px;
    height: 202px;
    background: rgba(0, 0, 0, 0.3);
  }
  #E-UP-img-BM-body {
    width: 200px;
    height: 200px;
    border: 1px solid skyblue;
    position: relative;
  }
  #E-UP-img-BM-body:hover {
    cursor: move;
  }
  #E-UP-img-BM-btn {
    width: 8px;
    height: 8px;
    border: whitesmoke 1px solid;
    position: absolute;
    right: -5px;
    bottom: -5px;
  }
  #E-UP-img-BM-btn:hover {
    cursor: nw-resize;
  }
  #E-UP-IM-mask-btn {
    width: 100%;
    text-align: center;
    margin-top: 40px;
  }
  #E-UP-IM-mask-btn-no {
    background: white;
  }
  #E-UP-IM-mask-btn-yes {
    background: #0aa0f6;
    color: white;
    margin-left: 80px;
  }
  /*各类修改成功/失败后的弹框---开始*/
  #E-UP-mask-YN {
    background: white;
    position: absolute;
    width: 200px;
    height: 50px;
    border-radius: 5px;
    text-align: center;
    line-height: 50px;
    font-size: 20px;
    // display: none;
    z-index: 1000;
  }
  .E-UP-mask-YN-N {
    border: 1px solid red;
  }
  .E-UP-mask-YN-Y {
    border: 1px solid green;
  }
  /*各类修改成功/失败后的弹框---结束*/
  #E-UP-key-two-1,
  #E-UP-key-two-2,
  #E-UP-key-two-3 {
    margin-bottom: 0;
  }
  #E-UP-key-two-1-con,
  #E-UP-key-two-2-con,
  #E-UP-key-two-3-con {
    margin-bottom: 15px;
    height: 15px;
  }
}

/*# sourceMappingURL=E-user-pass.css.map */
</style>
