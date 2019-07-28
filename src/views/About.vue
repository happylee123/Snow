<template>
  <div class="about" >
      <div class="A_abt">
        <h2>关于SONY</h2>
      </div>
      <div class="A_img">
        <img :src="src" alt="">
      </div>
      <div class="A_text">
        <p>在索尼，我们的使命就是成为一家激发和满足您好奇心的公司。</p>
        <p>我们在产品、内容与服务方面的无尽激情，</p>
        <p>和对创新的不懈追求，</p>
        <p>让我们创造出只有索尼才能提供的前所未有的、新的兴奋和娱乐。</p>
        <p>开创独特的新鲜文化与体验。</p>
        <p>一切所为，均为与您情感相系。</p>
      </div>
      <hr>
      <div class="masage">
        <h4>公司信息</h4>
        <div class="A_text">
        <p>公司信息</p>
        <p>新闻发布</p>
        <p>投资关系</p>
        <p>企业社会责任</p>
        <p>职业生涯</p>
        </div>
        <div class="A_img3">
        <img :src="src2" alt="">
        </div>
        <div class="A_text2">
          <p>来自NONY设计灵感的内幕</p>
        </div>
      </div>
      <hr>
        
  </div>
</template>
<script>
export default {
  data(){
    return{
      src:require("./../assets/u4.png"),
      src2:require("./../assets/u14.png"),
    }
  }
}
</script>
<style lang="less" scoped>
.about{
    .A_abt{
    //width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 20px;
    h2{
      font-size: 30px;
      margin-left: 15%;
      margin-top: 20px;
      margin-bottom: 10px;
    }
}

.A_img{
    width: 100%;
    margin: 0 auto;
    background-color: black;
  img{
    margin: 0 auto;
    margin-left: 6%;
  }
}
.A_text{
  text-align: center;
  p{
    margin: 0 0 10px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
}
hr{
    width: 80%;
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
}
.masage{
  width: 80%;
  margin: 0 300px;
  display:block;
  h4{
    font-size: 16px;
    font-weight: bold;
  }
  .A_text{
    width: 7%;
    p{
    font-size: 14px;
    margin: 0 0 10px;
    display:block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    text-align: left;
  }
  }
  .A_img3{
    width: 60%;
  }
  img{
    margin-left: 70%;
    float: right;
    margin-top:-200px;
  }
  // p{
  //   float: right;
  //   margin-top:-130px;
  //   margin-right: 23%;
  // }
}

}

</style>


