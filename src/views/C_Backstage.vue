<template>
  <div class="Backstage">
    <!-- 头部 -->
    <Cheader></Cheader>

    <!-- 土体 -->
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
                <input type="checkbox" id="f-car_cheak_all" :checked="ischecked" @click="checkall" />
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
              <div class="f-car_product" v-for="(v,i) in data">
                <!-- 左 -->
                <div class="f-car_left f-car_p">
                  <input type="checkbox" class="f-car_singlecheck" :checked="ischecked" />
                </div>
                <!-- 右 -->
                <div class="f-car_right f-car_p">
                  <div class="f-car_pro01">
                    <div class="f-car_img n">
                        <!-- ---------------------------------?????图片 -->
                      <img src="${img_src}" alt="网络加载失败" />
                    </div>
                    <p class="n">
                        {{v.main_content}}{{v.main_head}}
                    </p>
                  </div>
                  <div class="f-car_pro02">
                    RMB:
                    <span class="f-car_sumsmall">{{v.price}}</span>
                  </div>
                  <div class="f-car_pro03">
                    <div class="clear">
                      <button class="f-car_relbtn" @click="reducenum(i)">-</button>
                      <input type="text" class="f-car_num" :value="v.cart_num" />
                      <button class="f-car_addbtn" @click="addnum(i)">+</button>
                    </div>
                    <p class="f-car_warntext"></p>
                  </div>
                  <div class="f-car_pro04">
                    RMB:
                    <span class="f-car_sumbig">{{smallprice(i)}}</span>
                  </div>
                  <div class="f-car_pro05 f-car_remove">删除</div>
                </div>

              </div>
            <!-- -- 1结束 ------>
            </div>
    
          </div>

          <!-- 结算 -->
          <!-- 结算 -->

          <div id="f-car_pay">
            <div class="f-car_btnbox clear">
              <div class="f-car_tools lf">
                <input type="checkbox" id="f-car_cheak_all2" :checked="ischecked" @click="checkall" />
                <span>全选</span>
                <span id="f-car_remove_ss">
                  <a href="javascript:void(0)">删除</a>
                </span>
                <!-- <a href="javascript:void(0)">移入收藏夹</a> -->
              </div>
              <div class="f-car_paybtn rt">
                <span>
                  总价: RMB &nbsp;
                  <span id="f-car_sumprice">{{sum}}</span>
                </span>
                <a id="f-car_topaybtn">
                  <button>
                    去结算(
                    <span id="f-car_pay_ss">0</span>)
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cheader from "../components/C_header";
export default {
  data() {
    return {
      msg:"jlkj",
      ischecked: false,
      writenum:"",
      data: [
          {
            cart_id: 8,
            cart_num: 23,
            class_id: 2,
            img_id: 4,
            img_src: "/img/B-img/m1.png",
            main_content: "超高清50000W像素",
            main_head: "索尼阿尔法5专业级单反",
            model_id: 2,
            price: 4299,
            priduct_id: 5,
            product_id: 5,
            second_body: "索尼阿尔法5专业级单反",
            second_content: "想拍就拍5",
            second_id: 2,
            second_name: "2000w",
            stock_num: 23,
            user_id: 1
          },
          {
            cart_id: 8,
            cart_num: 23,
            class_id: 2,
            img_id: 4,
            img_src: "/img/B-img/m1.png",
            main_content: "超高清50000W像素",
            main_head: "索尼阿尔法5专业级单反",
            model_id: 2,
            price: 4299,
            priduct_id: 5,
            product_id: 5,
            second_body: "索尼阿尔法5专业级单反",
            second_content: "想拍就拍5",
            second_id: 2,
            second_name: "2000w",
            stock_num: 23,
            user_id: 1
          },
          {
            cart_id: 1,
            cart_num: 35,
            class_id: 1,
            img_id: 2,
            img_src: "/img/B-img/m4.png",
            main_content: "超高清30000W像素",
            main_head: "索尼阿尔法3专业级单反",
            model_id: 3,
            price: 4399,
            priduct_id: 3,
            product_id: 3,
            second_body: "索尼阿尔法3专业级单反",
            second_content: "想拍就拍3",
            second_id: 3,
            second_name: "3000w",
            stock_num: 40,
            user_id: 1
          }
        ]

    };
  },
  methods: {
    checkall() {
      this.ischecked = !this.ischecked;
    },
    smallprice(i){
        var obj=this.data[i];
        return obj.price * obj.cart_num
    },
    addnum(i){
     return this.data[i].cart_num=this.data[i].cart_num+1;

    },
    reducenum(i){
        return this.data[i].cart_num=this.data[i].cart_num-1;
    }
    
  },
  computed:{
     sum(){
         var obj=this.data
         var sum=0;
         for(let i=0;i<obj.length;i++){
             sum+=obj[i].price*obj[i].cart_num
         }
         return sum
     }
  },
  components: {
    Cheader
  }
};
</script>
<style lang="less" scope>
@import "../styles/C_pub.less";

//-----------------------------
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
</style>


