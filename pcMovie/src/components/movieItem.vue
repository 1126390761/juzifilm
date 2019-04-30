<template>
    <div>

<el-row>
  <el-col class="movie-poster" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 1 : 0">
    <router-link :to="{path:'/movieinfo',query: {mid: mydata['mid']}}">
    <el-card :body-style="{ padding: '0px' }">
      <img :src="mydata['m_mainpic']" class="image">
      <img src="../assets/movieBg.png" class="imgShadow">
      <div style="padding: -14px;" class="movieTitle">
        <span>{{mydata['m_name']}}</span>
      </div>
      <div class=" clearfix bottom">
        <router-link :to="{path:'/movieinfo',query: {mid: mydata['mid']}}">购票</router-link>
      </div>
    </el-card>
    </router-link>
  </el-col>
</el-row>

    </div>
</template>
<style>
.time {
  font-size: 13px;
  color: #999;
}

.el-card ,.el-card__body{
    width: 162px;
    height: 261px;
    box-shadow: 0 0px 0px 0 rgb(0,0,0) !important;
    cursor: pointer;
    -webkit-box-shadow: 0 0px 0px 0 rgb(0,0,0) !important;
}
.imgShadow{
    position: absolute;
    top: 141px;
}
.bottom {
    z-index: 2;
    text-align: center;
    padding-bottom: -10px;
    cursor: pointer;
    height: 39px;
    position: relative;
    top: -21px;
    line-height: 39px;
}
.bottom:hover{
     background: #ef4238;
}
.bottom:hover a{
    color:#fff;
}
.bottom a{
    color:#ef4238;
    text-decoration: none;
}
.movieTitle{
   position: relative;
   top: -30px;
   left: 10px;
   color:#fff;
}
.image {
  display: block;
  width: 162px;
  height: 220px;  
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
</style>

<script>
export default {
   props:['mydata'],
  data() {
    return {
}
  }
};
</script>