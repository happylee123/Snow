<template>
  <!-- <ul id="bUl"> -->
  <li class="bLI">
    <a href="javascript:;">
      <img :src=" v1.img " alt />
      <div>
        <!-- <h4>黑卡®RX100 Ⅵ</h4> -->
        <p class="bp">{{v1.bp}}</p>
        <span class="bspan">{{ v1.bspan }}</span>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  name: "boptional1",
  props: ["v1"],
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.bLI {
  float: left;
  border: 1px solid #acacac;
  width: 23.92%;
  margin: 4px;
  text-align: center;
  img {
    // display: inline-block;
  }
  div {
    width: 94%;
    text-align: left;
    .bp {
      padding: 0 6px;
      font-size: 14px;
      line-height: 18px;
      border: none;
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .bspan {
      margin: 10px 0 10px 0;
      padding: 0 6px;
      display: inline-block;
      font-size: 16px;
      font-weight: bold;
      color: #26a8df;
    }
  }
}
</style>

