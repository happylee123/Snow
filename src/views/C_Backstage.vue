<template>
  <div class="Backstage">
     <div class="container">
       <h2>关于我们</h2>
     </div>
      <div class="imgs" >
        <img src="./../assets/u4.png" alt="" >
      </div>
      <div class="text_center">
        <p>在索尼，我们的使命就是成为一家激发和满足您好奇心的公司。</p>
        <p>我们在产品、内容与服务方面的无尽激情，</p>
        <p>和对创新的不懈追求，</p>
        <p>让我们创造出只有索尼才能提供的前所未有的、新的兴奋和娱乐。</p>
        <p>开创独特的新鲜文化与体验。</p>
        <p>一切所为，均为与您情感相系。</p>
      </div>
      <hr>
  </div>
</template>

<script>
//import Cheader from "../components/C_header"
export default {
  data(){
    return{
      //img:require('./../assets/u4.png')
    }
  }
}
</script>
<style lang = "less" scoped>
  .container{
    width: 80%;
    margin: 0 auto;
    h2{
      font-size: 30px;
    }
  }
  .imgs{
    width: 100%;
  }
  .text_center{
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    margin-top: 80px;
    p{
      display: block;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      color: #333;
    }
  }
  hr{
    width: 80%;
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }
</style>
