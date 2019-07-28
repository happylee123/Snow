<template>
    <div class="leftlist">
      <!-- z主体 -->
       <div id="E-left">
        <div id="E-user">
            <div id="E-user-img">
                <img :src="img" alt="" width="50px">
            </div>
            <p id="E-user-name">{{this.$store.state.C_store.user.user_name}}</p>
        </div>
        
        <div id="E-list">
            <ul>
              <router-link to="/cart" target="_blank">
                <li id="E-shopping">购物车</li>
              </router-link> 
              <router-link to="/orderlist" >
                <li id="E-order-form">我的订单</li>
              </router-link>  
              <router-link to="/evaluate">
                <li id="E-comment">我的评价</li>
               </router-link> 
               <router-link to="/aftersale">
                <li id="E-help">售后服务</li>
               </router-link> 
               <router-link to="/address">
                <li id="E-address">收货地址</li>
                </router-link>
                <router-link to="/personIndex">
                <li id="E-me">个人中心</li>
                 </router-link>
            </ul>
        </div>
    </div>
    </div>
    
</template>
<script>
import store from '../vuex/store'
export default {
    store,
    name:"leftlist",
    data(){
        return{
          img:require('../assets/E-user-img.jpg')
        }
    }
    
}
</script>
<style lang='less' scope>
  #E-left {
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 4px 4px 8px 2px #ccc;
  overflow: hidden;
  float: left;
  background: white;
  margin-right: 20px;
}
#E-user {
  width: 200px;
  height: 120px;
  padding-top: 10px;
  text-align: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  padding: 20px 0 10px 0;
}
#E-user div {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-left: 60px;
  margin-top: 5px;
  border: 1px solid #0aa0f6 ;
  overflow: hidden;
}
#E-user img {
  width: 80px;
  height: 80px;
}
#E-user p {
  margin-top: 10px;
  font-size: 20px;
  text-align: center;
}
#E-list {
  margin-top: 10px;
  padding: 0 0 40px 0;
}
li {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 14px;
}
li:hover {
  background: #70a8ee;
  color: white;
  cursor: pointer;
}
.down-li {
  background: #70a8ee;
  color: white;
}
.E-scroll{
    position: absolute;
    top: 0;
    left: 0;
}
/*# sourceMappingURL=E-AfterSale.js.map */
</style>
