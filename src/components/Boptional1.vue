<template>
  <!-- <ul id="bUl"> -->
  <li class="bLI">
    <a href="javascript:;">
      <!-- <img :src=" v1.img_src " alt /> -->
      <img :src=" v1.img " alt />
      <div>
        <!-- <h4>黑卡®RX100 Ⅵ</h4> -->
        <!-- <p class="bp">{{v1.second_body}}</p> -->
        <p class="bp">{{v1.bp}}</p>
        <!-- <span class="bspan">RMB {{ v1.price }}</span> -->
        <span class="bspan">RMB {{ v1.bspan }}</span>
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
  beforeMount: {

  },
  methods: {
    
  }
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
      // padding: 0 6px;
      padding-left: 6px;
      height: 42px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
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

