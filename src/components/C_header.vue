<template>
  <div class="header">
    <div id="c_header">
      <!-- title -->
      <div id="nve_1200">
        <div id="c_nvebox">
          <div class="c_nve clear">
            <div class="log lf">logo</div>
            <div class="icon rt">
              <a href="">
                <span class="iconfont">&#xe668;</span>
              </a>
              <a href="">
                <span class="iconfont">&#xf0179;</span>
              </a>
              <a href="">
                <span class="iconfont">&#xe60d;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- 列表 -->
      <div id="list_1200">
        <div id="c_listbox">
            <div class="tag_a">
              <a href="/#/index">首页</a>
            <a href="/#/BCommodity">单反</a>
            <a href="/#/microsheet">微单</a>
            <a href="/#/lens">镜头</a>
            <a href="/#/study">荣誉与奖项</a>
            <a href="/#/aboutUs">关于我们</a>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scope lang="less">
@import '../styles/C_pub.less';
.header{
  width: 100%;
}
#c_header {
  
  color: #fff;
  #nve_1200{
      background-color: #272727;
       // title
  #c_nvebox {
    background-color: #272727;
    height: 50px;
    width: 1200px;
    margin: 0 auto;
    .c_nve {
      line-height: 50px;
      .icon{
        span{
          display: inline-block;
          margin-left: 20px;
          cursor: default;
        }
      }
    }
  }
  }
 
  //list
  #c_listbox{
     text-align: center;
     height: 60px;
     line-height: 60px;
     box-shadow: 1px 4px 10px 1px #eeeeee;
     .tag_a{
       width: 500px;
       margin:  0 auto;
       a{
       margin-right: 30px;
       &:hover{
         color: #202020;
         font-weight: bold;
       }
     }
     }
     
  }
}
</style>
