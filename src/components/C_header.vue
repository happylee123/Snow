<template>
  <div class="header">
    <div id="c_header">
      <!-- title -->
      <div id="nve_1200">
        <div id="c_nvebox">
          <div class="c_nve clear">
            <div class="log lf">
              <a href="/">
                <img src="../assets/logoB.png" alt="" width="50px" id="logimg">
               </a>
            </div>
            <div class="icon rt">
              <router-link to='/personIndex'>
                <span class="iconfont">{{person}}</span>
              </router-link>
              <router-link to='/cart' target="_blank">
                <span class="iconfont">&#xf0179;</span>
              </router-link>
              <router-link to='/' target='_blank'>
                <span class="iconfont">&#xe60d;</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <!-- 列表 -->
      <div id="list_1200">
        <div id="c_listbox">
          <div style="width:1200px;margin:0 auto;background-color:#fff">
            <a href="/">首页</a>
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
export default {
  data(){
    return {
     person:'&#xe668'
    }
  },
  methods:{
    
  },
  mounted(){
    if(!localStorage.user){
      this.person='&#xe668';
    }else{
      this.person=this.$store.state.C_store.user.user_name;      
    }
  }
};
</script>

<style scope lang="less">
@import '../styles/C_pub.less';
.header{
  width: 100%;
}
#c_header {
  #logimg{
    position: relative;
    top: 6px;
  }
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
 #list_1200{
   width: 100%;
   background: #fff;
   box-shadow: 1px 4px 10px 1px #eeeeee;
 }
  //list
  #c_listbox{
     text-align: center;
     height: 60px;
     line-height: 60px;
     
     background-color: #fff;
     margin-bottom: 20px;


       a{
       padding: 2%;
       &:hover{
         color: #202020;
         font-weight: bold;
       }

     }
     
  }
}
</style>
