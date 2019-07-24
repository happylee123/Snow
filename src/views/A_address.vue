<template>
  <div class="address">
    <div class="D-right E-right clearfix">
      <div class="D-space">
        <div class="header">
          <span class="s1">收货信息</span>
          <el-button type="text" @click="dialogFormVisible = true">
            <button class="D-btn">添加新地址</button>
          </el-button>
          <!-- Form -->
          <el-dialog title="收货地址" :visible.sync="dialogFormVisible" width="40%">
            <el-form :model="form">
              <!-- 姓名 -->
              <el-form-item label="姓名" :label-width="formLabelWidth">
                <el-input v-model="form.name1" autocomplete="off"></el-input>
              </el-form-item>
              <!-- 电话 -->
              <el-form-item label="电话" :label-width="formLabelWidth">
                <el-input v-model="form.name2" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="详细地址" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择省份">
                  <el-option label="四川省" value="shanghai"></el-option>
                  <el-option label="广东省" value="beijing"></el-option>
                  <el-option label="河北省" value="beijing"></el-option>
                  <el-option label="重庆市" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="具体街道" :label-width="formLabelWidth">
                  <el-input v-model="form.name3" autocomplete="off" placeholder="具体地址"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisible">确 定</el-button>
            </div>
          </el-dialog>

        </div>
        <div class="D-con1">
          <span class="D-s1">姓名</span>
          <span class="D-s2">电话</span>
          <span class="D-s2">详细地址</span>
          <span class="D-s4">操作</span>
        </div>

        <!-- ---------------没有收货地址的页面显示 -->
        <!-- <div class="Dreserve">
                    <div class="Dabout">
                        <p style="color: red">暂时还没有收获地址哦</p>
                    </div>
        </div>-->

        <!-- -----------------有收货地址的页面显示 -->
        <div class="D-con3-b" v-for="(todo,i) in todos" :key="i">
          <!-- 姓名 -->
          <span class="D-operate">{{todo.name}}</span>
          <!-- 电话 -->
          <span class="D-s5">{{todo.name1}}</span>
          <!-- 地址 -->
          <span class="D-s6">
            {{todo.name2}}
            <span class="D-moren">(默认地址)</span>
          </span>
          <!-- 两个图标 -->
          <!-- 修改 -->
          <el-button type="text" @click="dialogFormVisible1(rew,index)">
            <span class="iconfont icon-bianji D-s7"></span>
          </el-button>
          <!-- 修改弹框 -->
          <el-dialog title="收货地址" :visible.sync="dialogFormVisible1" width="40%">
            <el-form :model="form">
              <!-- 姓名 -->
              <el-form-item label="姓名" :label-width="formLabelWidth">
                <el-input v-model="editObj.name1" autocomplete="off"></el-input>
              </el-form-item>
              <!-- 电话 -->
              <el-form-item label="电话" :label-width="formLabelWidth">
                <el-input v-model="editObj.name2" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="详细街道" :label-width="formLabelWidth">
                  <el-input v-model="editObj.name3" autocomplete="off" ></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer dialog-footer1">
              <el-button @click="dialogFormVisible1 = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisible1">确 定</el-button>
            </div>
          </el-dialog>
          <!-- 删除 -->
          <el-button type="text" @click="open2(i)">
            <span class="iconfont icon-shanchu D-s8"></span>
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: ".D-con3-b",
  data() {
    return {
      todos: [
        {
          name: "xls",
          name1: "123",
          name2: "成都1"
        },
        {
          name: "xlss",
          name1: "1233",
          name2: "成都2"
        },
        {
          name: "xlsss",
          name1: "12333",
          name2: "成都3"
        },
        {
          name: "xlsss",
          name1: "12333",
          name2: "成都4"
        },
        {
          name: "xlsss",
          name1: "12333",
          name2: "成都5"
        },
        
      ],
      editObj:{
        name1:'',
        name2:'',
        name3:'',
      },
        dialogTableVisible: false,
        dialogTableVisible1: false,
        dialogFormVisible: false,
        dialogFormVisible1: false,
        form: {
          name1: '',
          name2: '',
          name3: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '70px',
        i: ''
    };
  },
  methods: {
    dialogFormVisible1(row,index){
                 //记录索引
                 this.formIndex=_index;
                 //记录数据
                 this.editObj=row;
                 //显示弹窗
                 this.dialogFormVisible1=true;
             },
             editDo(){
                 let _index=this.formIndex
                 //根据索引，赋值到list制定的数
                 this.list[_index]=editObj;
                 //关闭弹窗
                 this.dialogFormVisible1=false;
             },
    open2(i) {
      this.i = i,
      this.$confirm("是否确定删除该栏收货地址, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        var i = this.i
        console.log(i)
          this.todos.splice(i,1)
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>
<style lang="less" scope>
@import "../font/D-font/iconfont.css";
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.el-dialog{

  position:absolute;

  top: 50%;

  left: 50%;

  margin: 0 !important;

  transform: translate(-50%, -50%);
}
.dialog-footer1{
  margin-left: 350px;
}
.clearfix:after {
  content: "";
  clear: both;
  display: block;
}
.address {
  .head {
    height: 55px;
    border: 1px solid black;
  }
  .content {
    width: 1200px;
    height: 500px;
    position: absolute;
    top: 150px;
    left: 50%;
    margin-left: -600px;
  }
  .D-space {
    width: 930px;
    margin-left: 22px;
    /*background: white;*/
  }
  .header {
    width: 100%;
    height: 70px;
    border-bottom: 1px solid #ccc;
  }
  .s1 {
    font-size: 20px;
    line-height: 70px;
    margin-left: 10%;
  }
  .D-btn {
    width: 120px;
    height: 40px;
    font-size: 16px;
    border: none;
    color: white;
    background: #0a83d7;
    border-radius: 5px;
    cursor: pointer;
    position: absolute;
    right: 22px;
    top: -12px;
  }
  .D-con1 {
    width: 100%;
    height: 50px;
    font-size: 16px;
  }
  .D-con1 span,
  .D-con1 div {
    display: inline-block;
    line-height: 50px;
  }
  .D-s1 {
    margin-left: 15%;
    margin-right: 16%;
  }
  .D-s2 {
    margin-right: 21%;
  }
  .D-con3-b {
    width: 100%;
    padding: 22px 0;
    border-bottom: 1px solid #ccc;
    background: white;
    margin-bottom: 10px;
  }
  .D-con3-b div,
  .D-con3-b span {
    display: inline-block;
  }
  .D-operate {
    width: 65px;
    margin-left: 14%;
  }
  .D-s7 {
    margin-left: 40px;
    font-size: 30px;
    color: rgb(185, 185, 185);
  }
  .D-s8 {
    font-size: 30px;
    color: rgb(185, 185, 185);
  }
  .D-s5 {
    margin-left: 10%;
  }
  .D-s6 {
    margin-left: 8%;
    width: 281px;
  }
  .D-s6 span {
    font-size: 10px;
  }
  .D-s61 {
    width: 333px;
    height: 100px;
    margin-left: 8%;
  }
  .D-s61 span {
    font-size: 10px;
  }
  .D-moren {
    display: inline;
    margin-left: 6px;
    color: #0a83d7;
    font-size: 14px;
  }
  .D-mask {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    overflow-y: auto;
    background: rgba(0, 0, 0, 0.3);
    //display: none;
  }
  .mask {
    width: 700px;
    height: 465px;
    position: absolute;
    top: 83px;
    left: 50%;
    margin-left: -350px;
    background: white;
  }
  .D-close {
    display: inline-block;
    position: absolute;
    top: 1px;
    right: 3px;
    cursor: pointer;
  }
  .D-mask1 {
    width: 84%;
    height: 70px;
    margin-left: 6%;
    line-height: 70px;
    border-bottom: 1px solid gray;
  }
  .D-new1 {
    font-size: 20px;
    font-weight: bold;
    margin-left: 6%;
  }
  .D-new2 {
    margin-left: 5%;
  }
  .D-input {
    width: 84%;
    height: 380px;
    margin-left: 6%;
    padding-top: 21px;
    padding-left: 35px;
  }
  .D-address1 {
    width: 250px;
    height: 30px;
    border: 1px solid #b3b3b3;
    font-size: 14px;
    line-height: 28px;
    padding-left: 3%;
    color: black;
  }
  input::-webkit-input-placeholder {
    color: #ccc;
  }
  .D-ads1 {
    margin-left: 21px;
    margin-top: 20px;
  }
  .D-ads2 {
    margin-top: 20px;
    margin-left: 6px;
  }
  .D-aaa {
    margin-top: 20px;
  }
  .D-aaa1 {
    height: 62px;
    line-height: 62px;
    margin-top: 20px;
  }
  .D-aaa2 {
    margin-top: 20px;
  }
  .D-aaa3 {
    margin-top: 20px;
  }
  .D-input div div:not(.D-detai) {
    display: inline-block;
    width: 130px;
    height: 30px;
    border: 1px solid #b3b3b3;
    font-size: 14px;
    color: #ccc;
    line-height: 28px;
    background: white;
  }
  .D-detai {
    display: inline-block;
    width: 410px;
    height: 60px;
    border: 1px solid #b3b3b3;
    font-size: 14px;
    color: black;
    line-height: 28px;
    background: white;
    margin-left: 13px;
    overflow: hidden;
  }
  button {
    width: 90px;
    height: 30px;
    margin-top: 3%;
    border: none;
    border-radius: 5px;
    outline: none;
  }
  .D-ads6 {
    margin-top: 45px;
  }
  .D-cancel {
    margin-left: 26%;
    margin-right: 7%;
  }
  .D-save {
    background: #0a83d7;
    color: white;
  }
  .s5 {
    font-size: 25px;
    position: absolute;
    right: 412px;
    color: black;
  }
  .D-province {
    width: 130px;
    position: absolute;
    top: 247px;
    left: 160px;
    border: 1px solid #ccc;
    //display: none;
  }
  .D-province li {
    width: 100%;
    height: 25px;
    line-height: 25px;
    text-align: left;
    border-bottom: 1px solid #ccc;
    background: whitesmoke;
  }
  .D-province li:hover {
    background: #0a83d7;
  }
  .s6 {
    font-size: 25px;
    position: absolute;
    right: 277px;
    color: black;
  }
  .D-city {
    width: 130px;
    position: absolute;
    top: 247px;
    left: 297px;
    border: 1px solid #ccc;
    //display: none;
  }
  .D-city li {
    width: 100%;
    height: 25px;
    line-height: 25px;
    text-align: left;
    border-bottom: 1px solid #ccc;
    background: whitesmoke;
  }
  .D-city li:hover {
    background: #0a83d7;
  }
  .s7 {
    font-size: 25px;
    position: absolute;
    right: 140px;
    color: black;
  }
  .D-area {
    width: 130px;
    position: absolute;
    top: 247px;
    left: 434px;
    border: 1px solid #ccc;
    //display: none;
  }
  .D-area li {
    width: 100%;
    height: 25px;
    line-height: 25px;
    text-align: left;
    border-bottom: 1px solid #ccc;
    background: whitesmoke;
  }
  .D-area li:hover {
    background: #0a83d7;
  }
  .D-delMask {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
  }
  .D-maskdel {
    width: 270px;
    height: 160px;
    border: 1px solid darkgrey;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -80px;
    margin-left: -10%;
    background: white;
  }
  .D-top {
    width: 100%;
    height: 40px;
    border-bottom: 1px solid gainsboro;
    line-height: 40px;
    background: #f8f8f8;
  }
  .D-prompt {
    margin-left: 20px;
    font-size: 14px;
  }
  .D-no {
    margin-left: 58%;
    text-decoration: none;
    color: black;
  }
  .D-buttom {
    padding-top: 8%;
  }
  .D-p1 {
    font-size: 14px;
    margin-left: 24%;
    padding-bottom: 12%;
  }
  .D-sure,
  .D-yes {
    display: inline-block;
    width: 20%;
    text-align: center;
    font-size: 14px;
    cursor: pointer;
  }
  .D-sure {
    height: 29px;
    line-height: 29px;
    border: 1px solid darkgray;
    margin-left: 28%;
    margin-right: 2%;
  }
  .D-yes {
    height: 30px;
    line-height: 30px;
    background: #31b0d5;
    color: white;
  }
  /*//分页*/
  .D-paging {
    margin-left: 45%;
    margin-top: 30px;
    margin-bottom: 50px;
  }
  .D-paging a {
    display: inline-block;
    width: 30px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    background: #0a83d7;
    color: white;
  }
  /*# sourceMappingURL=D-address.css.map */
}
</style>