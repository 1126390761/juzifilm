<template>
<div class="moviestar">
    <i></i><span>职业演员</span>
    <div class="director">
      <p>导演</p>
      <img src="@/assets/director.jpg" alt="">
      <p class="name">西达尔特.马尔...</p>
    </div>
    <div class="star">
      <p>演员</p>
      <ul>
        <li>
          <img src="@/assets/actor-one.jpg" alt="">
          <p>拉妮·玛克赫吉</p>
          <p class="small">饰：奈娜 </p>
        </li>
        <li>
          <img src="@/assets/actortwo.jpg" alt="">
          <p>内拉吉·卡比</p>
          <p class="small">饰：瓦迪亚先生</p>
        </li>
        <li>
          <img src="@/assets/actorthree.jpg" alt="">
          <p>苏普丽雅·皮尔</p>
          <p class="small">饰：苏哈</p>
        </li>
        <li>
          <img src="@/assets/actorfour.jpg" alt="">
          <p>罗特·萨拉夫</p>
          <p class="small">饰：阿克沙伊</p>
        </li>
      </ul>
    </div>

</div>
</template>

<script>


export default {
  name: 'App'
}
</script>
    
<style  scoped>
.moviestar{
    height: 280px;
    width: 735px;
    margin-top: 50px;
    margin-left: 75px;
    position: relative;
}

span{
    font-size: 18px;
    display:inline-block;
    margin-bottom: 25px;      
}
i{
    width: 5px;
    height: 18px;
    display:inline-block;
    background-color: #df2d2d;
    margin-right: 5px;
}
.director{
  width: 130px;
  height: 235px;
  position: absolute;
  left: 0;
  top:40px;
}
.director p{
  margin-bottom: 15px;
}
.name{
  margin-left: 10px;
}
.star{
  width: 575px;
  height: 260px;
  position: absolute;
  left: 165px;
  top:40px;
}
.star>p{
  margin-bottom: 15px;
}
ul{
  float: left;
}
ul>li{
  margin-right: 15px;
  list-style-type: none;
  float: left;
}
li>p{
  margin-left: 5px;
}
.small{
  font-size: 14px;
}
</style>
