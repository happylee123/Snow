<template>
  <li>
    <p id="p">
      <span @click="rotate">
        {{ v.nav}}
        <i :class="[elI,active]"></i>
      </span>
      <br />
      <span class="co-hide" v-show="isHide">
        <label for="co-input1">
          <input type="checkbox" name id="co-input1" />
          {{ v.child1 }}
        </label>
        <br />
        <label for="co-input2">
          <input type="checkbox" name id="co-input2" />
          {{ v.child2 }}
        </label>
        <br />
        <label for="co-input3">
          <input type="checkbox" name id="co-input3" />
          {{ v.child3 }}
        </label>
      </span>
    </p>
  </li>
</template>

<script>
export default {
  name: "boptional",
  props: ["v"],
  data: function() {
    return {
      isHide: false,
      elI: "el-icon-arrow-down",
      active: ""
    };
  },
  methods: {
    rotate() {
      this.isHide = !this.isHide;
      if (this.active == "") {
        this.active = "active";
      } else {
        this.active = "";
      }
    }
  }
};
</script>
<style lang="less">
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
  }
}
.co-hide {
  // margin-top: 16px;
  font-size: 16px;
  color: #555;
  cursor: pointer;
  input {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 9px;
    border: 1px solid #e5e5e5;
    vertical-align: middle;
    cursor: pointer;
    // margin: 8px 0;
    border: none;
  }
}
.active {
  transform: rotate(180deg);
  transform-origin: center center;
}
</style>


