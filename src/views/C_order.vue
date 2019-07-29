<template>
  <div id="order">
    <!-- header -->
    <Cheader></Cheader>
    <!-----主体 ------>

    <div id="f-pay">
      <!-- 头 -->
      <div class="f-outhead">
        <div class="f-head">
          <p>填写订单</p>
          <ul>
            <li class="f-tu1">1.我的购物车</li>
            <li class="f-tu2">2.填写订单</li>
            <li class="f-tu3">3.完成订单</li>
          </ul>
        </div>
      </div>
      <!-- 中心1200px -->
      <div id="f-pay_content">
        <!-- 收货地址 -->
        <div class="f-address">
          <p class="f-addtitle">填写并核对订单信息</p>
          <div class="f-addtext clear">
            <p class="lf f-lef">收货地址</p>
            <p class="rt f-rig">
              <a href="javascript:return false" class="f-margan">管理收地址</a>
              <a href="javascript:return false" class="f-ad">新添收货地址</a>
            </p>
          </div>
          <!-- 地址标签 -->
          <div class="f-addressdescrption clear">
            <!-- -------111--------- -->
           
            <div class="f-addressone clear lf " v-for="(v,i) in address"  :class="{borderactive:timeIndex === i} "   @click="ischoose(i)" :key="i">
              <p class="f-addressname">
               {{ v.add_name}}
                <span class="rt">{{ v.add_tel}}</span>
              </p>
              <p class="f-addresstext">{{v.sheng}}  {{ v.shi}}  {{ v.xian}}  {{ v.add_all}}</p>
            </div>
            
          </div>
        </div>
        <!-- 支付方式 -->
        <div class="f-paymothd mrg_t16">
          <div class="f-mothdtitle">支付宝</div>
          <ul>
            <li class="btn_active">在线支付</li>
          </ul>
        </div>
        <!-- 确认订单信息 -->
        <div class="f-confire mrg_t16 pad_36">
          <p class="f-title">确认订单信息</p>
          <p class="f-confiretitle">
            <span>商品信息</span>
            <span class="f-span2">单价</span>
            <span class="f-span3">数量</span>
            <span class="f-span4">小计</span>
          </p>

          <!-- ---订单产品列表---------- -->
          <div id="f-pay_product_orderlist">
            <!-- -----单个商品信息1 ------->
            <div class="f-product clear" v-for="(v,i) in data" :key="i">                
              <div class="f-pro01 ">
                  <div class="f-img lf">
                      <img src="../assets/images/C_img/img_ilce_9_b.jpg" alt="网络加载失败">
                  </div>
                  <p class="rt">{{v.main_head}}{{v.main_content}}</p>
              </div>
              <div class="f-pro02" >
                  RMB <span class="f-pay_order_singleprice">{{v.price | price}}</span>
              </div>
              <div class="f-pro03 f-pay_order_number" >{{v.cart_num}}</div>
              <div class="f-pro04" >
                  RMB <span class="f-pay_smallsum">
                    {{v.cart_num * v.price | price}}
                  </span>
              </div>
          </div>
          <!-- -----单个商品信息1 ------->
        </div>
        </div>
        <!-- 配送 -->
        <ul class="f-send clear pad_36 mrg_t16">
          <li class="lf">
            <p>订单备注</p>
            <textarea rows="4" placeholder="选填留下你的私人小要求" id="textarea" v-model="beizhu"></textarea>
          </li>
          <li class="f-right rt f-to">
            <p>配送方式</p>
            <button class="btn_active">普通物流</button>
          </li>
        </ul>
        <!-- 发票信息 -->
        <div class="f-ticket mrg_t16 pad_36">
          <p class="font_16 padtb_16 f-title">
            发票信息
            <span class="font_12">！请查对确认发票信息，发票一经来票，抬头无法修改，点击关于电子发票查看更多</span>
          </p>
          <div class="mrg_t32 f-watch font_12">
            发票类型：电子发票
            <a href="F-tickt.html" class="font_12">电子发票样张</a>
          </div>
          <div class="f-ticketset mrg_t24 clear" >
            <span class="font_12 lf">发票抬头:</span>
            <!-- 下拉框 -->
             <div class="f-down lf" @mouseleave="hide">
              <div class="f-downtop" @click="isshow"  >
                <span>{{text}}</span>
                <div class="f-sanjiao" :class="{sanjiao_top:issanjia}"></div>
              </div>
              <ul class="f-select" v-show="isoption"  >
                <li class="f-downperson f-downli" v-for="(v,i) in tiketarr" :class="{li_active:i===istiket}" :key="i" @mouseover="tiketactive(i)" @click="litext(i)" >{{v}}</li>
               
              </ul>
            </div>
            <input type="text" class="lf" placeholder="请输入抬头，最多输入100字" />
          </div>
          <p
            class="f-warn"
          >*由于页面设置、打印格式等原因，最终寄送给您的订购明细或发票上印刷的各商品信息（包括名称、单价、总价）可能与本网页目前显示有所差异，但订单的 商品合计金额不会变化</p>
        </div>
        <!--  条款  -->
        <div class="f-clause mrg_t16 pad_36 clear">
          <!-- 上 -->
          <div class="f-top clear">
            <!-- 左 -->
            <div class="f-leftbox lf">
              <ul class="clear">
                <li v-for="(v,i) in checkaarr" :key='i'>
                  <input type="checkbox" class="f-pay_tiaokuan" :checked='v.is'  @click="Mchoosesinge(i)" />
                  <a href="./F-01noresontext.html">{{v.text}}</a>
                </li>
              </ul>
            </div>
            <!-- 右 -->
            <button class="rt" id="f-pay_agreenall" @click="Mchoosetk">{{alltext}}</button>
          </div>
          <!-- 下 -->
          <div class="f-button">
            <p>
              共：
              <span class="f-numb rmb">{{data.length}}</span> 件商品，总商品金额： RMB
              <span class="rmb f-pay_RMBsum">{{sum | price}}</span>
            </p>
            <p class="freight">
              运费： RMB
              <span class="rmb f-sunfei">0.00</span>
            </p>
          </div>
        </div>
        <!-- 去支付 -->
        <div class="f-topayRMB">
          <p class="f-payRMB">
            应付金额:RMB
            <span class="rmb" id="f-sumprice">{{sum | price}}</span>
          </p>
          <p class="f-sendaddress font_12">
            寄送至：
            <span class="font_12">
              {{chooseadr}}
            </span>
          </p>
          <!-- <router-link to="/compelet"> -->
            <button id="f-gopaybtn" @click="Mcommit">提交订单</button>
          <!-- </router-link> -->
        </div>
      </div>
    </div>

    <!-- 尾部 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Cheader from "../components/C_header";
