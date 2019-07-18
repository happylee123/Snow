<template>
  <div id="app">
    <el-row id="top">
      <el-col :span="24">
        <div id="header">
          <div id="login">
            <span class="login-logo">logo</span>
            <span class="login-lo">
              登录\注册
              购物车
            </span>
          </div>
          <div id="nav" :span="24">
            <router-link tag="a" to="/">主页</router-link> 
            <router-link tag="a" to="/reaction">旗舰单反</router-link>
            <router-link tag="a" to="/microsheet">旗舰微单</router-link>
            <router-link tag="a" to="/lens">旗舰镜头</router-link>
            <router-link tag="a" to="/study">学习教程</router-link>
            <router-link tag="a" to="/C_Backstage">关于我们</router-link>
            <input class="search__input" type="text" name="" value="">
          </div>
        </div>
      </el-col>
    </el-row>
    <!-- 这是需要切换展示的内容 -->
    <router-view/>
    <!-- 尾部-->
    <pubfooter></pubfooter>
  </div>
</template>
<script>
import footer from "./components/Footer";

export default {
  components:{
    pubfooter:footer
  }
}
</script>

<style lang="less">
#top{
  background-color: #272727;
   color: #fff;
   a{
     color: #fff;
   }
}
#login{
  text-align: center;
  margin: 10px 0;
  .login-logo{
    margin-right: 680px;
  }
  .login-lo{
    margin-left: 200px;
  }
}
#nav{
  text-align: center;
  margin: 3px 0;
  padding: 10px 0 15 0;
  .search__input {
    // width: 100%;
    padding: 4px 20px;
    background-color: transparent;
    transition: transform 250ms ease-in-out;
    font-size: 14px;
    line-height: 18px;
    color: #575756;
    background-color: transparent;
    background-image: url(http://mihaeltomic.com/codepen/input-search/ic_search_black_24px.svg);
    background-repeat: no-repeat;
    background-size: 18px 18px;
    background-position: 98% center;
    border-radius: 50px;
    border: 1px solid #979797;
    transition: all 250ms ease-in-out;
    backface-visibility: hidden;
    transform-style: preserve-3d;

    margin-top: -16px;
  }

  .search__input::placeholder {
      color: rgba(87, 87, 86, 0.8);
      text-transform: uppercase;
      letter-spacing: 1.5px;
  }
  .search__input:hover,
          .search__input:focus {
      outline: 0;
      border-radius: 50px;
      background-position: 100% center;
      background: #e6e5e5;
      border: 1px solid #e6e5e5;
  }
  a{
    margin-right: 80px;
    padding: 2px;
  }
  a:hover {
    border-bottom: 2px solid #5389af;
  }
}

</style>
