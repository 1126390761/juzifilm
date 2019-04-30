<template>
	<div >
		

  <div class="content" v-for="(item,ind) in descdata" :key="ind">
  	<router-link :to="{path:'/detail',query: {mid: item['mid']}}">
      <div class="icon">{{ind+1}}</div>
      <div class="pic">
          <img :src="item.m_mainpic" alt="">
      </div>
  
      <div class="detail">
          <p class="movie-name">{{item.m_name}}</p>
          <p class="movie-actor">{{item.m_director}}</p>
          <p class="movie-time">上映时间：{{new Date(item['m_date']).getFullYear()+'-'+(new Date(item['m_date']).getMonth()+1)+'-'+new Date(item['m_date']).getDate()}}</p>
      </div>
      <div class="score">{{item.m_score2}}</div>
      </router-link>
  </div>
  	</div>
</template>

<script>


export default {
  name: 'App',
  props:['descdata']
}
</script>
    
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.content{
    width:100%;
    height: 160px;
    margin-top:15px;
    position: relative;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    overflow: hidden;
}
.icon{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 25px;
    font-style: italic;
    width: 30px;
    height: 30px;
    background-color: rgb(194, 55, 55);
    color:#fff;
    text-indent: 5px;
    line-height: 20px;
    position: absolute;
    left: 5px;
    top: 25px;
    border-radius:0 0 30px 0;
    z-index:2;
}
.pic{
  	width: 100px;
    height: 180px;
    position: absolute;
    left:5px;
    top: 25px;
}
.pic>img{
	   width: 100px;
    height: 120px;
}
.detail{
     width: 200px;
     height: 220px;
     border-bottom: 1px solid #ccc;
    position: absolute;
    left: 115px;
    top: -25px;
        
}
.movie-name{
    font-size: 23px;
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
    font-size: 25px;
    font-weight: 700;
    color: #ffb400;
    font-style: italic;
    position: absolute;
    top: 30px;
    right:20px;
}
</style>