import Footer from "../components/Footer";
export default {
  name: "order",
  data() {
    return {
      isallcheck:false,
      alltext:'全部同意',
      issanjia:false,
      isoption:false,
      timeIndex:0,
      isborder:true,
      beizhu:'',
      istiket:0,
      text:'个人',
      checkaarr:[{is:false,text:'7天无理由退货须知'},{is:false,text:'其他条款'}],
      chooseadr:'成都市 锦江区 三圣街道 锦蓉佳苑小区 收货人：李雪18708182069',
      tiketarr:["个人","公司"],
      address: [],
      data:[]
    };
  },
  
  methods:{
    ischoose(index){
      this.timeIndex=index;
      let address=this.address[index]
      this.chooseadr=address.sheng+address.shi+address.xian+address.add_all+address.add_name+address.add_tel;

    },
    // 发票的下拉框显示
    isshow(){
      this.isoption=!this.isoption;
      this.issanjia=!this.issanjia;
      //alert("点点")
    
    },
    //票据显示
    tiketactive(i){
      this.istiket=i;
    },
    //下拉框消失
    hide(){  
       this.isoption=false;
       this.issanjia=!this.issanjia;
    },
    //选择了发票，信息变换
    litext(i){
     this.isoption=false;
     this.text=this.tiketarr[i];
    },
    //提交订单
    Mcommit(){
      
      //判断有没有选择条款
      let num =0;
      for (let j = 0; j < this.checkaarr.length; j++) {
        if(this.checkaarr[j].is){
          num++;
          //orderinfo.product_ids=this.data[j].product_id
        }
      }
      if(num!=2){
         this.$alert('请查看条款', '', {
            confirmButtonText: '确定',
        }); 
        return
      }
      //--------------需要传入的数据集合
      let orderinfo={};
      //产品id
      let proids=[];
      //购买数量
      let paynumber=[];
      //订单金额
       let price=[];
      //订单状态
       let state=[];
      //收货地址
       let  relname=[];
       let  retel=[];
       let  adress=[];
       //订单备注
       let beizhu=[];
       //购物车id
       let cart_id=[];
      for (let k = 0; k < this.data.length; k++) {
         proids.push(this.data[k].product_id);
         paynumber.push(this.data[k].cart_num);
         price.push(this.data[k].price);
         state.push(1);
         let adr=this.address[this.timeIndex];
         relname.push(adr.add_name);
         retel.push(adr.add_tel);
         adress.push(adr.sheng+adr.shi+adr.xian+adr.add_all);
         beizhu=this.beizhu; 
         cart_id.push(this.data[k].cart_id) 
      }
      orderinfo.product_ids=proids;
      orderinfo.paynumber=paynumber;
      orderinfo.price=price;
      orderinfo.state=state;
      orderinfo.relname=relname;
      orderinfo.retel=retel;
      orderinfo.adress=adress;
      orderinfo.beizhu=beizhu;
      orderinfo.cart_id=cart_id;
      console.log(orderinfo)
      
      if(num==2){
      //--------------axios保存订单
        this.$axios.post('/api/F_save_orderlist',{
          params:{
            info:JSON.stringify(orderinfo)
          }
        }).then((res)=>{
         if(!res.data.error){
            this.$router.push({path:'/compelet',query:{ordernum:res.data.data}})
         }else{
           alert('保存失败')
         }
        })
         
      }
    },
    //全部选择条款
    Mchoosetk(){
      this.allcheck=!this.allcheck;
      if(this.allcheck){
        this.alltext='全部同意'
      }else{
        this.alltext='全部取消'
      }
       for (let i = 0; i < this.checkaarr.length; i++) {
         this.checkaarr[i].is=this.allcheck;        
       }
    },
    Mchoosesinge(i){
      this.checkaarr[i].is=!this.checkaarr[i].is;
    }
    
  },
   filters:{
     price(v){   
         return v.toFixed(2) 
     }    
  },
  computed:{
    sum(){
      let sum=0;
      for (let i = 0; i < this.data.length; i++) {
        sum=sum+this.data[i].cart_num * this.data[i].price
      }
      return sum;
    }
  },
  components: {
    Cheader,
    Footer
  },
  mounted() {
  let that =this;
   //接收数据 
   let ids=this.$route.query.cart;
   // --------------用axios获取地址
      this.$axios.post("/api/F_address").then((res)=>{
            if(!res.data.error){
              console.log(res.data.data)
              that.address=res.data.data
            }
      })

      // --------------用axios获取订单列表
        this.$axios.post("/api/F_orderlist",{
          params:{
            id:JSON.stringify(ids)
          }
        }).then((res)=>{
            if(!res.data.error){
              this.data=res.data.data
            }
             console.log(res.data.data)   
      })
   
      
    

   
    
  }

};
</script>

