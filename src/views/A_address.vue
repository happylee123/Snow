<template>
    <div class="address">
         <div class="D-right E-right clearfix">
            <div class="D-space">
                <div class="header">
                    <span class="s1">收货信息</span>
                    <button class="D-btn">添加新地址</button>
                </div>
                <div class="D-con1">
                    <span class="D-s1">姓名</span>
                    <span class="D-s2">电话</span>
                    <span class="D-s2">详细地址</span>
                    <span class="D-s4">操作</span>
                </div>

                <!-- ---------------没有收货地址的页面显示 -->
                <!-- <div class="Dreserve">
                    <div class="Dabout">
                        <p style="color: red">暂时还没有收获地址哦</p>
                    </div>
                </div> -->
              
              <!-- -----------------有收货地址的页面显示 -->
              <div class="D-con3-b">
                    <span class="D-operate">熊英爽</span>
                    <span class="D-s5">187152555225</span>  
                    <!--<div></div>  -->
                    <span class="D-s6">成都市金牛区九里堤<span class="D-moren">(默认地址)</span> </span>  
                    <!-- 两个图标 -->
                    <span class="iconfont icon-bianji D-s7"></span>
                    <span class="iconfont icon-shanchu D-s8"></span>
              </div>
              
               
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'address'
}
</script>
<style lang="less" scope>
@import '../font/D-font/iconfont.css';
    * {
  margin: 0;
  padding: 0;
  list-style: none;
}
.clearfix:after {
  content: '';
  clear: both;
  display: block ;
}
.address{
.head {
  height: 55px;
  border: 1px solid black;
}
.content {
  width: 1200px;
  height: 500px;
  position: absolute;
  top: 150px;
  left: 50%;
  margin-left: -600px;
}
.D-space {
  width: 930px;
  margin-left: 22px;
  /*background: white;*/
}
.header {
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #ccc;
}
.s1 {
  font-size: 20px;
  line-height: 70px;
  margin-left: 10%;
}
.D-btn {
  width: 120px;
  height: 40px;
  font-size: 16px;
  border: none;
  color: white;
  background: #0a83d7;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  right: 22px;
  top: -12px;
}
.D-con1 {
  width: 100%;
  height: 50px;
  font-size: 16px;
}
.D-con1 span,
.D-con1 div {
  display: inline-block;
  line-height: 50px;
}
.D-s1 {
  margin-left: 15%;
  margin-right: 16%;
}
.D-s2 {
  margin-right: 21%;
}
.D-con3-b {
  width: 100%;
  padding: 22px 0;;
  border-bottom: 1px solid #ccc;
  background: white;
  margin-bottom: 10px;
}
.D-con3-b div,
.D-con3-b span {
  display: inline-block;
}
.D-operate {
  width: 65px;
  margin-left: 14%;
}
.D-s7 {
  margin-left: 40px;
  font-size: 30px;
  color: rgb(185, 185, 185);
  
}
.D-s8 {
  font-size: 30px;
   color: rgb(185, 185, 185);
}
.D-s5 {
  margin-left: 10%;
}
.D-s6 {
  margin-left: 8%;
  width: 281px;
}
.D-s6 span {
  font-size: 10px;
}
.D-s61 {
  width: 333px;
  height: 100px;
  margin-left: 8%;
}
.D-s61 span {
  font-size: 10px;
}
.D-moren {
  display: inline;
  margin-left: 6px;
  color: #0a83d7;
  font-size: 14px;
}
.D-mask {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
  background: rgba(0, 0, 0, 0.3);
  //display: none;
}
.mask {
  width: 700px;
  height: 465px;
  position: absolute;
  top: 83px;
  left: 50%;
  margin-left: -350px;
  background: white;
}
.D-close {
  display: inline-block;
  position: absolute;
  top: 1px;
  right: 3px;
  cursor: pointer;
}
.D-mask1 {
  width: 84%;
  height: 70px;
  margin-left: 6%;
  line-height: 70px;
  border-bottom: 1px solid gray;
}
.D-new1 {
  font-size: 20px;
  font-weight: bold;
  margin-left: 6%;
}
.D-new2 {
  margin-left: 5%;
}
.D-input {
  width: 84%;
  height: 380px;
  margin-left: 6%;
  padding-top: 21px;
  padding-left: 35px;
}
.D-address1 {
  width: 250px;
  height: 30px;
  border: 1px solid #B3B3B3;
  font-size: 14px;
  line-height: 28px;
  padding-left: 3%;
  color: black;
}
input::-webkit-input-placeholder {
  color: #ccc;
}
.D-ads1 {
  margin-left: 21px;
  margin-top: 20px;
}
.D-ads2 {
  margin-top: 20px;
  margin-left: 6px;
}
.D-aaa {
  margin-top: 20px;
}
.D-aaa1 {
  height: 62px;
  line-height: 62px;
  margin-top: 20px;
}
.D-aaa2 {
  margin-top: 20px;
}
.D-aaa3 {
  margin-top: 20px;
}
.D-input div div:not(.D-detai) {
  display: inline-block;
  width: 130px;
  height: 30px;
  border: 1px solid #B3B3B3;
  font-size: 14px;
  color: #ccc;
  line-height: 28px;
  background: white;
}
.D-detai {
  display: inline-block;
  width: 410px;
  height: 60px;
  border: 1px solid #B3B3B3;
  font-size: 14px;
  color: black;
  line-height: 28px;
  background: white;
  margin-left: 13px;
  overflow: hidden;
}
button {
  width: 90px;
  height: 30px;
  margin-top: 3%;
  border: none;
  border-radius: 5px;
  outline: none;
}
.D-ads6 {
  margin-top: 45px;
}
.D-cancel {
  margin-left: 26%;
  margin-right: 7%;
}
.D-save {
  background: #0a83d7;
  color: white;
}
.s5 {
  font-size: 25px;
  position: absolute;
  right: 412px;
  color: black;
}
.D-province {
  width: 130px;
  position: absolute;
  top: 247px;
  left: 160px;
  border: 1px solid #ccc;
  //display: none;
}
.D-province li {
  width: 100%;
  height: 25px;
  line-height: 25px;
  text-align: left;
  border-bottom: 1px solid #ccc;
  background: whitesmoke;
}
.D-province li:hover {
  background: #0a83d7;
}
.s6 {
  font-size: 25px;
  position: absolute;
  right: 277px;
  color: black;
}
.D-city {
  width: 130px;
  position: absolute;
  top: 247px;
  left: 297px;
  border: 1px solid #ccc;
  //display: none;
}
.D-city li {
  width: 100%;
  height: 25px;
  line-height: 25px;
  text-align: left;
  border-bottom: 1px solid #ccc;
  background: whitesmoke;
}
.D-city li:hover {
  background: #0a83d7;
}
.s7 {
  font-size: 25px;
  position: absolute;
  right: 140px;
  color: black;
}
.D-area {
  width: 130px;
  position: absolute;
  top: 247px;
  left: 434px;
  border: 1px solid #ccc;
  //display: none;
}
.D-area li {
  width: 100%;
  height: 25px;
  line-height: 25px;
  text-align: left;
  border-bottom: 1px solid #ccc;
  background: whitesmoke;
}
.D-area li:hover {
  background: #0a83d7;
}
.D-delMask {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
}
.D-maskdel {
  width: 270px;
  height: 160px;
  border: 1px solid darkgrey;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -80px;
  margin-left: -10%;
  background: white;
}
.D-top {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid gainsboro;
  line-height: 40px;
  background: #f8f8f8;
}
.D-prompt {
  margin-left: 20px;
  font-size: 14px;
}
.D-no {
  margin-left: 58%;
  text-decoration: none;
  color: black;
}
.D-buttom {
  padding-top: 8%;
}
.D-p1 {
  font-size: 14px;
  margin-left: 24%;
  padding-bottom: 12%;
}
.D-sure,
.D-yes {
  display: inline-block;
  width: 20%;
  text-align: center;
  font-size: 14px;
  cursor: pointer;
}
.D-sure {
  height: 29px;
  line-height: 29px;
  border: 1px solid darkgray;
  margin-left: 28%;
  margin-right: 2%;
}
.D-yes {
  height: 30px;
  line-height: 30px;
  background: #31b0d5;
  color: white;
}
/*//分页*/
.D-paging {
  margin-left: 45%;
  margin-top: 30px;
  margin-bottom: 50px;
}
.D-paging a {
  display: inline-block;
  width: 30px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  background: #0a83d7;
  color: white;
}
/*# sourceMappingURL=D-address.css.map */
}

</style>