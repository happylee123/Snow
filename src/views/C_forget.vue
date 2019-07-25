<template>
  <div class="forget">
    <div class="d1">
      <div class="d2">忘记密码</div>
      <div>
        <span class="iconfont icon-group48"></span>
        <input type="text" id="ipt1" placeholder="请输入手机号" v-model="text.phone" @blur="Mphone" />
        <div class="div1" v-show="is.phone">{{wron.phone}}</div>
      </div>
      <div class="d3">
        <div class="d4">
          <span class="glyphicon glyphicon-comment"></span>
          <input type="text" placeholder="请输入验证码" id="ipt2" v-model="text.yz" />
           <div class="div1" id="yangzheng" v-show="is.yz">{{wron.yz}}</div>
        </div>
        <button class="btn1" id="btn2" :style="[sty]" :disabled='disbtn' @click="Myzbtn">{{yztext}}</button>
      </div>
        <button type="button" class="btn btn-primary b1" id="nextbtn" @click="Mforgetnext">下一步</button>

      <div class="d8"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "forget",
  data(){
      return {
          text:{
              phone:'',
              yz:''
          },
          is:{
              phone:false,
              yz:false
          },
          wron:{
              phone:'',
              yz:''
          },
          checkword:{
             phone:['不能为空','请输入正确的电话'],
             yz:['验证码不正确','验证码不正确']
          },
          reg:{
             phone:/[0-9]{11}/
          },
          sty:{
              'color':'#fff',
               'background-color': '#0a83d7'
            },
            yztext:'获取验证码',
            disbtn:false
      }
  },
  methods:{
    //验证封装
    fn(name,fn){
        if(!this.text[name].trim()){
        this.is[name]=true;      //是否显示错误提示
        this.wron[name]=this.checkword[name][0];  //错误提示的内容
        //this.isor[name]=false;               //返回一个false
        return false;
        }
        if(!this.reg[name].test(this.text[name])){
        this.is[name]=true;    
        this.wron[name]=this.checkword[name][1];
        //this.isor[name]=false;
        return false;
        }else{
            return fn()
        }  
    },
    Mphone(){
     let that=this;
     return this.fn('phone',function(){
          that.is.phone=false;
          return true;
      })
    },
   //点击获取验证码按钮效果
   Myzbtn(){
     //--------------------发送axios的请求发送验证码  
     let that=this
     this.sty={
              'color':'#fff',
              'background-color': '#bababa'
      }
     this.yztext=60;
     this.disbtn=true;
      let time=setInterval(function(){
        that.yztext--
        if(that.yztext==0){
          clearInterval(time);
          this.disbtn=false;
          that.sty={
              'color':'#fff',
              'background-color': '#0a83d7'
              };
          that.yztext='重新发送验证码';
        }
        
      }, 1000);
      
   },
   Mforgetnext(){
       let that=this;
       let phoneis=this.Mphone();
       if(phoneis){
            //---------------根据电话axios查询该用户的id
            this.$axios.post('/api/finduser',{
              params:{
                phone:this.text.phone
              }
            }).then((res)=>{
               let data=res.data.error
                if(data){
                  that.is.phone=true;
                  that.wron.phone='用户不存在';
                }else{
                  that.is.phone=false;
                  that.wron.phone='';
                  //-----------------进行验证码验证
                   if(this.text.yz=='5201314'){
                       that.is.yz=false;
                       that.wron.yz=''
                       that.$router.push({ name: 'changepass', params: { userId: res.data.data}})
                   }else{
                       that.is.yz=true;
                       that.wron.yz='验证码错误'
                       
                   } 
                }
            })
               
       }
   }
  }
};
</script>

