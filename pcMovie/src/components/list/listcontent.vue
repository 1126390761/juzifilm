<template>
<div>
  <div class="content" v-for="(item,ind) in listData" :key="ind">
         <router-link :to="{path:'/movieinfo',query: {mid: item['mid']}}">
      <div class="icon">{{ind+1}}</div>
      <div class="pic">
          <img :src="item['m_mainpic']"  alt="">
      </div>
      <div class="detail">
          <p class="movie-name">{{item['m_name']}}</p>
          <p class="movie-actor">主演：拉妮·玛克赫吉,内拉吉·卡比,苏普丽雅·皮尔加卡尔</p>
          <p class="movie-time">上映时间：2018-10-12</p>
      </div>
      <div class="score">{{item['m_score2']}}</div>
      </router-link>
  </div>
  </div>
</template>

<script>


export default {
  props:['listData'],
}
</script>
    
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.content{
    width:100%;
    height: 220px;
    margin-top:15px;
    position: relative;
}
.icon{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 25px;
    font-style: italic;
    width: 50px;
    height: 50px;
    background-color: rgb(194, 55, 55);
    color:#fff;
    text-align: center;
    line-height: 50px;
    position: absolute;
    left:200px;
    top:85px;
}
.pic{
    width: 160px;
    height: 220px;
    position: absolute;
    left:280px;
}
.pic img{
    width: 160px;
    height: 220px;
}
.detail{
     width: 685px;
     height: 220px;
     border-bottom: 1px solid #ccc;
     position: absolute;
     left:470px;
        
}
.movie-name{
    font-size: 26px;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 420px;
    display: block;
    margin-top: 55px;
}
.movie-actor{
        margin-top: 18px;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
}
.movie-time{
    margin-top: 8px;
    color: #999;
}
.score{
    font-size: 56px;
    font-weight: 700;
    color: #ffb400;
    font-style: italic;
    position: absolute;
    right:216px;
    line-height: 220px;
}
</style>
