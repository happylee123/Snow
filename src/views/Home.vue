<template>
  <div class="home">
    <!--轮播图-->
    <el-row>
      <el-col :span="24">
        <el-carousel height="500px">
          <el-carousel-item v-for="item in 4" :key="item"></el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
    <!--学习（study）-->
    <el-row>
      <el-col :span="24">
        <div class="study">
          <h1>学习（Study）</h1>
        </div>
      </el-col>
    </el-row>
    <!-- 图片-->
    <div class="demo-image__placeholder">
      <div class="block">
        <el-image :src="Studysrc"></el-image>
      </div>
      <div class="block">
        <el-image :src="Studysrc"></el-image>
      </div>
      <div class="block">
        <el-image :src="Studysrc"></el-image>
      </div>
    </div>
    <!--镜片（lenswear）-->
    <el-row>
      <el-col :span="24">
        <div class="lenswear">
          <h1>镜片（lenswear）</h1>
        </div>
      </el-col>
    </el-row>
    <!--图片-->
    <div class="demo-image__placeholder">
      <div class="block" id="pic">
        <el-image :src="Studysrc" id="A-img"></el-image>
      </div>
      <div class="block1">
        <el-image :src="Studysrc" id="A-img1"></el-image>
        <el-image :src="Studysrc" id="A-img2"></el-image>
      </div>

    </div>
    <!-- 列表 -->
    <el-row class="button">
      <el-col :span="4">
        <div>
          <img src="./../assets/u103.png" alt="">
          <p>雷霆影像天地</p>
        </div>
      </el-col>
      <el-col :span="4">
          <img src="./../assets/u105.png" alt="">
          <p>雷霆俱乐部</p>
      </el-col>
      <el-col :span="4">
          <img src="./../assets/u107.png" alt="">
          <p>我的雷霆用户专区</p>
      </el-col>
      <el-col :span="4">
          <img src="./../assets/u109.png" alt="">
          <p>教学说明</p>
      </el-col>
      <el-col :span="4">
          <img src="./../assets/u111.png" alt="">
          <p>2019摄影大赛</p>
      </el-col>
      <el-col :span="4">
          <img src="./../assets/u113.png" alt="">
          <p>2019青年摄影大赛</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Studysrc:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
    };
  }
};
</script>
<style lang ="less">
.el-row {
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
  text-align: center;
}
.el-carousel {
  width: 90%;
  margin: 0 auto;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.study,
.lenswear h1 {
  font-size: 34px;
  display: inline-block;
  border-bottom: 3px solid #fcdc23;
}
.demo-image__placeholder {
  width: 90%;
  margin: 0 auto;
}
.block {
  width: 30%;
  display: inline-block;
  margin: 0 20px;
}
.block1{
  width: 30%;
  display: inline-block;
  margin:  0 auto;
}
#A-img1{
  height: 60%;
  
}
#pic{
  width: 60%;
  margin: 0 40px;
}
.button{
  height: 200px;
  width: 90%;
  margin: 30px auto;
}
.button img{
    width: 160px;
    height: 160px;
    transition: all 0.6s;
}
.button img:hover {
    transform: translateY(-20px);
}
</style>

