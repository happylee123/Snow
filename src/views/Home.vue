<template>
  <div class="home">
    <!--轮播图-->
    <el-row>
      <el-col :span="24">
        <el-carousel height="500px" >
          <el-carousel-item v-for="item in imagesbox" :key="item.id">
            <img :src="item.idView" alt="" class="image">
          </el-carousel-item>
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
        <el-image :src="Studysrc1"></el-image>
      </div>
      <div class="block">
        <el-image :src="Studysrc2" ></el-image>
      </div>
      <div class="block">
        <el-image :src="Studysrc3"></el-image>
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
    <!-- <div class="demo-image__placeholder len">
      <div class="block" id="pic">
        <el-image :src="Studysrc" id="A-img"></el-image>
      </div>
      <div class="block1">
        <el-image :src="Studysrc" id="A-img1"></el-image>
        <el-image :src="Studysrc" id="A-img2"></el-image>
      </div>
    </div> -->
    <div class="MainBlock " >
        <img :src="item.jt1" v-for="item in imagesbox2" :key="item.id" alt="">
        
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
      imagesbox:[
        {id:0,idView:require('./../assets/banner1.jpg')},
        {id:1,idView:require('./../assets/banner2.jpg')},
        {id:2,idView:require('./../assets/banner3.jpg')},
        {id:3,idView:require('./../assets/banner4.jpg')},
      ],
      Studysrc1:require('./../assets/jt1.jpg'),
      Studysrc2:require('./../assets/study3.jpg'),
      Studysrc3:require('./../assets/jt1.jpg'),
      imagesbox2:[
        {id:1,jt1:require('./../assets/study1.jpg')},
        {id:2,jt1:require('./../assets/study2.jpg')},
      ],
      imagebox3:[
        {id:1,jt2:require('./../assets/study1.jpg')}
        ]
    };
  }
};
</script>
<style lang ="less" scoped>
/deep/.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
  text-align: center;
}
.el-carousel {
  width: 87%;
  margin: 0 auto;
}
/* .el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
} */
/* .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
} */

/* .el-carousel__item:nth-child(2n + 1) { */
  /* background-color: #d3dce6; */
/* } */
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
.len{
  width: 93%;
}
.block {
  width: 30%;
  display: inline-block;
  margin: 0 20px;
  padding-bottom: 20px;
  cursor: pointer;
}
/*镜片图片*/
.MainBlock{
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    width: 80%;
    img{
      float: left;
      margin-left: 150px;
      cursor: pointer;
      /* display: inline-block; */
    }
}
/* .MainBlock1{
    position: absolute;
    left: 0px;
    top: 0px;
    transition: transform 1s ease 0s;
    display: block;
} */
/* .block1{
  width: 30%;
  display: inline-block;
  margin:  0 60%;
}
#A-img1{
  height: 60%;
  
}
#pic{
  width: 50%;
  margin: 0 40px;
  display: inline-block;
  vertical-align:text-top;
} */
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

