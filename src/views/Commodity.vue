<template>
  <div id="Commodity">
    <div class="banner">
      <el-carousel :interval="5000" arrow="always" height="400px">
        <el-carousel-item v-for="i in 6" :key="i">
          <a href="javascript:;">
            <img src="./../assets/suoni_files/banner1.jpg" alt />
          </a>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="middle clearfix">
      <ul>
        <li>
          <a href="javascript:;">
            <img src="./../assets/suoni_files/m1_banner_395x395.jpg" alt />
            <div>
              <h4>黑卡®RX100 Ⅵ</h4>
              <p>约0.03秒高速对焦 / 24张/秒高速连拍 24-200mm F2.8-F4.5 大变焦镜头</p>
              <span>RMB 8,499</span>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="./../assets/suoni_files/m2_banner_395x395.jpg" alt />
            <div>
              <h4>黑卡®RX10IV</h4>
              <p>约0.03秒高速对焦 / 24张/秒高速连拍 24-600mm F2.4-F4 大光圈</p>
              <span>RMB 11,499</span>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="./../assets/suoni_files/m3_banner_395x395.jpg" alt />
            <div>
              <h4>黑卡®RX1R Ⅱ</h4>
              <p>4240万有效像素 / 光学可调节低通滤镜 35mm定焦 F2大光圈</p>
              <span>RMB 19,499</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div class="conter clearfix">
      <div class="co-left">
        <h4>筛选条件</h4>
        <ul>
          <li>
            <p>
              <span @click="rotate">影像传感器<i class="el-icon-arrow-down"></i></span>
              <div class="co-hide" v-show="isHide">
                  <input type="checkbox" name="" id=""> 全幅画
                  <br>
                  <input type="checkbox" name="" id=""> 1英寸
                  <br>
                  <input type="checkbox" name="" id=""> 1/2.3英寸
              </div>
            </p>
          </li>
          <li>
            <p>
                <span>影像传感器</span><i class="el-icon-arrow-down"></i>
            </p>
          </li>
        </ul>
      </div>
      <div class="c-right">
        <h4>黑卡®系列</h4>
        <ul>
          <li>sadasd</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            isHide: false
        }
    },
    methods: {
        rotate(){
           this.isHide = !this.isHide
        }
    }
};
</script>
<style lang="less">
#Commodity {
  text-align: center;
  .banner {
    img {
      width: 100%;
    }
  }
  .middle {
    // border: 1px solid rebeccapurple;
    width: 90%;
    display: inline-block;
    li {
      width: 100%;
      float: left;
      width: 32.6%;
      border: 1px solid #e5e5e5;
      margin: 3px;
      a {
        img {
          width: 80%;
        }
        div {
          padding: 0 14px;
          text-align: left;
          margin-bottom: 16px;
          h4 {
            font-size: 16px;
            color: #030303;
            font-weight: bold;
          }
          p {
            font-size: 16px;
            color: #555;
            margin-bottom: 10px;
          }
          span {
            font-size: 18px;
            color: #26a8df;
            font-weight: normal;
          }
        }
      }
    }
  }
  .conter {
    display: inline-block;
    width: 90%;
    text-align: left;
    .co-left {
      float: left;
      width: 18%;
      border: #26a8df 1px solid;
      h4 {
        padding-left: 24px;
        line-height: 60px;
        background-color: #555;
        font-size: 22px;
        font-weight: normal;
        color: #fff;
        text-align: left;
      }
      li {
        padding: 0 18px;
        p {
          padding-left: 0;
          line-height: 74px;
          color: #555;
          font-size: 22px;
          border-bottom: 1px solid #e5e5e5;
          cursor: pointer;
          i {
            width: 22px;
            height: 11px;
            margin-left: 20%;
            .active{
                transform: rotate(180deg)
            }
          }
        }
        .co-hide{
            margin-top: 20px;
            font-size: 16px;
            color: #555;
            cursor: pointer;
            input{
                display: inline-block;
                width: 20px;
                height: 20px;
                margin-right: 9px;
                border: 1px solid #e5e5e5;
                vertical-align: middle;
                cursor: pointer;
                margin: 8px 0;
                border: none;
            }
        }
      }
    }
  }
}
</style>





