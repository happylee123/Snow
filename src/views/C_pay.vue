<template>
  <div class="rmb">

    <!-- -------主体---------- -->
    <div>
      <!-- 顶部 -->
      <div id="f-RMB_top">
        <p class="center_950">你好，欢迎您使用在线支付</p>
      </div>

      <!-- title -->
      <div id="f-RMB_title">
        <div class="center_950" style="background-color: #fff；height:40px;line-height:40px;">
          <!-- <img src="../assets/images/C_img/zfb.png" alt /> -->
          收银台
        </div>
      </div>

      <!-- 版心 -->
      <div id="f-RMB_content">
        <div class="center_950">
          <p class="font_12 border_b">正在使用即时到账交易, 交易将在1小时26分钟后关闭，请及时付款！</p>
          <div class="F-RMB_texts mrg_t16">
            <p class="f-RMB_h bold">QNDB2VLR</p>
            <p class="f-RMB_p">
              <span>收款方：</span>
              雷霆有限公司上海分公司
            </p>
            <p class="f-RMB_p">
              <span>订单号：</span>
              <span class="order_num">{{order_num}}</span>
            </p>
            <p class="f-RMB_p">
              <span>商品名称：</span>
              <span class="pro_name">{{product_name}}</span>
            </p>
            <p class="f-RMB_p">
              <span>商品描述：</span>
              <span class="pro_description">{{product_name}}</span>
            </p>
            <p class="f-RMB_s">
              <span class="bold font_18">
                <span class="pro_price1">{{sum}}元</span>
              </span>
            </p>
            <!-- 支付框 -->
            <div class="f-RMB_paybox">
              <p class="font_12 f-RMB_01">扫一扫付款</p>
              <p class="bold font_18 f-RMB_02">
                <span class="pay_pro_price">{{sum| price}}</span>
              </p>
              <p class="f-RMB_03">
                <img src="../assets/timg.jpg" alt class="f-RMB_erwimg" />
                <img src="../assets/images/C_img/zst.png" alt class="f-RMB_zstimg" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "rmb",
   data(){
      return {
        product_name:'',
        order_num:'',
        address:'',
        tel:'',
        name:'',
        sum:0
      }
  },
  filters:{
     price(v){   
         return v.toFixed(2);
     }    
  },
  mounted(){
    let order_id=this.$route.query.ordernum;
    console.log(order_id)
    //----------------请求订单信息
    this.$axios.post('/api/order/F_watch_order',{
      params:{
         order_id:order_id
      }
    }).then((res)=>{
      if(!res.data.error){
        let data=res.data.data;
        this.address=data[0].re_address;
        this.name=data[0].re_name;
        this.tel=data[0].re_tel;
        this.order_num=data[0].order_num;
        let proname='';
        let sum=0;
        for (let k = 0; k < data.length; k++) {
          proname+=' 、'+data[k].main_head;
          sum+=data[k].number * data[k].order_price;
        }
        this.product_name=proname;
        this.sum=sum;
        
      }else{
        console.log(res.data.err)
      }
      console.log(res.data)
    })
  }
};

</script>

<style scoped lang='less'>
@import "../styles/C_pub.less";
.rmb{
   .center_950 {
    margin: 0 auto;
    width: 950px
}

// top
#f-RMB_top {
    width: 100%;
    background-color: #81868b;
    height: 26px;

    p {
        text-align: right;
        color: #fff;
        font-size: 12px;
        line-height: 26px;
        background-color: #81868b;
    }

}

body{
    background-color: #eff0f1;
}

// title
#f-RMB_title {
    width:100%;
    background-color: #fff;
    box-shadow: 2px 2px 10px 2px rgb(180, 180, 180);

    img {
        margin: 10px 14px 0 0;
        padding-right: 10px;
        border-right: 1px solid #9fa0a1;

    }
}


//版心
#f-RMB_content {
   
    padding: 30px 0;
    width: 100%;
    //订单信息
    .f-RMB_p {
        font-size: 12px;
        padding-top: 4px;
        
        span {
            display: inline-block;
            font-size: 12px;
        }
    }

    //订单金额
    .f-RMB_s {
        text-align: right;

        span {
            color: #ff6600;
        }
    }

    //   支付盒子
    .f-RMB_paybox {
        background-color: #fff;
        padding:80px 0 100px 0;
        margin-top: 14px;
        border-top: 2px solid #ccc;
        border-bottom: 2px solid #ccc;
        p {
            text-align: center;
            margin-bottom: 6px;
        }
        p.f-RMB_01{
            color: #81868b;
        }
        p.f-RMB_02{
            color: #ff6600;
        }
        p.f-RMB_03{
            text-align: center;
            position: relative;
            .f-RMB_erwimg{
                widows: 250px;
                height: 250px;
            }
            .f-RMB_zstimg{
                position: absolute;
            }
            
        }
    }
}
}

</style>