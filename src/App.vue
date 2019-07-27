<template>
  <div id="app">
     <keep-alive exclude="login,register,forget,changepass,index,order,compelet,pay">
          <router-view></router-view> 
     </keep-alive>
  </div>
</template>
<script>

export default {
 
}
</script>

<style lang="less">


</style>
