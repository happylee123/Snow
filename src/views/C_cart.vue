<template>
  <div class="cart">
    <!-- ---------头部 -------------->
    <Cheader></Cheader>

    <!--主体------------>
    <div id="mainbigbox">
      <div id="f-carbox">
        <!-- 1200px -->
        <div id="f-carcontent_box">
          <!-- 购物车头部 -->
          <div class="f-head">
            <p>我的购物车</p>
            <ul>
              <li class="f-tu1">1.我的购物车</li>
              <li class="f-tu2">2.填写订单</li>
              <li class="f-tu3">3.完成订单</li>
            </ul>
          </div>
          <!-- 主体-->
          <div id="f-carbody">
            <div class="f-carline">
              订单已免运费
              <span class="icon"></span>
            </div>
            <ul class="f-car_top">
              <li class="f-car_top01">
                <input type="checkbox" id="f-car_cheak_all" :checked="ischeckedall" @click="checkall" />
              </li>
              <li class="f-car_top02">全选</li>
              <li class="f-car_top03">商品信息</li>
              <li class="f-car_top04">单价</li>
              <li class="f-car_top05">数量</li>
              <li class="f-car_top06">小计</li>
              <li class="f-car_top07">操作</li>
            </ul>

            <!-- ---------商品大盒子开始------ -->
            <div id="F-carproduct_list">
              <!-- -- 1 ------>
              <div class="f-car_product" v-for="(v,i) in data" :key="i">
                <!-- 左 -->
                <div class="f-car_left f-car_p">
                  <input type="checkbox" class="f-car_singlecheck" :checked="ischeckedarr[i]" @click="paynumber(i)" />
                </div>
                <!-- 右 -->
                <div class="f-car_right f-car_p">
                  <div class="f-car_pro01">
                    <div class="f-car_img n">
                      <!-- ---------------------------------?????图片 -->
                      <img src="${img_src}" alt="网络加载失败" />
                    </div>
                    <p class="n">{{v.main_content}}{{v.main_head}}</p>
                  </div>
                  <div class="f-car_pro02">
                    RMB:
                    <span class="f-car_sumsmall">{{v.price | price}}</span>
                  </div>
                  <div class="f-car_pro03">
                    <div class="clear">
                      <button class="f-car_relbtn" @click="reducenum(i)">-</button>
                      <input type="text" class="f-car_num" v-model="msg[i]"  @input="input(i)" @change="numchange(i)"/>
                      <button class="f-car_addbtn" @click="addnum(i)">+</button>
                    </div>
                    <p class="f-car_warntext"></p>
                  </div>
                  <div class="f-car_pro04">
                    RMB:
                    <span class="f-car_sumbig">{{smallprice(i) | price}}</span>
                  </div>
                  <div class="f-car_pro05 f-car_remove" @click="deletep(i)" style="cursor: default;">删除</div>
                </div>
              </div>
              <!-- -- 1结束 ------>

              <!-- 出现暂时还没有购物商品页面 -->
              <div id="nothing" v-show="pp">
                 <p>亲，您购车暂时没有商品哟!</p>
              </div>
            </div>
           </div>


          <!-- 结算 -->
          <div id="f-car_pay">
            <div class="f-car_btnbox clear">
              <div class="f-car_tools lf">
                <input type="checkbox" id="f-car_cheak_all2" :checked="ischeckedall" @click="checkall" />
                <span>全选</span>
                <span id="f-car_remove_ss" @click="deletemore()">
                  <span href="javascript:void(0)">删除</span>
                </span>
                <!-- <a href="javascript:void(0)">移入收藏夹</a> -->
              </div>
              <div class="f-car_paybtn rt" @click="paynumber">
                <span>
                  总价: RMB &nbsp;
                  <span id="f-car_sumprice">{{sum| price}}</span>
                </span>
                <!-- <router-link id="f-car_topaybtn" to="/order"> -->
                   <button @click="Mtopay">
                    去结算(<span id="f-car_pay_ss" >{{paynum}}</span>)               
                  </button>
                <!-- </router-link> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ---------尾部----------->
    <Footer></Footer>

    <div>
      
    </div>
  </div>
