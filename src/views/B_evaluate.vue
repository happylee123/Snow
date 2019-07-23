<template>
  <div class="evaluate">
    <div class="D-right E-right clearfix">
      <div class="D-space">
        <div class="header">
          <span class="s1">我的评价</span>
          <input type="text" placeholder="输入商品名称或编号" class="D-t1" />
          <button class="D-btn">搜索</button>
          <div class="date">
            <span class="s2 s2-2">最近三个月</span>
            <span class="iconfont icon-xiala- s3 s3-2"></span>
          </div>
          <ul class="ul1">
            <li>最近三个月</li>
            <li>最近一年</li>
            <li class="lastli">全部</li>
          </ul>
          
        </div>
        <div class="D-con1">
          <span class="D-s1">评论</span>
          <span class="D-s2">评价</span>
          <span class="D-s2">宝贝信息</span>
          <span class="D-s4">操作</span>
        </div>

         <!-- ---------------------------- 这里是没有评价的页面 -->
        <!-- <div class="Daaaaaa clearfix">
          <div class="noeval">
            <p>暂时还没有评价哦</p>
          </div>
        </div> -->

         <!-- ---------------------------- 这里是评论列表的页面 -->
        <div class="D-con3-b">
          <div class="D-operate">
            <span>好用</span>
            <p>2019-7-23</p>
          </div>
          <div class="stareval">
            <span class="iconfont icon-star D-s5 show"></span>
            <span class="iconfont icon-star D-s5 show"></span>
            <span class="iconfont icon-star D-s5 show"></span>
            <span class="iconfont icon-star D-s5 show"></span>
            <span class="iconfont icon-star D-s5 show"></span>
          </div>
          <span class="D-s6">索尼阿尔法专业版</span>
          <button class="D-s7 addeval" title="好评只能追加，不能删除或修改哦！">追加评论</button>
        </div>
       
        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "evaluate"
};
</script>

<style scope="this api replaced by slot-scope in 2.5.0+" lang="less" >
@import '../font/D-font1/iconfont.css';
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.clearfix:after {
  content: "";
  clear: both;
  display: block;
}
.evaluate{
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
    height: 60px;
    border-bottom: 1px solid #ccc;
  }
  .s1 {
    font-size: 17px;
    line-height: 60px;
    margin-left: 5%;
  }
  .D-t1 {
    display: inline-block;
    width: 141px;
    height: 27px;
    margin-left: 38%;
    border: 1px solid gray;
    border-radius: 3px;
    background: white;
    line-height: 27px;
    padding-left: 9px;
  }
  .D-t1 input {
    outline: none;
    display: inline-block;
    width: 139px;
    height: 27px;
    border: none;
  }
  .D-btn {
    width: 70px;
    height: 28px;
    border: none;
    color: white;
    background: #0a83d7;
    border-radius: 3px;
    cursor: pointer;
  }
  .date {
    display: inline-block;
    width: 120px;
    height: 25px;
    border: 1px solid gray;
    margin-left: 7%;
    position: absolute;
    top: 17px;
    overflow: hidden;
    border-radius: 3px;
    background: white;
  }
  .ul1 {
    width: 120px;
    border: 1px solid rgb(182, 182, 182);
    position: absolute;
    left: 1020px;
    top: 43px;
    border-radius: 3px;
    background: white;
    //display: none;
    z-index: 5;
    margin-top:2px;
  }
  .ul1 li {
    width: 92%;
    height: 25px;
    line-height: 25px;
    text-align: left;
    border-bottom: 1px solid rgb(182, 182, 182);
    padding-left: 8px;

  }
  .ul1 li.lastli{
    border-bottom: none;
  }
  .s2 {
    line-height: 25px;
    font-size: 14px;
    padding-left: 7px;
    color: gray;
  }
  .s3 {
    font-size: 30px;
    margin-left: 10px;
    line-height: 26px;
    position: absolute;
    right: 0;
  }
  .D-order {
    display: inline-block;
    width: 120px;
    height: 25px;
    border: 1px solid gray;
    margin-left: 31%;
    position: absolute;
    top: 17px;
    overflow: hidden;
    border-radius: 3px;
    background: white;
  }
  /*中间*/
  .D-con1 {
    width: 100%;
    height: 60px;
    font-size: 16px;
  }
  .D-con1 span,
  .D-con1 div {
    display: inline-block;
    line-height: 60px;
  }
  .D-s1 {
    margin-left: 11%;
    margin-right: 18%;
  }
  .D-s2 {
    margin-right: 21%;
  }
  .D-con3-b {
    width: 100%;
    height: 70px;
    padding-bottom: 7px;
    border-bottom: 1px solid #ccc;
    background: white;
    margin-bottom: 10px;
    border-radius: 5px;
    padding-top: 26px;
  }
  .D-con3-b div,
  .D-con3-b span {
    display: inline-block;
  }
  .D-operate {
    width: 197px;
    height: 100px;
    margin-left: 8%;
  }
  .D-s7 {
    margin-left: 5%;
    width: 100px;
    height: 45px;
    border: none;
    background:#656369;
    color: white;
    border-radius: 5px;
    font-size: 14px;
  }
  .stareval {
    display: inline-block;
    width: 138px;
    height: 70px;
  }
  .D-s5 {
    color: red;
  }
  .D-s6 {
    width: 260px;
    height: 100px;
    margin-left: 5%;
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
  /*追加评论*/
  .d-addmask {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
  }
  .D-additional {
    width: 1000px;
    height: 400px;
    border: 1px solid darkgray;
    background: white;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -500px;
    margin-top: -200px;
  }
  .D-addleft {
    width: 250px;
    height: 200px;
    float: left;
    margin-top: 50px;
    margin-left: 50px;
  }
  .D-addright {
    margin-top: 50px;
    margin-left: 50px;
    float: left;
  }
  .D-addright span {
    font-size: 16px;
  }
  .D-preval {
    display: inline-block;
    width: 340px;
  }
  .D-pre {
    margin-bottom: 20px;
  }
  textarea {
    width: 587px;
  }
  .D-subbtn {
    width: 80px;
    height: 30px;
    border: none;
    color: white;
    background: #0a83d7;
    border-radius: 3px;
    cursor: pointer;
    margin-top: 60px;
    margin-left: 500px;
  }
  .D-addclose {
    cursor: pointer;
    font-size: 20px;
    position: absolute;
    top: 5px;
    right: 5px;
  }
  .noeval {
    font-size: 20px;
    color: red;
  }
  /*# sourceMappingURL=D-evaluate.css.map */
}

</style>