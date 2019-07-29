<template>
  <div class="complete">
    <!-- header -->
    <Cheader></Cheader>

    <!-- -------主体---------- -->
    <div id="f-compeletpay">
      <!-- 头 -->
      <div class="f-outhead">
        <div class="f-head">
          <p>支付订单</p>
          <ul>
            <li class="f-tu1">1.我的购物车</li>
            <li class="f-tu2">2.填写订单</li>
            <li class="f-tu3">3.完成订单</li>
          </ul>
        </div>
      </div>
      <!-- 中心1200px -->
      <div id="f-conplete_1200" class="center_1200">
        <div class="f-con_content">
          <p class="f-con_warn">! 温馨提示：订单中存在不支持7天无理由退换商品，请确认相关商品信息后提交订单。</p>
          <p class="f-con_nub_p">
            订单提交成功，请尽快付款！您的订单编号：
            <span class="f-con_number">{{order_num}}</span>
          </p>
          <div class="f-con_address">
            <p>
              收货地址：
              <span id="address_descrption">{{address}}</span>
            </p>
            <p>
              收货人：
              <span id="address_username">{{name}}</span>
            </p>
            <p>
              收货电话：
              <span id="address_username">{{tel}}</span>
            </p>
            <p>
              商品名称：
              <span id="product_name" > {{product_name}}</span> 
            </p>
          </div>
          <div class="f-con_paymethod">
            <div>支付方式</div>
            <button>在线支付</button>
          </div>
          <div class="f-con_RMB clear">
            <!-- <router-link id="pay_nowbtn" to="/pay"> -->
              <button class="btn_active rt f-con_nowpay" @click="Mtopay">立即支付</button>
            <!-- </router-link> -->
            <div class="F-con_RMB_number rt">
              应付金额：
              <span>
                RMB
                <span id="sum_proce">{{sum}}</span>
              </span>
            </div>
          </div>
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
  name: "compelet",
  data(){
      return {
        product_name:'',
        order_num:'',
        address:'',
        tel:'',
        name:'',
        sum:0,
        orderid:0
      }
  },
  components: {
    Cheader,
    Footer
  },
  methods:{
    Mtopay(){
      this.$router.push({path:'/pay',query:{ordernum:this.orderid}})
    }
  },
  mounted(){
    let order_id=this.$route.query.ordernum;
    this.orderid=order_id;
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
          proname+=data[k].main_head+'   ';
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
#f-compeletpay {
  background-color: #f5f5f5;
    padding-bottom: 100px;

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
                    color: #fff;
                }

                li.f-tu2 {
                    background: url("@{imgurl}car_active02.png") no-repeat 0 0;
                    background-size: 304px;

                }

                li.f-tu3 {
                    background: url("@{imgurl}car_active03.png") no-repeat 0 0;
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

    // 中心1200
    #f-conplete_1200 {
         width: 1200px;
         margin:0 auto;
        .f-con_content {
            margin-top: 16px;

            // 警告文字
            .f-con_warn {

                font-size: 12px;
                color: rgb(224, 14, 14);
                padding: 10px 0;
                border-bottom: 2px solid rgb(168, 168, 168);
            }

            .f-con_nub_p {
                padding-top: 16px;

                .f-con_number {
                    color: @colormain;

                }
            }

            .f-con_address {
                background-color: #fff;
                margin-top: 26px;
                padding: 36px 0;

                p {
                    padding-top: 16px;
                    padding-left: 14px;
                    color: rgb(134, 134, 134);
                    span{
                        color: rgb(134, 134, 134);
                    }
                }
            }

            .f-con_paymethod {
                background-color: #fff;
                margin-top: 26px;
                padding: 36px 0 36px 14px;
                div{
                    padding-bottom: 10px;
                    border-bottom: 1px solid rgb(202, 202, 202);
                }
                button{
                    margin-top: 16px;
                    width: 160px;
                    height: 36px;
                    line-height: 36px;
                    background-color: #fff;
                    text-align: center;
                    outline: none;
                    border: 1px solid @colormain;
                    color: @colormain;
                }
            }

            .f-con_RMB{
                background-color: #fff;
                margin-top: 26px;
                padding: 36px 14px 36px 0;
                .f-con_nowpay{   
                    width: 258px;
                    height: 54px;
                    margin-top: 0px;
                    background-color: @colormain;
                    color: #fff;
                    &:hover{
                        background-color:#016ac0;
                    }
                }
                .F-con_RMB_number {
                    margin-right: 20px;
                    span{
                        font-weight: bold;
                        font-size: 16px;
                        color: @colormain;

                    }
                   
                }
            }

        }

    }
}
</style>