</template>
<script>
import Cheader from "../components/C_header";
import Footer from "../components/Footer";
export default {
  name: "cart",
  data() {
    return {
      msg:[],
      smallqian:0,
      ischeckedall:false,
      ischeckedarr: [],
      paynum:0,
      writenum:"",
      data:'',
      pp:false,
      sum:0,
    };
  },
  methods: {
    //修改购物数量数据的修改
    numfn(that,i){
      console.log(that.data[i].cart_num)
      that.$axios.post('/api/F_savenumber',{
          params:{
            cartid:that.data[i].cart_id,
            number:that.data[i].cart_num
          }
        }).then((res)=>{
          if(res.data.error){
            console.log('修改数据错误')
          }
        })
    },
    //总价的封装
    Msum(that){     
         var sum=0;
         for(let i=0;i<this.ischeckedarr.length;i++){
           if(that.ischeckedarr[i]){
              sum+=that.data[i].price*that.data[i].cart_num;
           }
             
         }
         that.sum=sum;
    },
    checkall() {
      this.ischeckedall = !this.ischeckedall;
      
      for (let i = 0; i < this.ischeckedarr.length; i++) {    
          this.ischeckedarr[i]=this.ischeckedall;         
      };
      if(this.ischeckedall){
          this.paynum=this.ischeckedarr.length;
          this.Msum(this);
      }else{
          this.paynum=0;
          this.Msum(this);
      }
       //this.$options.methods.paynumber()
    },
    smallprice(i){
        var obj=this.data[i];
        this.smallqian=obj.price * obj.cart_num;
        return this.smallqian
    },
    addnum(i){
        let that=this;
        this.msg[i]=this.data[i].cart_num=this.data[i].cart_num+1;
        console.log(that.data[i].cart_num)
        //----------进行产品数据保存
         this.numfn(that,i);
         //sum
         var sum=0;
         for(let i=0;i<this.ischeckedarr.length;i++){
           if(that.ischeckedarr[i]){
              sum+=that.data[i].price*that.data[i].cart_num;
           }
             
         }
         that.sum=sum;
         console.log(sum)
    },
    reducenum(i){
      let that=this;
      if(this.msg[i]>1){
       this.msg[i]=this.data[i].cart_num=this.data[i].cart_num-1;
      }else if(this.msg[i]==1){
         this.msg[i]=1;
      }
        
        //----------进行产品数据保存
        this.numfn(that,i);
        //sum
         var sum=0;
         for(let i=0;i<this.ischeckedarr.length;i++){
           if(that.ischeckedarr[i]){
              sum+=that.data[i].price*that.data[i].cart_num;
           }
             
         }
         that.sum=sum;
         console.log(sum)
    },
    //单个点击计算购买数量
    paynumber(i){
      let sum=0;
      let num=0;
      this.ischeckedarr[i]=!this.ischeckedarr[i];
      console.log(this.ischeckedarr)    
      for (let i = 0; i < this.ischeckedarr.length; i++) {    
         if(this.ischeckedarr[i]){
            num=num+1;  
            sum+=this.data[i].price*this.data[i].cart_num;
                      
        }
      };
      this.sum=sum;
      console.log(this.sum,this.ischeckedarr)
      this.paynum=num;
      if(num!=this.data.length){
          this.ischeckedall=false;
      }else{
        this.ischeckedall=true;
      }
        
    },
    //inpu框输入的时候
    input(i){
      //当数值为真的时候，即不为空
          if(this.msg[i].trim()){
            //值不为数字的时
            if(!Number(this.msg[i])){
              //只有一个字符串时
              if(this.msg[i].length==1){
                  this.msg[i]=1;
              }else{
                 //多个字符串后值等于parseInt(this.msg[i])
                  this.msg[i]=parseInt(this.msg[i])
              }
      
            }
          }
    
      
  
               
    },
    //当inutp的值改变的时候
    numchange(i){
        let that=this;
        this.data[i].cart_num=this.msg[i];
        //方法调用
        this.numfn(that,i)
    },
    //删除单个商品
    deletep(i){
      let that=this;
       //---------------出现确认删除按钮
      this.$confirm('确定删除此产品', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            let _this=this;
            //---------------------------------在数据库删除商品
            that.$axios.post('/api/F_car_remove_ss',{
              params:{
                id:'['+that.data[i].cart_id+']'
              }
            }).then((res)=>{
              if(!res.data.error){
                that.paynum=0;
                //-----------------------重新加载产品
                    that.$axios.post("/api/F_car_productlis").then(function(res){  

                          let error=res.data.error;
                        //alert('xinxnxini')
                          if(error){
                            return         
                          }
                          if(!error){
                            if(res.data.data.length==0){
                              //---------------------------展示暂时没有购物商品的页面
                              that.ischeckedall=false;
                              that.pp=true;
                            }else{
                              that.pp=false;
                            }
                            //给that.data赋值
                            that.data=res.data.data;
                            that.ischeckedarr=[];
                            for (let k = 0; k < res.data.data.length; k++) {
                              //添加input里面的数量字符
                              that.msg.push(res.data.data[k].cart_num);
                              //给子多选框赋值为false
                            
                              that.ischeckedarr.push(false)
                            }
                            
                            
                          }
                    })      
              }
            })
            //---------------------------------在数据库删除商品  
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
          })
      

      
      },
    //删除多个商品
    deletemore(){
        let that=this;
        let ids=[];
        let is=0;
         for (let i = 0; i < this.ischeckedarr.length; i++) {    
            if(this.ischeckedarr[i]){
                 is++;
                 ids.push(this.data[i].cart_id);        
            }
          };
          
        if(!is){
          //没有商品提示弹框
          that.$alert('请选择购买商品', '', {
            confirmButtonText: '确定',
          });
        }else{
          console.log(JSON.stringify(ids))

         this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          //  --------------------------------------
             //-------------------请求删除产品
          that.$axios.post('/api/F_car_remove_ss',{
            params:{
              id:JSON.stringify(ids)
            }
           }).then((res)=>{
             if(!res.data.error){
               that.paynum=0;
                //----------------------------
                 that.$axios.post("/api/F_car_productlis").then(function(res){  

                  let error=res.data.error;
                 //alert('xinxnxini')
                  if(error){
                    return         
                  }
                  if(!error){
                    if(res.data.data.length==0){
                      //---------------------------展示暂时没有购物商品的页面
                      that.ischeckedall=false;
                      that.pp=true;
                    }else{
                       that.pp=false;
                    }
                    //给that.data赋值
                    that.data=res.data.data;
                     that.ischeckedarr=[];
                    for (let k = 0; k < res.data.data.length; k++) {
                      //添加input里面的数量字符
                      that.msg.push(res.data.data[k].cart_num);
                      //给子多选框赋值为false             
                      that.ischeckedarr.push(false)
                    }                                
                  }
            }) 
             
             }
             
            }) 


          //  --------------------------------------
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    
        
        
        
        
        //-------------------------------------------
        }
    
    },
    //去支付
    Mtopay(){
      //cart_id数组
      let ids=[];
      //计数
      let num=0;
      for (let k = 0; k < this.ischeckedarr.length; k++) {
        if(this.ischeckedarr[k]){
          num++;
         ids.push(this.data[k].cart_id);    
        }
      }
      //没有选中的产品
     if(num==0){
        this.$alert('请选择购买商品', '', {
            confirmButtonText: '确定',
        }); 
     }else{//有选中的产品
       this.$router.push({path:'/order',query:{cart:ids}});
     }

    }
    
  },
  watch:{
    
  },
  computed:{
   
  },
  filters:{
     price(v){   
         return v.toFixed(2);
     }    
  },
  components: {
    Cheader,
    Footer
  },
  mounted(){
    if(this.data.length==0){
      this.pp=true;
    }
    let that=this;
     this.$axios.post("/api/F_car_productlis").then(function(res){  

        let error=res.data.error;
       
        if(error){
          return         
        }
        if(!error){
          if(res.data.data.length==0){
            //---------------------------展示暂时没有购物商品的页面
          this.sum=0;
          that.pp=true;
          }else{
             that.pp=false;
          }
            //给that.data赋值
            that.data=res.data.data;
            console.log(that.data);
            
            for (let k = 0; k < res.data.data.length; k++) {
              //添加input里面的数量字符
              that.msg.push(res.data.data[k].cart_num);
              //给子多选框赋值为false
              that.ischeckedarr.push(false)
            }
          
        }
   })
  }
};
</script>


