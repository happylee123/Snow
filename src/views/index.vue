<template>
  <div id="app" class="index">
    <el-row id="top">
      <el-col :span="24">
        <div id="header">
          <div id="login">
            <span class="login-logo">
              <img src="../assets/logoB.png" alt="" id="logo">
            </span>
            <span class="login-lo"> 
              <span id="load" :style="{color:color.login}" @click="Mlogin">{{login}}</span> 
                 /

                  <span :style="{color:color.register}" @click="Mregister">
                  {{register}}
                  </span>

              <router-link to='/personIndex' id="personcenter">个人中心</router-link>
              <router-link to='/cart' target="_blank" class="iconfont" id="carticon">&#xf0179;</router-link>            
            </span>
          </div>
          <div id="nav" :span="24">
            <router-link tag="a" to="/">主页</router-link> 
            <router-link tag="a" to="/BCommodity">旗舰单反</router-link>
            <router-link tag="a" to="/bdetails">旗舰微单</router-link>
            <router-link tag="a" to="/lens">旗舰镜头</router-link>
            <router-link tag="a" to="/A_study">学习教程</router-link>
            <router-link tag="a" to="/about">关于我们</router-link>
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
import footer from "../components/Footer";
import '../styles/C_pub.less';
import store from'../vuex/store';
export default {
  store,
  name:'index',
  data(){
    return {
       login:'登录',
       register:'注册',
       color:{
         login:"#45affc",
         register:"#fff"
       }
    }
  },
  components:{
    pubfooter:footer
  },
  methods:{
    Mlogin(){
      //做登录字符的判断
      if(this.login=='登录'){
        this.$router.push('/login');
      }else{
        this.$router.push('/personIndex');
      };
      
    },
    Mregister(){
      //做退出字符的判断
      if(this.register=='注册'){
        this.$router.push('/register');
      }else if(this.register=='退出'){

        //----确定退出弹框
         this.$confirm('确定退出吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          //type: 'warning'
        }).then(() => {      
           //-----------------------发起删除session的请求
          this.$axios.post('/api/C_exit').then((res)=>{
            if(!res.data.error){ 
              //储存localstotage和vuex
              this.$store.commit('delete');
              this.$router.push('/login');
            }
          })
         
        })


        
        
      
      };
    }
  },
  mounted(){
    let that=this;
    if(!localStorage.user){
      this.login='登录',
      this.register='注册'
    }else{
      this.login=this.$store.state.C_store.user.user_name;
       this.register='退出'
    }
  }
}
</script>


<style lang="less" scoped>
//logo
.index{
  #logo{
    width: 50px;
    position: relative;
    top: 6px;
  }
  //个人中心
  #personcenter{
    margin-left: 12px;
    &:hover{
      color: #e7e7e7;
    }
  }
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
    cursor: default;
    
    .login-logo{
      margin-right: 614px;
      
    
    }
    .login-lo{
      margin-left: 200px;
    }
    #carticon{
      margin-left: 10px;
      &:hover{
        color: #e7e7e7;
      }
    }
    #load{
      color:#45affc;
      
      &:hover{
        color:#82cbff;
      }
    }
  }
  #nav{
    text-align: center;
    margin: 3px 0;
    padding: 14px 0 14px 0;
    .search__input {
      // width: 100%;
      padding: 4px 20px;
      background-color: transparent;
      transition: transform 250ms ease-in-out;
      font-size: 14px;
      line-height: 18px;
      color: #575756;
      background-color: transparent;
      // background-image: url(http://mihaeltomic.com/codepen/input-search/ic_search_black_24px.svg);
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
}


</style>
