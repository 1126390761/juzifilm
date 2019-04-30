<template>
<div class="movie">
    <i></i><span>相关电影</span>
    <div class="movieone">
        <img src="@/assets/movieone.jpg" alt="">
        <p>我不是药神</p>
        <p class="comment">9.6</p>
    </div>
       <div class="movietwo">
        <img src="@/assets/movietwo.jpg" alt="">
        <p>一出好戏</p>
        <p class="comment">8.3</p>
    </div>
       <div class="moviethree">
            <img src="@/assets/moviethree.jpg" alt="">
        <p>爸，我一定行的</p>
        <p class="comment">9.1</p>
    </div>
       <div class="moviefour" >
            <img src="@/assets/moviefour.jpg" alt="">
        <p>人间·喜剧</p>
        <p class="comment">暂无评分</p>
    </div>
       <div class="moviefive">
            <img src="@/assets/moviefive.jpg" alt="">
        <p>天气预爆</p>
        <p class="comment">暂无评分</p>
    </div>
       <div class="moviesix">
            <img src="@/assets/moviesix.jpg" alt="">
        <p>西虹市首富</p>
        <p class="comment">9.2</p>
    </div>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>
    
<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
* {
  margin:0px;
  padding: 0px;
}
.movie{
    width: 380px;
    height: 480px;
    float: right;
    margin-right: 84px;
    margin-top: -150px;
    position: relative;
}
i {
  width: 5px;
  height: 18px;
  display: inline-block;
  background-color: #df2d2d;
  margin-right: 5px;
}
.movie span {
  font-size: 18px;
  display: inline-block;
  margin-bottom: 25px;
}
.movieone{
    width:108px;
    height:205px;
    position: absolute;
    left: 0;
}
.movietwo{
    width:108px;
    height:205px;
    position: absolute;
    left: 130px;
}
.moviethree{
    width:108px;
    height:205px;
    position: absolute;
    left: 255px;
}
.moviefour{
    width:108px;
    height:205px;
    position: absolute;
    left: 0px;
    top: 270px;
}
.moviefive{
    width:108px;
    height:205px;
    position: absolute;
    left:  130px;;
    top: 270px;
}
.moviesix{
    width:108px;
    height:205px;
    position: absolute;
    left: 255px;
    top: 270px;
}
.movie p {
    color: #333;
    font-size: 14px;
    text-align: center;
}
.movie .comment{
     color: #ffb400;
     font-style: italic;
}
</style>
