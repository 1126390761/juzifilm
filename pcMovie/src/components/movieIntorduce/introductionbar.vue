<template>
 <div class="bar">
     <ul>
         <li>介绍</li>
         <li>演职人员</li>
         <li>图集</li>
     </ul>
 </div>
</template>

<script>


export default {
  name: 'App'
}
</script>
    
<style scoped>
.bar{
    margin-top: 75px;
    margin-left: 75px;
    width:735px;
    height: 40px;
    font-size: 18px;
    line-height: 40px;
    border-bottom:2px solid #ccc;
}
ul{
    float: left;
}
ul>li{
    float: left;
    list-style-type: none;
    margin-right: 30px;
}
ul>li:hover{
    color:#df2d2d;
    font-weight: 550;
    cursor: pointer;
}
</style>