<style scoped lang="less">

@import "../styles/C_pub.less";

//-----------------------------
.cart{
   #mainbigbox {
  background-color: rgb(237, 237, 237);

  //-----------------------------
  #f-carbox {
    background-color: rgb(237, 237, 237);
    padding: 58px 0;
    width: 1200px;
    margin: 0 auto;
    //版心
    #f-carcontent_box {
      width: 1200px;
      margin: 0 auto;
      //header
      .f-head {
        height: 36px;

        p {
          line-height: 36px;
          font-size: 20px;
          float: left;
        }

        ul {
          font-size: 16px;
          list-style: none;
          float: right;

          li {
            text-align: center;
            float: left;
            width: 304px;
            line-height: 36px;
            background: url("@{imgurl}car01.png") no-repeat 0 0;
            background-size: 304px;
          }

          li.f-tu1 {
            color: #fff;
          }

          li.f-tu2 {
            background: url("@{imgurl}car02.png") no-repeat 0 0;
            background-size: 304px;
          }

          li.f-tu3 {
            background: url("@{imgurl}car03.png") no-repeat 0 0;
            background-size: 304px;
          }

          &::after {
            #clear();
          }
        }

        &::after {
          #clear();
        }
      }
    }
  }

  //主心内容
  #f-carbody {
    //线
    .f-carline {
      margin-top: 28px;
      height: 56px;
      line-height: 56px;
      text-align: right;
      border-bottom: 2px solid #ccc;
      .icon {
        display: inline-block;
        width: 18px;
        height: 18px;
        background: url("@{imgurl}tip1.png") no-repeat;
        position: relative;
        top: 4px;
      }
    }

    //头部标题
    .f-car_top {
      margin-top: 28px;
      margin-bottom: 26px;

      &::after {
        #clear();
      }

      li {
        float: left;
        color: rgb(17, 17, 17);

        #f-car_cheak_all {
          width: 16px;
          height: 16px;
        }
      }

      li.f-car_top02 {
        margin-left: 14px;
      }

      li.f-car_top03 {
        margin-left: 31px;
      }

      li.f-car_top04 {
        margin-left: 410px;
      }

      li.f-car_top05 {
        margin-left: 210px;
      }

      li.f-car_top06 {
        margin-left: 146px;
      }

      li.f-car_top07 {
        margin-left: 100px;
        color: rgb(155, 155, 155);
      }
    }

    //产品部分
    #F-carproduct_list{
      min-height: 600px;
      #nothing p{
        width: 1200px;
        height: 600px;
        background: #fff;
        text-align: center;
        line-height: 600px;
        font-size: 18px;
      }
    }
    .f-car_product {
      padding: 42px 30px 30px 14px;
      background-color: #fff;
      margin-bottom: 10px;

      &::after {
        #clear();
      }

      .f-car_p {
        float: left;
      }

      //    左边
      .f-car_left {
        input {
          width: 16px;
          height: 16px;
        }
      }

      // 右边
      .f-car_right {
        margin-left: 18px;

        &::after {
          #clear();
        }

        //1
        .f-car_pro01 {
          .n {
            float: left;
          }

          .f-car_img {
            width: 112px;
            height: 112px;
            border: 1px solid #e5e5e5;
            line-height: 112px;

            img {
              width: 100%;
              height: 100%;
            }
          }

          p {
            width: 336px;
            margin-left: 14px;
          }
        }

        .f-car_pro02 {
          margin-left: 46px;
          width: 204px;
        }

        .f-car_pro03 {
          width: 176px;

          button,
          input {
            outline: none;
            width: 34px;
            height: 34px;
            float: left;
            border: 1px solid #eeeeee;
            background-color: #ededed;
            outline: none;
          }
          input {
            height: 32px;
            text-align: center;
            background-color: #fff;
          }

          .f-car_warntext {
            width: 102px;
            border: 1px solid rgb(182, 182, 182);
            margin-top: 2px;
            color: rgb(128, 128, 128);
            padding: 2px 0;
            text-align: center;
            display: none;
          }
        }

        .f-car_pro04 {
          color: @colormain;
          width: 162px;
        }

        .f-car_pro05 {
          color: #aaaaaa;
          cursor: pointer;
          &:hover {
            color: @colormain;
          }
        }
      }

      .f-car_right > div {
        float: left;
      }
    }
  }

  //pay

  #f-car_pay {
    margin-top: 50px;
    padding: 30px 36px 30px 36px;
    background-color: #fff;
    //border-top: 1px solid rgb(168, 168, 168);
    box-shadow: 1px 1px 10px 1px rgb(212, 212, 212);

    // border-top:1px solid #ccc;
    &::after {
      #clear();
    }

    .f-car_btnbox {
      border-top: 1px dashed #999;
      .f-car_tools {
        padding-top: 30px;
        #f-car_cheak_all2 {
          width: 16px;
          height: 16px;
          position: relative;
          top: 4px;
        }
        span {
          margin-right: 20px;
        }
        a {
          color: #0f80d1;
          &:hover {
            color: #2293e4;
          }
        }
      }
    }

    .f-car_paybtn {
      padding-top: 30px;

      span {
        color: @colormain;
        font-size: 20px;
      }

      button {
        outline: none;
        border: none;
        width: 214px;
        height: 50px;
        background-color: @colormain;
        color: #fff;
        margin-left: 16px;
        font-size: 20px;

        &:hover {
          background-color: #0474c4;
        }
      }
      #f-car_pay_ss {
        color: #fff;
      }
    }
  }
}
}

</style>