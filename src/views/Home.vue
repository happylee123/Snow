<template>
  <div class="home">
    <!--轮播图-->
    <el-row>
      <el-col :span="24">
        <el-carousel height="630px" >
          <el-carousel-item v-for="item in imagesbox" :key="item.id">
            <img :src="item.idView" alt="" class="image">
          </el-carousel-item>
        </el-carousel>
      </el-col>
    </el-row>
    <!-- 小图片轮播 -->
    <div class="B-small-carousel clearfix">
                <div class="A_clearfix">
                  <ol class="clearfix B-small-ol">
                        <li class="A_left B-s-carousel" @click="A_left()"></li>
                        <li class="A_right" @click="A_right()">查看更多(more)</li>
                    </ol>
                    <ul class="clearfix1" v-if="A_top">
                        <li class="col-md-1"><a href=""><img class="" src="./../assets/m12.png" alt=""></a></li>
                        <li class="col-md-1"><a href=""><img class="" src="./../assets/m2.png" alt=""></a></li>
                        <li class="col-md-1"><a href=""><img class="" src="./../assets/m3.png" alt=""></a></li>
                        <li class="col-md-1"><a href=""><img class="" src="./../assets/m4.png" alt=""></a></li>
                        <li class="col-md-1"><a href=""><img class="" src="./../assets/m5.png" alt=""></a></li>
                        <li class="col-md-1"><a href=""><img class="" src="./../assets/m6.png" alt=""></a></li>
                    </ul>
                    <ul class="A_clearfix2" v-if="A_bottom">
                      <li class="col-md-1"><a href=""><img class="" src="./../assets/m7.png" alt=""></a></li>
                        <li class="col-md-1"><a href=""><img class="" src="./../assets/m8.png" alt=""></a></li>
                        <li class="col-md-1"><a href=""><img class="" src="./../assets/m9.png" alt=""></a></li>
                        <li class="col-md-1"><a href=""><img class="" src="./../assets/m10.png" alt=""></a></li>
                        <li class="col-md-1"><a href=""><img class="" src="./../assets/m11.png" alt=""></a></li>
                        <li class="col-md-1"><a href=""><img class="" src="./../assets/m1.png" alt=""></a></li>
                    </ul>
                    
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
        <el-image :src="Studysrc1" class="img1"></el-image>
      </div>
      <div class="block">
        <el-image :src="Studysrc2" class="img1"></el-image>
      </div>
      <div class="block">
        <el-image :src="Studysrc3" class="img1"></el-image>
      </div>
    </div>
    <!-- 列表 -->
    <el-row class="button">
      <el-col :span="4">
        <div>
          <a href="javascript:;">
          <img src="./../assets/u103.png" alt="">
          <p>雷霆影像天地</p>
          </a>
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
        {id:1,idView:require('./../assets/ban11.jpg')},
        {id:2,idView:require('./../assets/ban22.jpg')},
        {id:3,idView:require('./../assets/ban33.jpg')},
        {id:4,idView:require('./../assets/ban44.jpg')},
      ],
      Studysrc1:require('./../assets/study1.png'),
      Studysrc2:require('./../assets/study2.png'),
      Studysrc3:require('./../assets/study3.png'),
      imagesbox2:[
        {id:1,jt1:require('./../assets/jp1.jpg')},
        {id:2,jt1:require('./../assets/jp2.jpg')},
      ],
      A_top:true,
      A_bottom:false,
    };
  },
  methods:{
    A_left:function(){
      this.A_top= !this.A_top
    },
    A_right:function(){
      this.A_bottom= !this.A_bottom
    }
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
  width: 100%;
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
.image{
  width: 100%;
}
.B-small-carousel{
    position: relative;
    li{
        text-align: center;
        float: left;
    }
    ul{
        position: relative;
        width: 1500px;
        height: 250px;
        top:0;
        left: 0;
        transition: all 800ms ease 0s;
        overflow: hidden;
    }
    img{
        transition: all 0.6s;
        margin-left: 30px;
    }
    img:hover{
        transform: translateY(-10px);
    }
    ol{
        position: relative;
        width: 30%;
        height: 12px;
        margin-left: 40%;
        /* left: 48.5%; */
        text-align: center;
        li{
            /* width: 100px; */
            /* height: 20px; */
            border-bottom: 3px solid #fcdc23;
            /* border-radius: 50%;  */
            float: left;
            margin:5px 7px; 
            cursor: pointer;
            font-size: 34px;
        }
        .B-s-carousel{
            width: 0px;
            height: 15px;
            background: white;
        }
    }
}
.study,
.lenswear h1 {
  font-size: 34px;
  display: inline-block;
  border-bottom: 3px solid #fcdc23;
}
.demo-image__placeholder {
  width: 100%;
}
.len{
  width: 93%;
}
.block {
  width: 30%;
  height: 30%;
  margin: 25px;
  display: inline-block;
  /* margin: 0 80px; */
  padding-bottom: 20px;
  cursor: pointer;
}
/*镜片图片*/
.MainBlock{
    /* margin: 0 auto; */
    margin-left: 160px;
    position: relative;
    overflow: hidden;
    img{
      float: left;
      margin-top: 20px;
      margin-left: 130px;
      cursor: pointer;
      transition: transform 1s ease 0s;
      /* display: inline-block; */
    }
    img:hover{
      transform:scale(1.06);
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

