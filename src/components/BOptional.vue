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
          <input
            v-model="tf1"
            @click.stop="child1Send(v.child1)"
            type="checkbox"
            name
            id="co-input1"
          />
          <span>{{ v.child1 }}</span>
        </label>
        <br />
        <label for="co-input2">
          <input
            v-model="tf2"
            @click.stop="child2Send(v.child2)"
            type="checkbox"
            name
            id="co-input2"
          />
          <span>{{ v.child2 }}</span>
        </label>
        <br />
        <label for="co-input3">
          <input
            v-model="tf3"
            @click.stop="child3Send(v.child3)"
            type="checkbox"
            name
            id="co-input3"
          />
          <span>{{ v.child3 }}</span>
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
      active: "",
      tf1: false,
      tf2: false,
      tf3: false
    };
  },
   beforeMount: function(){
    this.child4Send()
  },
  methods: {
    rotate() {
      this.isHide = !this.isHide;
      if (this.active == "") {
        this.active = "active";
      } else {
        this.active = "";
      }
    },
    // 子选项赛选功能
    child1Send(v) {
      // console.log(v),
      if (this.tf1 == false) {
        this.$axios.get("/api/getChild1Send", {
          params: {
            child1: v
          }
        })
        .then(res => {
          //发送给父主组件数据
          this.$emit("sendChild1", [res, v]);
          this.tf1 = true;
        });
      };
      if(this.tf1 == true){
        this.child4Send()
      }
    },
    child2Send(v) {
      if(this.tf2 == false){
        this.$axios
        .get("/api/getChild2Send", {
          params: {
            child2: v
          }
        })
        .then(res => {
          //发送给父主组件数据
          this.$emit("sendChild1", [res, v]);
          this.tf2 = true;
        });
      }
    },
    child3Send(v) {
      if(this.tf3 == false){
        this.$axios
        .get("/api/getChild3Send", {
          params: {
            child3: v
          }
        })
        .then(res => {
          //发送给父主组件数据
          this.$emit("sendChild1", [res, v]);
          this.tf3 = true
        });
      }
    },
    child4Send(){
      // this.$emit("sendChild1", [res,1]);
    }
  },
 
};
</script>
<style lang="less" scoped>
p {
  padding-left: 0;
  line-height: 74px;
  color: #555;
  font-size: 20px;
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


