<template>
    <div class="perserIndex">
      <!-- 头部 -->
      <Header></Header>
      <div id="E-boss" class="clearfix E-boss">
      <!----------------左边侧边栏列表------------------------------>
         <List></List>
        <div id="E-right-user" class="E-right" >
            <router-view></router-view>
        </div>
    </div>

      <!-- 尾部 -->
      <Footer></Footer>
     

    </div>
    
</template>
<script>
import Header from '../components/C_header';
import Footer from '../components/Footer';
import List from '../components/C_leftlist';
export default {
    name:"personIndex",
    components:{
        Header,
        Footer,
        List        
    },
    data(){
      return{
        img:'../assets/logo.png'
      }
    }
}
</script>
<style  scope lang="less" >
  body {
  background: #ededed;
}
.perserIndex{
   .E-boss {
  width: 1200px;
  margin: 80px  auto  0 auto;
  position: relative;
  margin-bottom: 16px;
}
#E-right-user{
 margin-bottom: 20px;
 min-height: 558px;
}
.E-right {
  width: 976px;
  border: #e6e6e6 solid 1px;
  border-radius: 10px;
  float: left;
  box-shadow: 4px 4px 8px 2px #ccc;
  overflow: hidden;
  min-height: 556px;
}
}



</style>