<style scope lang='less'>
@import '../font/C_font/iconfont.css';
.forget {
  #nextbtn {
    background-color: #0a83d7;
    border: none;
    outline: none;
    color: #fff;
    &:hover {
      background-color: #2792df;
    }
  }
  .d1 {
    border: 1px solid #d6d6d6;
    border-radius: 8px;
    width: 451px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 2px 4px 5px #d6d6d6;
  }
  .d1 .d2 {
    text-align: center;
    font-size: 24px;
    height: 62px;
    line-height: 62px;
    width: 451px;
    margin-top: 0;
  }
  .d1 div {
    width: 369px;
    height: 49px;
    margin: 0 auto;
    border: 1px solid #d6d6d6;
    margin-top: 20px;
    border-radius: 6px;
    position: relative;
    z-index: -1;
  }
  .d1 .d2 {
    border: none;
  }
  .d1 input {
    height: 44px;
    vertical-align: middle;
    outline: none;
    border: 0px;
    margin-left: 10px;
  }
  .d1 .glyphicon {
    font-size: 20px;
    color: #bababa;
    line-height: 49px;
    position: absolute;
    left: 10px;
  }
  .d1 .btn1 {
    width: 130px;
    height: 49px;
    float: left;
    position: absolute;
    right: 0;
    background: #fbfbfb;
    border: 1px solid #f2f2f2;
    color: #c1c1c1;
  }
  .d1 .d3 {
    position: relative;
    border: 0px;
  }
  .d1 .d4 {
    float: left;
    width: 230px;
    margin: 0;
  }
  .d1 .d5 {
    position: relative;
    border: 0;
  }
  .d1 .d5 .d9 {
    width: 150px;
    height: 30px;
    border: 0;
    margin: 0;
    position: absolute;
    right: -31px;
    top: 14px;
  }
  .d1 .div1 {
  width: 371px;
  position: absolute;
  height: 24px;
  color: white;
  background: #eeeeee;
  border: 0;
  text-align: center;
  line-height: 30px;
  bottom: -18px;
  left: -1px;
  z-index: 10000;
  border-radius:0 0 6px 6px;
  // border:1px solid gainsboro;
  color: #3296dd;
  line-height: 24px;
  font-size: 12px;
}
#yangzheng{
      line-height: 35px;
       border-radius: 4px;
        width: 100px;
        right: -116px;
        position: absolute;
        height: 35px;
        color: #c23525;
        //background: #d16d62;
        border: 1px solid  #d16d62;
        top: -12px;
         background-color: #fff;
        text-align: center;
}
  .d1 .div2 {
    width: 120px;
    right: 10px;
    position: absolute;
    height: 30px;
    color: white;
    background: #d16d62;
    top: -13px;
    border: 0;
    display: none;
    text-align: center;
    line-height: 30px;
  }
  .d1 .div3 {
    width: 120px;
    right: 10px;
    position: absolute;
    height: 30px;
    color: white;
    background: #d16d62;
    top: -13px;
    border: 0;
    display: none;
    text-align: center;
    line-height: 30px;
  }
  .d1 .div4 {
    width: 120px;
    right: 10px;
    position: absolute;
    height: 30px;
    color: white;
    background: #d16d62;
    top: -13px;
    border: 0;
    display: none;
    text-align: center;
    line-height: 30px;
  }
  .d1 .dd {
    width: 350px;
    position: absolute;
    color: gray;
    z-index: 9999;
    box-shadow: 0 4px 9px 1px rgba(140, 155, 116, 0.24);
    left: 40px;
    font-size: 15px;
    background: white;
    height: auto;
    display: none;
  }
  .d1 .div5 {
    width: 350px;
    position: absolute;
    z-index: 9999;
    box-shadow: 0 4px 9px 1px rgba(140, 155, 116, 0.24);
    left: 40px;
    font-size: 15px;
    background: white;
    height: auto;
    display: none;
    top: 110px;
    color: gray;
  }
  .d1 .div6 {
    width: 350px;
    position: absolute;
    color: gray;
    z-index: 9999;
    box-shadow: 0 4px 9px 1px rgba(140, 155, 116, 0.24);
    left: 40px;
    font-size: 15px;
    background: white;
    height: auto;
    display: none;
    top: 318px;
  }
  .d1 .log-d1 {
    width: 350px;
    position: absolute;
    color: gray;
    z-index: 9999;
    box-shadow: 0 4px 9px 1px rgba(140, 155, 116, 0.24);
    left: 40px;
    font-size: 15px;
    background: white;
    height: auto;
    display: none;
    top: 302px;
  }
  .d1 .btn-primary {
    width: 369px;
    height: 48px;
    display: block;
    margin: 0 auto;
  }
  .d1 p {
    text-align: center;
  }
  .d1 .b1 {
    margin-top: 20px;
  }
  .d1 .d8 {
    border: 0;
    height: 30px;
  }
  .d1 .d10 {
    border: 0;
  }
  .d1 .d10 span {
    margin-left: 20px;
  }

  .d1 .d10 .qq,
  .d1 .d10 .wechat {
    font-family: "iconfont" !important;
    font-size: 23px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .d1 .inp1 {
    margin: 0;
    border-radius: 45px;
  }
  .d1 .inp2 {
    margin: 0;
    border-radius: 45px;
  }
  .d1 #btn1 {
    margin: 20px auto;
  }
  .d1 .img1 {
    margin-top: 25px;
    margin-left: 176px;
    display: block;
  }
  .d1 .img3 {
    display: block;
    margin: 0 auto;
  }
  .d1 .d11 {
    margin-top: 5px;
    border: 0;
    text-align: center;
    font-size: 24px;
  }
  .d1 .d12 {
    width: 200px;
    border-radius: 40px;
    text-align: center;
    line-height: 49px;
    color: white;
    background: #333333;
  }
  .d1 #btn2 {
      font-size:14px;
      border:none;
    height: 51px;
    background: #0a83d7;
    color: 14px;
    color: #fff;
    &:hover{
        background-color: #2792df;
    }
  }
  .d1 .d13 {
    border: 0;
    text-align: center;
    color: #070807;
    font-size: 20px;
  }
  .d1 .p1 {
    font-size: 15px;
  }
  /*# sourceMappingURL=C-lulu.css.map */
  #ipt1{
  width: 329px;
}
#ipt2{
     width: 220px;
}
#ipt2::-webkit-input-placeholder,#ipt1::-webkit-input-placeholder{
    color: #b4b4b4;
}
.iconfont{
  font-size: 16px;
  color: #b4b4b4;
  margin-left:14px;
  position: relative;
  top:px;
}
}
</style>
