<template>
    <div class="changepass">
    <div class="d1">
        <div class="d2">修改密码</div>
        <div>
        <input type="password" class="inp1" placeholder="新密码" @input="Mpass" @blur="Mpass" v-model="text.pass">
            <div class="div1" v-show="is.pass">{{wron.pass}}</div>
        </div>
        <div class="div5"></div>
           <div>
        <input type="password"  class="inp2" placeholder="再次输入密码" @input="Mconfpass" v-model="text.confpass">
        <div class="div1" v-show="is.confpass">{{wron.confpass}}</div> 
           </div>
        <button type="button" class="btn btn-primary" id="btn1" @click="Mupdate">确定更改密码</button>

    </div>


    </div>
</template>

<script>
export default {
    name:'changepass',
    data(){
         return {
          text:{
              pass:'',
              confpass:''
          },
          is:{
              pass:false,
              confpass:false
          },
          wron:{
              pass:'',
              confpass:''
          },
          checkword:{
             pass:['不能为空','请输入字母开头至少8-12位，包括（字母、数字）'],
             confpass:['不能为空','请输入字母开头至少8-12位，包括（字母、数字）']
          },
          reg:{
             pass:/[a-zA-Z0-9]{3,}/,
             confpass:/[a-zA-Z0-9]{3,}/
          }
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
        //密码
        Mpass(){
            let that=this;
            return this.fn('pass',function(){
                        that.is.pass=false;
                        return true;
                    })
        },
        //确认密码
        Mconfpass(){
            let that=this;
          return  this.fn('confpass',function(){
                that.is.confpass=false;
            
                if(that.text.confpass==that.text.pass){
                    that.is.confpass=false;
                    that.wron.confpass='';
                return true;
                }else{
                that.is.confpass=true;
                that.wron.confpass='两次密码不一致';
                return false;
                }
                
            })
        },
        //确定修改按钮
        Mupdate(){
            let id=this.$route.params.userId
            let that=this;
            if(this.Mpass() && this.Mconfpass()){
            //--------------------axios修改密码的请求
            this.$axios.post('/api/apdatepass',{
                parmas:{
                    userid:id,
                    pass:this.text.pass
                }
            }).then((res)=>{
                let data=res.data.error;
                if(!data){
                   //修改密码成功弹窗
                      that.$alert('修改密码成功', '成功', {
                      confirmButtonText: '确定',
                        callback: action => {
                        that.$router.push("/")
                        }
                    });
                }else{
                     //修改失败成功弹窗
                      that.$alert('修改密码失败', '失败', {
                      confirmButtonText: '确定',
                        callback: action => {
                        that.$router.push("/")
                        }
                    });
                }
            })

        
            
            }  
        }
    },
    mounted(){
        let id=this.$route.params.userId;
        if(!id){
            this.$router.push('/');
            return;
        }

    }
}
</script>

<style lang="less" scope>
       .changepass{
        #nextbtn{
            background-color: #0a83d7;
            border: none;
            outline: none;
            color: #fff;
            &:hover{
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
        .d1 .d2{
        border:none;
        }
        .d1 input {
        height: 44px;
        vertical-align: middle;
        outline: none;
        border: 0px;
        margin-left: 30px;
        text-indent: 10px;
        }
        .d1 input::-webkit-input-placeholder{
            color: #b4b4b4;
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
        
        }
          #btn1{
              border:none;
            background:#0a83d7;
            outline: none;
            color: #fff;
            &:hover{
                    background-color: #2792df;
                }
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
        margin: 24px auto;
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
        font-size: 25px;
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
    }
</style>