<template>
	<div id="hottopic">
      <Header></Header>
      <Headerbar v-bind:playstates='barItem'></Headerbar>
        <div class="news-container">
          <el-row>
              <el-col :span="6"><div class="grid-content red"><h4>最新资讯&nbsp;&nbsp;&nbsp;</h4></div></el-col>
              <el-col :span="7" :offset='11'><router-link to="/allnews" target="_blank" class="red">全部<i class="el-icon-d-arrow-right"></i></router-link></el-col>
          </el-row>
          <el-main>
            <el-col :span="7" :offset="1" class="onenews"  v-for="(item,ind) in news" :key="ind" :index="item.nid+''">
              <div class="grid-content onenews">
                <router-link :to="{name:'newsdetails', params:{newsid:item.nid}}" target="_blank">
                  <img class="onenews" :src="item.mainimg" alt="">
                  <p>{{item.title}}</p>
                </router-link>
                <span class="little" v-if="item.cate==1">橘子电影</span>
                <span class="little" v-else>橘子娱乐</span>
                <span class="watchtimes"><i class="el-icon-view"></i>{{item.watchtimes}}</span>
                
              </div>
            </el-col>
          </el-main>
          <el-row>
              <el-col :span="6"><div class="grid-content blue"><h4>预告片速递</h4></div></el-col>
              <el-col :span="7" :offset='11'><router-link  to="/preview" target="_blank" class="blue">全部<i class="el-icon-d-arrow-right"></i></router-link></el-col>
          </el-row>
          <el-main>
            <el-col :span="7" :offset="1" class="preview1 pre_container" v-if="ind<1"  v-for="(item,ind) in previews" :key="ind" :index="item.nid+''">
              <div class="grid-content preview1">
                <router-link :to="{name:'predetails', params:{pid:item.pid}}" target="_blank">
                  <img :src="item.mainpic" class="preview1" alt="">
                  <img src="../assets/movieBg.png" class="preview1_bg" alt="">
                  <p>{{item.title}}</p>
                  <span class="m_watchtimes1"><i class="el-icon-caret-right"></i>{{item.watchtimes}}</span>
                </router-link>
              </div>
            </el-col>

            <el-col :span="7" :offset="1" class="previews pre_container pre_container_s" v-if="ind<previews.length-1"  v-for="(item,ind) in previews" :key="ind+1" :index="item.nid+''">
              <div class="grid-content previews">
                <router-link :to="{name:'predetails', params:{pid:previews[ind+1].pid}}" target="_blank">
                  <img :src="previews[ind+1].mainpic" class="previews" alt="">
                  <img src="../assets/movieBg.png" class="previews_bg" alt="">
                  <p>{{previews[ind+1].title}}</p>
                  <span class="m_watchtimes"><i class="el-icon-caret-right"></i>{{previews[ind+1].watchtimes}}</span>
                </router-link>
              </div>
            </el-col>
          </el-main>
        </div>  
      <Ranking-list v-bind:listData='news_ranking' class="news_ranking"></Ranking-list>
      <Preranking v-bind:listData='pre_ranking' class="pre_ranking"></Preranking>
      <Listfooter></Listfooter>
  </div> 
</template>
<script>
import header from "@/components/header";
import headerbar from "@/components/headerbar";
import rankingList from '@/components/news_ranking';
import preranking from '@/components/pre_ranking';
import listfooter from '@/components/listfooter';
export default {
  name: "hottopic",
  data() {
    return {
      barItem: [
        { linkto: "/hottopic", title: "热点首页" },
        { linkto: "/allnews", title: "新闻资讯" },
        { linkto: "/preview", title: "预告片" },
        { linkto: "/allpic", title: "精彩图集" }
      ],
      news: [],
      previews: [],
      news_ranking:[],
      pre_ranking:[]
    };
  },
  created() {
    let _this = this;
    _this.axios({
        method: "GET",
        url: _this.url+"/hottopic/news"
      })
      .then(res => {
        console.log("数据请求成功");
        _this.news = res.data.newslist;
        _this.news_ranking=res.data.newsranking;
        _this.previews = res.data.previews;
        _this.pre_ranking=res.data.preranking;
         console.log(_this.previews);
      })
      .catch(res => {
        console.log("请求失败");
      });
  },
  methods: {},
  components: {
    Header: header,
    Headerbar: headerbar,
    RankingList: rankingList,
    Preranking:preranking,
    Listfooter:listfooter
  }
};
</script>



<style>
* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none !important;
}

main a {
  font-size: 14px;
  color: #333;
  text-align: left;
}
main a:hover {
  color: #ef4238;
}

.el-row .el-col {
  text-align: center;
}
.el-main {
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
}

.news-container {
  margin-top: 40px;
  width: 70%;
}
.news-container main {
  padding-top: 0;
}

.onenews {
  width: 230px;
  height: 195px;
}
.onenews img {
  width: 230px;
  height: 129px;
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

.blue {
  color: #2d98f3;
}

.little {
  color: rgb(165, 162, 162);
  font-size: 12px;
  float: left;
}
.watchtimes {
  color: rgb(165, 162, 162);
  font-size: 13px;
  line-height: 13px;
  float: right;
}

.preview1 {
  width: 497px;
  height: 270px;
}
.pre_container {
  position: relative;
  height: 290px;
}
.preview1_bg {
  width: 497px;
  height: 50px;
  position: absolute;
  bottom: 20px;
  z-index: 10;
}
.preview1 p {
  position: absolute;
  width: 400px;
  bottom: 43px;
  color: aliceblue;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  z-index: 20;
}
.m_watchtimes1 {
  color: rgba(196, 200, 204, 0.774);
  position: absolute;
  bottom: 24px;
  left: 3px;
  z-index: 30;
}
.preview1 p:hover {
  color: #ef4238;
}

.previews {
  width: 230px;
  height: 125px;
}

.pre_container_s{
  height: 145px;
}

.previews p{
  position: absolute;
  width: 220px;
  bottom: 35px;
  color: aliceblue;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  z-index: 20;
}
.previews p:hover{
  color: #ef4238;
}

.m_watchtimes {
  color: rgba(196, 200, 204, 0.774);
  position: absolute;
  bottom: 22px;
  left: 3px;
  font-size: 12px;
  z-index: 30;
}

.previews_bg {
  width: 230px;
  height: 25px;
  position: absolute;
  bottom: 20px;
  z-index: 10
}

.news_ranking{
  position: absolute;
  right: 0px;
  top: 174px;
  width: 34%;
  margin: 0;
}
.pre_ranking{
  position: absolute;
  right: 0px;
  top: 628px;
  width: 34%;
  margin: 0;
}
</style>
