<template>
  <div class="footer">
    <el-row :gutter="20" id="buttom">
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <div>
            <h4>您周边的经销商</h4>
          </div>
          <div>
            <a href="javascript:;">就近门店查询</a>
          </div>
        </div>
      </el-col>
      <el-col :span="12" class="A-right">
        <div class="grid-content bg-purple">
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <div>
                  <h4>商品购买</h4>
                </div>
                <div>
                  <a href="javascript:;">在线商城</a>
                  <a href="javascript:;">直营店</a>
                  <a href="javascript:;">咨询.订购.服务热线</a>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <div>
                  <h4>会员天地</h4>
                </div>
                <div>
                  <a href="javascript:;">产品注册</a>
                  <a href="javascript:;">会员注册</a>
                  <a href="javascript:;">视频教学</a>
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <div>
                  <h4>相关连接</h4>
                </div>
                <div>
                  <a href="javascript:;">行业解决方案</a>
                </div>
              </div>
            </el-col>
            <el-col :span="6" >
              <div class="grid-content bg-purple">
                <div>
                  <h4>保持联络</h4>
                </div>
                <div>
                  <a href="javascript:;">获取最新商品</a>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scope>
.footer{
  width: 100%;
  padding: 40px 0 20px 0;
  height: 100px;
  background-color: #272727;
  color: #fff;
 a{
    color:#fff;
    text-decoration: none;
    color: white;
    font-size: 12px;
    line-height: 25px;
    display: block;
    padding-left: 15%;
  }
  a:hover{
    color: #50BCFD;
  }
}
.el-row{
  width: 100%;
  h4{
    color: #787878;
    font-size: 18px;
    padding-left: 15%;
  }
}

</style>
