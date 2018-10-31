<template>
    <div>
<el-row  >
  <el-col class="movie-poster" v-for="(o, index) in 1" :key="o" :offset="index > 0 ? 1 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img src="http://localhost:81/uploads/2018/10/154095668421636896243.jpg" class="image">
      <img src="../assets/movieBg.png" class="imgShadow">
      <div style="padding: -14px;" class="movieTitle">
        <span>为你写诗</span>
      </div>
      <div class=" clearfix bottom">
        <router-link to="">购票</router-link>
      </div>
    </el-card>
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
    box-shadow: 0 0px 0px 0 rgb(0,0,0);
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
   top: -20px;
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
  data() {
    return {
      currentDate: new Date(),

    };
  }
};
</script>