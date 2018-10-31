<template>
	<div>
      <Header></Header>
      <Headerbar v-bind:mydata='barItem'></Headerbar>
      <div class="news-container">
        <el-row >
            <el-col :span="5"><div class="grid-content red"><h4>最新资讯</h4></div></el-col>
            <el-col :span="6" :offset="7"><router-link to="/allnews" target="_blank" class="red">全部></router-link></el-col>
            <el-col :span="6" :pull="2"><div class="grid-content red"><h4>热门资讯</h4></div></el-col>
        </el-row>
        <el-row >
          <el-col :span="5" :offset='1'><div class="grid-content onenews"><img src="../assets/logo.png" alt=""></div></el-col>
          <el-col :span="5" ><div class="grid-content onenews"><img src="../assets/logo.png" alt=""></div></el-col>
          <el-col :span="5" ><div class="grid-content onenews"><img src="../assets/logo.png" alt=""></div></el-col>
          <el-col :span="5" ><div class="grid-content onenews"><img src="../assets/logo.png" alt=""></div></el-col>
        </el-row>
        <!-- <router-link to="/hottopic" target="_blank">{{msg}}</router-link>
    	  <h1>{{ msg }}</h1> -->
      </div>
 	</div>
</template>
<script>
import header from "@/components/header";
import headerbar from "@/components/headerbar";
export default {
  data() {
    return {
      barItem: [{linkto:'/hottopic',title:'热点首页'},
                {linkto:'/news',title:'新闻资讯'},
                {linkto:'/preview',title:'预告片'},
                {linkto:'/pic',title:'精彩图集'}]
    };
  },
  methods: {},
  components: {
    Header: header,
    Headerbar:headerbar
  }
};
</script>



<style>
* {
  margin: 0;
  padding: 0;
}
.news-container{
  margin-top: 40px;
}
h4 {
  font-size: 26px;
  line-height: 1;
  margin-bottom: 20px;
  font-weight: 400;
}
.red {
  color: #ef4238;
  text-decoration: none;
}

.onenews{
  width: 230px;
  height: 195px;
  /* overflow: hidden; */
}
.onenews img{
  width: 230px;
  height: 129px;
  /* overflow: hidden; */
}
</style>
