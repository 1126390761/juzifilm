<template>
 <div class="listrule">
   <p>2018-10-30 <span>已更新</span></p>
   <p>榜单规则：将昨日国内热映的影片，按照评分从高到低排列取前10名，每天上午10点更新。相关数据来源于“猫眼专业版”及“猫眼电影库”。</p>
 </div>
</template>

<script>
export default {
  name: 'App'
}
</script>    
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.listrule{
  width: 950px;
  height: 80px;
  margin: 0 auto;
  margin-top: 60px;
}
.listrule p{
    text-align: center;
    font-size: 12px;
    color: #999;
    margin-top: 10px;
}
.listrule span{
    color: #ffb400;
    margin-left: 4px;
}
</style>
