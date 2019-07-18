<template>
  <ul id="bUl">
    <li class="bLI">
      <a href="javascript:;">
        <img src="./../../src/assets/suoni_files/img_dsc_h300_b.jpg.thumb.200.200.png" alt />
        <div>
          <!-- <h4>黑卡®RX100 Ⅵ</h4> -->
          <p class="bp">约0.03秒高速对焦 / 24张/秒高速连拍 24-200mm F2.8-F4.5 大变焦镜头</p>
          <span class="bspan">RMB 8,499</span>
        </div>
      </a>
    </li>
    <li class="bLI">
      <a href="javascript:;">
        <img src="./../../src/assets/suoni_files/img_dsc_h300_b.jpg.thumb.200.200.png" alt />
        <div>
          <!-- <h4>黑卡®RX100 Ⅵ</h4> -->
          <p class="bp">DSC-RX0M2黑卡®数码相机（黑卡迷你 三防功能 高速连拍 蔡司镜头）</p>
          <span class="bspan">RMB 8,499</span>
        </div>
      </a>
    </li>
    <li class="bLI">
      <a href="javascript:;">
        <img src="./../../src/assets/suoni_files/img_dsc_h300_b.jpg.thumb.200.200.png" alt />
        <div>
          <!-- <h4>黑卡®RX100 Ⅵ</h4> -->
          <p class="bp">约0.03秒高速对焦 / 24张/秒高速连拍 24-200mm F2.8-F4.5 大变焦镜头</p>
          <span class="bspan">RMB 8,499</span>
        </div>
      </a>
    </li>
    <li class="bLI">
      <a href="javascript:;">
        <img src="./../../src/assets/suoni_files/img_dsc_h300_b.jpg.thumb.200.200.png" alt />
        <div>
          <!-- <h4>黑卡®RX100 Ⅵ</h4> -->
          <p class="bp">约0.03秒高速对焦 / 24张/秒高速连拍 24-200mm F2.8-F4.5 大变焦镜头</p>
          <span class="bspan">RMB 8,499</span>
        </div>
      </a>
    </li>
    
  </ul>
</template>

<script>
export default {
  name: "boptional1",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less" scoped>
#bUl {
    .bLI{
        float: left;
        border: 1px solid yellowgreen;
        width: 23.92%;
        margin: 4px;
        text-align: center;
        img{
            // display: inline-block;
        }
        div{
            width: 94%;;
            text-align: left;
            .bp{
                padding: 0 6px;
                font-size: 16px;
                line-height: 22px;
                border: none;
                width: 100%;
                overflow: hidden;
                white-space:nowrap;
                text-overflow: ellipsis
            }
            .bspan{
                margin: 10px 0  10px 0;
                padding: 0 6px;
                display: inline-block;
                font-size: 18px;
                font-weight: bold;
                color: #26a8df;
            }
        }
    }
}
</style>

