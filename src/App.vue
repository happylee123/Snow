<template>
  <div id="app">
     <keep-alive exclude="login,cart,register,forget,changepass">
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
