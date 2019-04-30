<template>
  <div id="app">
 
    <router-view></router-view>
    <!--<tabbar slot="bottom"></tabbar>-->
   
  </div>
  	
</template>

<script>

export default {
  name: 'app',
   components: {
    
  },
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
a:active,a:link,a:visited{
  color: #333;
}
</style>
