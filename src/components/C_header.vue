<template>
  <div class="header">
    <div id="c_header">
      <!-- title -->
      <div id="c_nvebox">
        <div class="c_nve clear">
          <div class="log lf">logo</div>
          <div class="icon rf">
            <span>1+</span>
            <span>2+</span>
            <span>3+</span>
          </div>
        </div>
      </div>
      <!-- 列表 -->
      <div id="c_listbox">
         <a href="javascript:void(0);">首页</a>
          <a href="javascript:void(0);">单反</a>
          <a href="javascript:void(0);">微单</a>
          <a href="javascript:void(0);">镜头</a>
          <a href="javascript:void(0);">荣誉与奖项</a>
          <a href="javascript:void(0);">关于我们</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scope lang="less">
#c_header {
  color: #fff;
  margin-bottom: 100px;
  // title
  #c_nvebox {
    background-color: #272727;
    height: 50px;
    .c_nve {
      width: 1200px;
      margin: 0 auto;
      line-height: 50px;
      .icon{
        span{
          display: inline-block;
          margin-left: 20px;
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
     a{
       margin-right: 30px;
       &:hover{
         color: #202020;
         font-weight: bold;
       }
     }
  }
}
</style>
