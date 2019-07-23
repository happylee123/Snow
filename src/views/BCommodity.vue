<template>
  <div id="Commodity">
    <!-- 轮播图 -->
    <div class="banner">
      <el-carousel :interval="5000" arrow="always" height="379px">
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
      <div class="co-left clearfix">
        <h4>筛选条件</h4>
        <ul>
          <BOptional @sendChild1="fromChild" v-for="v in arrNav" :key="v.nav" :v="v"></BOptional>
        </ul>
      </div>
      <div class="co-right clearfix">
        <div class="bdiv1 clearfix">
          <h4>黑卡®系列</h4>
          <ul>
            <Boptional1 v-for="(v1,i) in arrImg" :key="i" :v1="v1"></Boptional1>
          </ul>
        </div>
        <div class="bdiv2 clearfix">
          <h4>长焦系列</h4>
          <ul>
            <Boptional1 v-for="(v1,i) in arrImg" :key="i" :v1="v1"></Boptional1>
          </ul>
        </div>
        <div class="bdiv3 clearfix">
          <h4>缤纷系列</h4>
          <ul>
            <Boptional1 v-for="(v1,i) in arrImg" :key="i" :v1="v1"></Boptional1>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BOptional from "./../components/BOptional.vue";
import Boptional1 from "./../components/Boptional1.vue";
export default {
  data() {
    return {
      arrNav: [
        {
          nav: "有效分辨率",
          child1: " 黑卡®系列",
          child2: "长焦系列",
          child3: "缤纷系列"
        },
        {
          nav: "有效像素",
          child1: "约1000~2000万",
          child2: "约2000~3000万",
          child3: "约3000万以上"
        },
        {
          nav: "功能分类",
          child1: "4K视频录制",
          child2: "超慢动作视频录制",
          child3: "触摸对焦"
        }
      ],
      //黑卡系列
      arrImg: [
        {
          img: require("./../assets/suoni_files/img_dsc_h300_b.jpg.thumb.200.200.png"),
          bp:
            "约0.03秒高速对焦 / 24张/秒高速连拍 24-200mm F2.8-F4.5 大变焦镜头",
          bspan: "RMB 8,499"
        },
        {
          img: require("./../assets/suoni_files/img_dsc_h300_b.jpg.thumb.200.200.png"),
          bp:
            "约0.03秒高速对焦 / 24张/秒高速连拍 24-200mm F2.8-F4.5 大变焦镜头",
          bspan: "RMB 8,499"
        },
        {
          img: require("./../assets/suoni_files/img_dsc_h300_b.jpg.thumb.200.200.png"),
          bp:
            "约0.03秒高速对焦 / 24张/秒高速连拍 24-200mm F2.8-F4.5 大变焦镜头",
          bspan: "RMB 8,499"
        },
        {
          img: require("./../assets/suoni_files/img_dsc_h300_b.jpg.thumb.200.200.png"),
          bp:
            "约0.03秒高速对焦 / 24张/秒高速连拍 24-200mm F2.8-F4.5 大变焦镜头",
          bspan: "RMB 8,499"
        },
        {
          img: require("./../assets/suoni_files/img_dsc_h300_b.jpg.thumb.200.200.png"),
          bp:
            "约0.03秒高速对焦 / 24张/秒高速连拍 24-200mm F2.8-F4.5 大变焦镜头",
          bspan: "RMB 8,499"
        },
        {
          img: require("./../assets/suoni_files/img_dsc_h300_b.jpg.thumb.200.200.png"),
          bp:
            "约0.03秒高速对焦 / 24张/秒高速连拍 24-200mm F2.8-F4.5 大变焦镜头",
          bspan: "RMB 8,499"
        },
        {
          img: require("./../assets/suoni_files/img_dsc_h300_b.jpg.thumb.200.200.png"),
          bp:
            "约0.03秒高速对焦 / 24张/秒高速连拍 24-200mm F2.8-F4.5 大变焦镜头",
          bspan: "RMB 8,499"
        },
        {
          img: require("./../assets/suoni_files/img_dsc_h300_b.jpg.thumb.200.200.png"),
          bp:
            "约0.03秒高速对焦 / 24张/秒高速连拍 24-200mm F2.8-F4.5 大变焦镜头",
          bspan: "RMB 8,499"
        },
        {
          img: require("./../assets/suoni_files/img_dsc_h300_b.jpg.thumb.200.200.png"),
          bp:
            "约0.03秒高速对焦 / 24张/秒高速连拍 24-200mm F2.8-F4.5 大变焦镜头",
          bspan: "RMB 8,499"
        },
        {
          img: require("./../assets/suoni_files/img_dsc_h300_b.jpg.thumb.200.200.png"),
          bp:
            "约0.03秒高速对焦 / 24张/秒高速连拍 24-200mm F2.8-F4.5 大变焦镜头",
          bspan: "RMB 8,499"
        },
        {
          img: require("./../assets/suoni_files/img_dsc_h300_b.jpg.thumb.200.200.png"),
          bp:
            "约0.03秒高速对焦 / 24张/秒高速连拍 24-200mm F2.8-F4.5 大变焦镜头",
          bspan: "RMB 8,499"
        },
        {
          img: require("./../assets/suoni_files/img_dsc_h300_b.jpg.thumb.200.200.png"),
          bp:
            "约0.03秒高速对焦 / 24张/秒高速连拍 24-200mm F2.8-F4.5 大变焦镜头",
          bspan: "RMB 8,499"
        }
      ],
      //bannner 的数据请求
      banner: 1,
      //下方展示区域的img 请求
      exhibitionImg: 2
    };
  },
  beforeMount: function(){
    //bannner图的请求函数调用
    this.getBannerImg()
    //下方展示区域的img的函数调用
    this.getExhibitionImg()
  },
  methods: {
    //banner get函数
    getBannerImg() {
      this.$axios.get("/api/getBannerImg", {
        params: {
          banner: this.banner
        }
      });
    },
    //下方展示区域img的获取函数 
    getExhibitionImg() {
      this.$axios.get("/api/getExhibitionImg",{
        params: {
          exhibitionImg: this.exhibitionImg
        }
      })
    },
    //接收子组件（BOptional。vue）的数据
    fromChild(data){
      console.log(data)
    }
  },

  components: {
    BOptional,
    Boptional1
  }
};
</script>
<style lang="less" scoped>
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
            border: none;
            line-height: 20px;
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
      border: 1px solid #e5e5e5;;
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
      }
    }
    .co-right {
      // border: 1px solid red;
      float: right;
      width: 79.94%;
      padding: 10px;
      h4 {
        padding-left: 10px;
        line-height: 60px;
        height: 60px;
        background-color: #fff;
        font-size: 22px;
        color: #555;
        text-align: left;
        font-weight: normal;
      }
      ul {
        // border: 1px solid red;
        // margin-top: 6px;
      }
      .bdiv1,
      .div2 {
        margin-bottom: 20px;
      }
    }
  }
}
.active {
  transform: rotate(180deg);
  transform-origin: center center;
}
</style>





