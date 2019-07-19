<template>
  <div id="bbox">
    <!-- 商品展示及简单描述区域 (Exhibition)-->
    <div class="exhibition clearfix">
      <div class="ex-left clearfix">
        <!-- 大图 -->
        <div class="ex-big-img clearfix">
          <img src="./../assets/bdetails/img_dsc_b2.png" alt />
        </div>
        <!-- 小图 -->
        <div class="ex-small-img clearfix">
          <span><</span>
          <ul>
            <li>
              <img src="./../assets/bdetails/img_dsc_m1.png" alt />
            </li>
            <li>
              <img src="./../assets/bdetails/img_dsc_m2.png" alt />
            </li>
            <li>
              <img src="./../assets/bdetails/img_dsc_m3.png" alt />
            </li>
            <li>
              <img src="./../assets/bdetails/img_dsc_m4.png" alt />
            </li>
            <li>
              <img src="./../assets/bdetails/img_dsc_m5.png" alt />
            </li>
          </ul>
          <span>></span>
        </div>
      </div>
      <div class="ex-right">
        <!-- 商品名 name-->
        <div class="ex-name">
          <h4>DSC-RX10M4黑卡®数码相机 （超长焦旗舰黑卡 高速连拍 约0.03秒对焦速度 RX10 IV）</h4>
        </div>
        <!-- 简单描述 describe-->
        <div class="ex-describe">
          <h6>商品描述：约0.03秒*1的对焦速度/315个焦平面相位检测自动对焦点/可实现24张/秒*2高速连拍/蔡司Vario-Sonnar T*镜头24mm-600mm*4 F2.4-F4大光圈/约2010万有效像素 1英寸Exmor RS CMOS影像传感器/支持4K视频及40倍*11超慢动作/支持触摸对焦</h6>
        </div>
        <!-- 规格的选取及价格Rmb Specifications -->
        <div class="ex-rmb">
          <p>
            <span class="ex-span1">价格</span>
            <i>RMB 11,499.00</i>
            <br />
            <span class="ex-span2">尊享价</span>
            <button>立即登录</button>
            <span class="ex-span3">了解对应会员价格</span>
          </p>
          <div class="ex-sp">
            <span class="ex-span1">规格</span>
            <button>DSC-RX10M4</button><button>DSC-RX10M4</button>
            <br>
            <br>
            <span class="ex-span1">颜色</span>
            <button>黑色</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bdetails"
};
</script>

<style lang="less" scoped>
#bbox {
  width: 100%;
  text-align: center;
  .exhibition {
    display: inline-block;
    width: 90%;
    border: 1px solid red;
    .ex-left {
      width: 47%;
      border: 1px solid rebeccapurple;
      float: left;
      text-align: center;
      .ex-big-img {
        display: inline-block;
        width: 537px;
        height: 537px;
        border: 1px solid rgb(131, 131, 131);
        img {
          // display: inline-block;
          width: 100%;
        }
      }
      .ex-small-img {
        display: inline-block;
        // border:1px solid red;
        width: 537px;
        span {
          float: left;
          font-size: 46px;
        }
        ul {
          li {
            float: left;
            border: 1px solid rgb(128, 127, 126);
            margin: 0 13px;
          }
        }
      }
    }
    .ex-right {
      float: right;
      width: 52.4%;
      border: 1px solid rebeccapurple;
      .ex-name {
        padding-top: 8px;
        padding-bottom: 8px;
        text-align: left;
        font-size: 22px;
        font-weight: 700;
      }
      .ex-describe {
        text-align: left;
        font-size: 14px;
        line-height: 23px;
      }
      .ex-rmb {
        padding-top: 24px;
        padding-left: 40px;
        padding-right: 40px;
        text-align: left;
        p {
          border-bottom: 1px dotted #b1b1b1;
          .ex-span1 {
            color: #b1b1b1;
            font-size: 14px;
            width: 50px;
            padding-right: 16px;
            padding-left: 13px;
            line-height: 34px;
          }
          i {
            color: #0a83d7;
            font-size: 18px;
            font-family: Arial;
            font-style: normal;
          }
          .ex-span2 {
            color: #b1b1b1;
            font-size: 14px;
            width: 50px;
            padding-right: 16px;
            line-height: 34px;
          }
          button {
            border: none;
            background: white;
            color: blue;
            cursor: pointer;
            padding-right: 10px;
          }
          .ex-span3 {
            color: #b1b1b1;
            font-size: 12px;
            width: 50px;
            padding-right: 10px;
            line-height: 34px;
          }
        }
        .ex-sp {
            padding-top: 16px;
          .ex-span1 {
            color: #b1b1b1;
            font-size: 14px;
            width: 50px;
            padding-right: 16px;
            padding-left: 13px;
            line-height: 34px;
          }
          button{
              text-align: 34px;
              border: 1px solid #272727;
              background: white;
              margin-right: 10px;
              padding: 6px 10px;
          }
          button:hover{
              border: #0a83d7 1px solid;
          }
        }
      }
    }
  }
}
</style>


