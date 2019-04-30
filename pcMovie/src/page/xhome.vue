<template>
        <div class="home">
            <Header></Header>
             <el-carousel indicator-position="outside" height="440px">
                <el-carousel-item v-for="item in imgList" :key="item">
                <img :src="item" alt="">
                </el-carousel-item>
            </el-carousel>
            <div>
                <el-row>
                <el-col :span="14">
                    <div class="main">
                  <div class="panel-header">
                    <span class="panel-more">
                      <router-link to=""><span class="textcolor_red">全部<i class="el-icon-arrow-right"></i></span></router-link>
                       
                    </span>
                    <span class="panel-title">
                        <span class="textcolor_red">正在热映（60部）</span>
                    </span>
                         </div>
                    <div class="movie-list">
                          <movieItem class="movieItem" v-for="(item,ind) in imgUrl" :key="ind" :mydata="item"></movieItem>
                    </div>
                  </div>
                </el-col>
                <el-col :span="10">
                    <aside>
                    </aside>
                </el-col>
                </el-row>

            <el-row class="movielist-two">
                <el-col :span="14">
                    <div class="main">
                  <div class="panel-header">
                    <span class="panel-more">
                      <router-link to=""><span class="textcolor_red">全部<i class="el-icon-arrow-right"></i></span></router-link>
                    </span>
                    <span class="panel-title">
                        <span class="textcolor_red">即将上映</span>
                    </span>
                         </div>
                    <div class="movie-list">
                          <movieItem2 class="movieItem" v-for="(item,ind) in upcomdata" :key="ind" :mydata2="item" :date="new Date(item['m_date'])"></movieItem2>
                    </div>
                  </div>
                </el-col>
                <el-col :span="10">
                    <aside>
                    </aside>
                </el-col>
                </el-row>
            </div>
            <rankingList class="aside" :listData="descData" :title='title2'></rankingList>
            <preranking :listData='pre_ranking' class="videobox"></preranking>
            <listfooter></listfooter>
        </div>
</template>

<script>
import header from "@/components/header";
import movieItem from "@/components/movieItem";
import movieItem2 from "@/components/movieItem2";
import img1 from "@/assets/home_one.jpg";
import img2 from "@/assets/home_two.jpg";
import img3 from "@/assets/home_three.jpg";
import rankingList from '@/components/rankingList'
import listfooter from '@/components/listfooter'
import pre_ranking from '@/components/pre_ranking'
export default {
  data() {
    return {
      imgList: {
        img1: img1,
        img2: img2,
        img3: img3
      },
      imgUrl:{},
      upcomdata:{},
      descData:{},
      title2:'今日热门',
      news: [],
      previews: [],
      news_ranking:[],
      pre_ranking:[]
    };
  },
  components: {
    'Header': header,
    'movieItem':movieItem,
    'movieItem2':movieItem2,
    'rankingList':rankingList,
    'listfooter':listfooter,
    'preranking':pre_ranking
  },
  created:function(){
      let _this=this;
        _this.axios({
			method: "post",
            url: _this.url + "/show",
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
					}).then(response => {
                        // console.log("请求成功")
                        _this.imgUrl=response.data.r;
                     
					}).catch(response => {
						console.log("请求失败");
            });
            _this.axios({
			method: "post",
            url: _this.url + "/show2",
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
					}).then(response => {
                        // console.log("请求成功")
                        _this.upcomdata=response.data.r;
                     
					}).catch(response => {
						console.log("请求失败");
            });
            // 获取排行榜信息
            _this.axios({
			method: "post",
            url: _this.url + "/show3",
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
					}).then(response => {
                        // console.log("请求成功")
                        _this.descData=response.data.r;
                        // console.log(_this.descData)
					}).catch(response => {
						console.log("请求失败");
            });

            _this.axios({
                method: "GET",
                url: "http://localhost:81/hottopic/news"
            })
            .then(res => {
                // console.log("数据请求成功");
                _this.news = res.data.newslist;
                _this.news_ranking=res.data.newsranking;
                _this.previews = res.data.previews;
                _this.pre_ranking=res.data.preranking;
                // console.log(_this.previews);
            })
            .catch(res => {
                console.log("请求失败");
            });
  }
};
</script>


<style scoped>

.textcolor_red {
    color: #ef4238;
}

a{
    text-decoration: none;
}
.home{
    position: relative;
}
.panel-title {
    font-size: 26px;
    color: #ffb400;
}
.panel-more {
    font-size: 14px;
    line-height: 16px;
    float: right;
    margin-top: 10px;
}
.panel-more>a{
    position: relative;
    left:-50px;
}
.main{
 
    position: relative;
    left: 90px;
}
.movies-list {
  width: 100%;
  margin: 0 auto;
}
.movieItem{
    display: inline-block;
    margin: 10px 10px;
}
.aside{
    position: absolute;
    top: 550px;
    right:60px;
}
.movielist-two{
    margin-top: 25px;
}
.videobox{
    position: absolute;
    left: 900px;
    top: 1180px;
}
</style>
