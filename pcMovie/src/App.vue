<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App'
}
</script>
    
<style>
* {
  margin: 0;
  padding: 0;
}
body{
        overflow-x: hidden;
    }
a{
  text-decoration: none;
}
ul,li,dl{
  list-style: none;
}
a:active,a:link,a:visited{
  color: #606266;
}
</style>
