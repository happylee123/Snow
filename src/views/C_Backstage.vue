<template>
  <div class="Backstage">
     <!-- 头部 -->
     <Cheader></Cheader>
     <!-- 土体 -->
        <div id="f-carbody">
                <div class="f-carline">
                    订单已免运费
                    <span class="icon"></span>
                </div>
                <ul class="f-car_top">
                    <li class="f-car_top01">
                        <input type="checkbox" id="f-car_cheak_all">
                    </li>
                    <li class="f-car_top02">
                        全选
                    </li>
                    <li class="f-car_top03">
                        商品信息
                    </li>
                    <li class="f-car_top04">
                        单价
                    </li>
                    <li class="f-car_top05">
                        数量
                    </li>
                    <li class="f-car_top06">
                        小计
                    </li>
                    <li class="f-car_top07">
                        操作
                    </li>
                </ul>

                <!-- ---------商品大盒子开始------ -->
                <div id="F-carproduct_list">
                    <!-- -- 1 ------>
                    <div class="f-car_product"  data-car_id="${cart_id}" data-product_id="${product_id}">
                      <!-- 左 -->
                      <div class="f-car_left f-car_p">
                          <input type="checkbox" class="f-car_singlecheck" :checked="ischecked">
                      </div>
                      <!-- 右 -->
                      <div class="f-car_right f-car_p">
                          <div class="f-car_pro01">
                              <div class="f-car_img n">
                                  <img src="${img_src}" alt="网络加载失败">
                              </div>
                              <p class="n">
                                你是沃尔德魅力在哪里
                              </p>
                          </div>
                          <div class="f-car_pro02">
                              RMB:<span class="f-car_sumsmall">1</span>
                          </div>
                          <div class="f-car_pro03">
                              <div class="clear">
                                  <button class="f-car_relbtn">-</button>
                                  <input type="text" class="f-car_num " value="${cart_num}">
                                  <button class="f-car_addbtn">+</button>
                              </div>
                            <p  class="f-car_warntext"></p>
                          </div>
                          <div class="f-car_pro04">
                              RMB:<span class="f-car_sumbig">0 </span>
                          </div>
                          <div class="f-car_pro05 f-car_remove">
                              删除
                          </div>
                      </div>
                </div>


                </div>
                <!-- ---------商品大盒子开始------ -->
            </div>
  </div>
</template>

<script>
import Cheader from "../components/C_header"
export default {
  data(){
    return{
      ischecked:true
    }
  },
  components:{
      Cheader
  }
}
</script>
<style lang="less" scope>
 @import "../styles/C_pub.less";
 //主心内容
#f-carbody {
    width: 1200px;
    margin:0 auto;
    //线
    .f-carline {
        margin-top: 28px;
        height: 56px;
        line-height: 56px;
        text-align: right;
        border-bottom: 2px solid #ccc;
        .icon{
            display: inline-block;
            width: 18px;
            height:18px;
            //background: url("../../../img/F-img/tip1.png") no-repeat;
           position: relative;
           top:4px;
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

                button,input {
                    width: 34px;
                    height: 34px;
                    float: left;
                    border: 1px solid #ececce;
                    background-color: #ededed;
                    outline: none;
                    
                }
                input{
                    height: 30px;
                    text-align: center;
                    background-color: #fff;
                }
                
                .f-car_warntext{
                    width:102px;
                    border:1px solid rgb(182, 182, 182);
                    margin-top:2px;
                    color:rgb(128, 128, 128);
                    padding:2px 0;
                    text-align: center;
                    display: none;
                }
            }

            .f-car_pro04 {
                color: @colormain;
                width: 162px
            }

            .f-car_pro05 {
                color: #aaaaaa;
                cursor: pointer;
                &:hover {
                    color: @colormain
                }
            }
        }

        .f-car_right>div {
            float: left;
        }


    }
}
</style>