<style scoped lang='less'>
@import "../styles/C_pub.less";
#order{


.f-downli {
  background-color: #fff;
}

#f-pay {
  background-color: #f5f5f5;
  padding-bottom: 100px;
  width: 100%;
  //header头
  .f-outhead {
    background-color: #fff;

    .css3(box-shadow, 2px 1px 10px 1px rgb(230, 230, 230));

    .f-head {
      background-color: #fff;
      height: 36px;
      width: 1200px;
      margin: 0 auto;
      padding: 30px 0;

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
          background: url("@{imgurl}car_active02.png") no-repeat 0 0;
          background-size: 304px;
          color: #fff;
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

  //中心1200px
  #f-pay_content {
    width: 1200px;
    margin: 0 auto;
    #f-pay_content > div {
      margin-bottom: 10px;
    }
    //地址
    .f-address {
      margin-top: 30px;
      padding: 20px 36px 56px 36px;
      // background: #fff url("../../../../img/F-img/fenge_bar.jpg" ) no-repeat ;
      background-position: bottom;
      .f-addtitle {
        font-size: 16px;
      }

      .f-addtext {
        margin-top: 40px;
        padding: 14px 0;
        border-bottom: 1px solid #e4e4e4;

        .f-rig {
          .f-margan {
            margin-right: 24px;
            color: #999;

            &:hover {
              color: rgb(126, 126, 126);
            }
          }

          .f-ad {
            color: @colormain;

            &:hover {
              color: #016ac0;
            }
          }
        }
      }
      .f-addressdescrption {
        
        .f-addressone {
          cursor: default;
          width: 254px;
          border: 1px solid rgb(228, 227, 227);
          padding: 10px 20px;
          margin: 16px 16px 0 0;
          .f-addressname {
            font-size: 18px;
            span {
              font-size: 14px;
              color: rgb(138, 138, 138);
            }
          }
          
          .f-addresstext {
            width: 100%;
            margin-top: 12px;
            color: rgb(138, 138, 138);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
        .borderactive{
           border: 1px solid @colormain;
          }
          .default{
            color: #404040;
            background: #f8f8f8;
          }
      }
    }

    //支付方式
    .f-paymothd {
      padding: 16px 36px 32px;

      .f-mothdtitle {
        padding: 18px 0;
        border-bottom: 1px solid #ccc;

        a {
          margin-left: 20px;
          color: @colormain;

          &:hover {
            color: #016ac0;
          }
        }
      }

      ul {
        margin-top: 16px;

        li {
          border: 2px solid @colormain;
        }
      }
    }

    //确认订单信息
    .f-confire {
      //title
      .f-title {
        font-size: 16px;
      }

      //titletet
      .f-confiretitle {
        padding: 16px 0;
        border-bottom: 1px solid #ccc;

        .f-span2 {
          margin-left: 494px;
        }

        .f-span3 {
          margin-left: 236px;
        }

        .f-span4 {
          margin-left: 144px;
        }
      }
    }

    //商品信息
    .f-product {
      padding: 12px 0 30px 0;
      border-bottom: 1px solid #e5e5e5;
      margin-bottom: 10px;
      .f-pro01 {
        .f-img {
          width: 112px;
          height: 112px;
          border: 1px solid #e5e5e5;

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

      .f-pro02 {
        margin-left: 90px;
        width: 270px;
      }

      .f-pro03 {
        width: 80px;
      }

      .f-pro04 {
        width: 220px;
        text-align: center;
      }
    }

    .f-product > div {
      float: left;
    }

    //配送
    .f-send {
      li {
        width: 516px;

        p {
          padding: 12px 0;
          border-bottom: 1px solid #ccc;
        }

        textarea {
          margin-top: 16px;
          border: 1px solid #ccc;
          width: 512px;
        }
      }
    }

    //发票
    .f-ticket {
      .f-title {
        span {
          color: #ff6131;
        }
      }

      .f-watch {
        a {
          color: @colormain;
          &:hover {
            color: #0a6ad7;
          }
        }
      }
      .f-ticketset {
        height: 40px;
        line-height: 40px;
        .f-down {
          height: 100%;
          position: relative;
          text-indent: 10px;
          .f-downtop {
            position: relative;
            height: 100%;
            width: 194px;
            border: 1px solid @colormain;
            margin-left: 8px;

            .f-sanjiao {
              width: 0;
              height: 0;
              border: 6px solid transparent;
              border-top: 6px solid @colormain;
              position: absolute;
              top: 18px;
              right: 20px;
            }
            .sanjiao_top{
              width: 0;
              height: 0;
              border: 6px solid transparent;
              border-bottom: 6px solid @colormain;
              position: absolute;
              top: 10px;
              right: 20px;
            }
          }

          .f-select {
            position: absolute;
            left: 8px;
            top: 42px;
            border: 1px solid #ccc;
            border-top: none;
            li {
              width: 194px;
              height: 40px;
            }
            .li_active{
              background: @colormain;
              color: #fff;
            }
          }
        }
        input {
          width: 574px;
          height: 100%;
          text-indent: 14px;
          border: 1px solid #dadada;
          margin-left: 10px;
        }
        .f-tishi {
          padding-top: 34px;
          font-size: 12px;
          color: #bdbdbd;
        }
      }
      .f-warn {
        padding-top: 34px;
        font-size: 12px;
        color: rgb(145, 145, 145);
      }
    }

    //条款
    .f-clause {
      font-size: 12px;
      //上
      .f-top {
        border-bottom: 1px solid #ccc;
        padding-bottom: 16px;
        .f-leftbox {
          ul li {
            float: left;
            margin-right: 60px;
          }
          input {
            width: 14px;
            height: 14px;
            position: relative;
            top: 2px;
          }
          a {
            &:hover {
              color: @colormain;
            }
          }
        }
        button {
          width: 260px;
          height: 40px;
          background-color: @colormain;
          color: #fff;
          text-align: center;
          line-height: 40px;
          border: none;
          outline: none;
          &:hover {
            background-color: #016ac0;
          }
        }
      }
      //下
      .f-button {
        padding: 20px 0;
        text-align: right;
        font-size: 16px;
        p {
          text-align: right;
          padding-bottom: 10px;
        }
      }
    }

    //去支付
    .f-topayRMB {
      background-color: #f5f5f5;
      text-align: right;
      padding: 20px 36px;
      font-size: 16px;

      p {
        padding-bottom: 10px;
      }
      p.f-sendaddress {
        color: #8f8f8f;
        span {
          color: #8f8f8f;
        }
      }
      button {
        width: 260px;
        height: 56px;
        text-align: center;
        line-height: 56px;
        color: #fff;
        outline: none;
        border: none;
        background-color: @colormain;
        font-size: 16px;
        &:hover {
          background-color: #016ac0;
        }
      }
    }
  }

  #f-pay_content > div,
  #f-pay_content > ul {
    background-color: #fff;
  }
}

#f-pay #f-pay_content .f-address .f-addressdescrption .active_border {
  border: 1px solid #0b82e4;
}

}
</style>