<template>
  <div id="bparameter-box">
    <h4>主要规格</h4>
    <div class="bq-row1 clearfix">
      <div class="bq-col bq-col-2">
        <div class="bq-td1">影像传感器</div>
        <!-- <div class="bq-td1">影像传感器</div> -->
      </div>
      <div class="bq-col bq-col-3">
        <table>
          <tr>
            <td class="td-1">相机类型</td>
            <td class="td-r">可更换镜头数码相机（微单）</td>
          </tr>
          <tr>
            <td class="td-1">镜头兼容性</td>
            <td class="td-r">索尼E卡口镜头</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="bq-row1 clearfix">
      <div class="bq-col bq-col-2">
        <div class="bq-td1">影像传感器</div>
        <!-- <div class="bq-td1">影像传感器</div> -->
      </div>
      <div class="bq-col bq-col-3">
        <table>
          <tr>
            <td class="td-1">相机类型</td>
            <td class="td-r">可更换镜头数码相机（微单）</td>
          </tr>
          <tr>
            <td class="td-1">镜头兼容性</td>
            <td class="td-r">索尼E卡口镜头</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="bq-row1 clearfix">
      <div class="bq-col bq-col-2">
        <div class="bq-td1">影像传感器</div>
        <!-- <div class="bq-td1">影像传感器</div> -->
      </div>
      <div class="bq-col bq-col-3">
        <table>
          <tr>
            <td class="td-1">相机类型</td>
            <td class="td-r">可更换镜头数码相机（微单）</td>
          </tr>
          <tr>
            <td class="td-1">镜头兼容性</td>
            <td class="td-r">索尼E卡口镜头</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="bq-row1 clearfix">
      <div class="bq-col bq-col-2">
        <div class="bq-td1">影像传感器</div>
        <!-- <div class="bq-td1">影像传感器</div> -->
      </div>
      <div class="bq-col bq-col-3">
        <table>
          <tr>
            <td class="td-1">相机类型</td>
            <td class="td-r">可更换镜头数码相机（微单）</td>
          </tr>
          <tr>
            <td class="td-1">镜头兼容性</td>
            <td class="td-r">索尼E卡口镜头</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bparameter"
};
</script>

<style lang="less" scoped>
#bparameter-box {
  width: 90%;
  display: inline-block;
  text-align: center;
  h4 {
    text-align: left;
    font-size: 24px;
  }
  .bq-row1 {
    margin-top: 20px;
    .bq-col {
      float: left;
      text-align: left;
      div,
      td {
        line-height: 40px;
      }
      .bq-td1{
          font-size: 18px;
            color: #999999;
      }
    }
    .bq-col-2 {
      width: 20%;
    }
    .bq-col-3 {
      width: 80%;
      table {
          width: 100%;
        .td-1 {
          width: 80%;
              font-size: 14px;
    color: #333333;
        //   border: 1px solid black;
          display: inline-block;
        }
        .td-r {
          width: 80%;
          font-size: 14px;
    color: #999999;
        //   border: 1px solid red;
        }
      }
    }
  }
}
</style>
