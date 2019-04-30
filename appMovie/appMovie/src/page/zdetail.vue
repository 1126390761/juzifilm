<template>
<div>
  <div class="banner">
     <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true" >电影</x-header>
     <div class="all">
       <div class="left">
         <img :src="movieData.m_mainpic"  alt="">
       </div>
       <div class="right">
         <p class="rightname">{{movieData.m_name}}</p>
         <p>{{movieData.m_ename}}</p>
         <p class="type">{{movieData.m_type}}</p>
         <p>{{movieData.m_area}}/ 100分钟</p>
         <p>{{new Date(movieData['m_date']).getFullYear()+'-'+(new Date(movieData['m_date']).getMonth()+1)+'-'+new Date(movieData['m_date']).getDate()}}大陆上映</p>
         <p class="num"><span>{{movieData.m_socre}}</span></p>
       </div>
     </div>
      <div class="footer">
         <div class="rate">
           <img src="../assets/orange.png" alt="">
           <div class="ratescore">
             <p>9-10分</p>
             <p>5-8分</p>
             <p>1-4分</p>
           </div>
            <div class="progress">
              <x-progress :percent="percent1"></x-progress>
              <box gap="10px">
      <x-progress :percent="percent2"  :show-cancel="false"></x-progress>
    </box>
              <x-progress :percent="percent3"></x-progress>
            </div>
         </div>
         <div class="score">
           <p class="catscore">橘子评分<span>{{movieData.m_score2}}</span></p>
           <p class="scorenum">24088人</p>
         </div>
         <div class="wish">
           <span><x-icon type="ios-heart" size="20" ></x-icon></span>想看</div>
         <div class="star"><span>
           </span><x-icon type="ios-star" size="20"></x-icon>看过</div>
       </div>
       <div class="story">
         <!--<p>克拉拉（麦肯吉·弗依 饰）一直在寻找一把钥匙——这把与众不同的钥匙将可以开启已故母亲装有无价之宝的盒子。在教父德罗塞尔梅耶（摩根·弗里曼 饰）举办的一次节日聚会上，一根金线指引着她找到了这把梦寐以求的钥匙，却在瞬间消失进入一个陌生而神秘的平行世界。在平行世界里，克拉拉结识了士兵菲利普（杰登·奈特 饰）、一群老鼠、以及分别掌管雪花王国、鲜花王国、糖果王国的三位国王。克拉拉和菲利普必须勇敢地接受第四位国王——暴君姜母（海伦·米伦 饰）的考验，才能够找回钥匙、并将和平重新带回这个摇摇欲坠的平行世界</p>-->
       		<p>{{movieData.m_infor}}</p>
       </div>
       <div class="actor">
         <span>演职人员</span>
       </div>
      <scroller lock-y :scrollbar-x=false>
      <div class="box1">
        <div class="box1-item" v-for="i in 2"></div>
      </div>
    </scroller>
      <div class="direct">
          <p>拉斯·霍尔斯道姆</p>
          <p>导演</p>
        </div>
  </div>
   <Moviepic :getcomment="getcomment"></Moviepic>
  </div>
 
   
</template>



<script>
import { Scroller, XHeader, Group, Cell, XProgress, Box } from "vux";
import moviepic from "@/components/home/moviepic";
export default {
  name: "app",
  components: {
    Scroller,
    XHeader,
    Group,
    Cell,
    XProgress,
    Box,
    Moviepic: moviepic
  },
  
  data() {
    return {
      percent1: 48,
      percent2: 43,
      percent3: 9,
      getMovieInfo:{mid:''},
      movieData:{},
      getcomment:{}
    };
  },
   created() {
    let mid=this.$route.query.mid;
    this.getMovieInfo.mid=mid;
    this.getInfo();
    this.getremark();
  },
  methods:{
      getInfo(){
       let _this=this;
       this.axios({
			  method: "post",
            url: _this.url + "/movieInfo",
            data: _this.getMovieInfo,
             transformRequest: [function (data) {
                let ret = ''
                for (let it in data) {
                  ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                }
                return ret;
              }],
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
					}).then(response => {
//            console.log("请求成功")
              _this.movieData=response.data.r[0];
              console.log(_this.movieData);       
					}).catch(response => {
						console.log("请求失败");
            });
      },
      // 获得当前电影的评论信息
       getremark(){
       let _this=this;
       this.axios({
			  method: "post",
            url: _this.url + "/getcomment",
            data: _this.getMovieInfo,
             transformRequest: [function (data) {
                let ret = ''
                for (let it in data) {
                  ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                }
                return ret;
              }],
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
					}).then(response => {
              console.log("请求成功")
              _this.getcomment=response.data.r;
              console.log(_this.getcomment);       
					}).catch(response => {
						console.log("请求失败");
            });
      }
  },
};
</script>

<style lang="less" scoped>
@import "~vux/src/styles/reset.less";
body {
  background-color: #fbf9fe;
}
.banner {
  background-image: url(http://ms0.meituan.net/mywww/banner_bg.f7fd103e3b8c16b6f449cce43fc57f45.png);
  width: 100%;
  height: 320px;
}
.vux-header {
  background-color: transparent;
}
.vux-header .vux-header-title {
  font-size: 14px;
}
.all {
  height: 140px;
  width: 100%;
  position: relative;
}
.left img {
  height: 140px;
  position: absolute;
  left: 15px;
}
.right {
  position: absolute;
  height: 120px;
  left: 130px;
  color: #fff;
}
.right p {
  font-size: 12px;
  font-weight: 100;
}
.right .rightname {
  font-size: 18px;
  font-weight: 400;
}
.right span {
  color: #ffc600;
  font-size: 14px;
}
.right .type {
  margin-top: 8px;
}
.right .num {
  margin-top: 8px;
}
.footer {
  width: 100%;
  height: 132px;
  color: #fff;
  position: relative;
}
.rate {
  width: 220px;
  height: 60px;
  background-color: #514262;
  position: absolute;
  left: 15px;
  top: 10px;
}
.rate img {
  width: 70px;
  height: 50px;
  margin-top: 10px;
  margin-left: -15px;
}
.progress {
  width: 118px;
  height: 50px;
  margin-left: 100px;
  margin-top: -40px;
}
.ratescore {
  width: 40px;
  height: 50px;
  margin-left: 50px;
  margin-top: -60px;
  font-size: 12px;
}
.ratescore p {
  margin-bottom: -3px;
}
.score {
  width: 100px;
  height: 60px;
  background-color: #514262;
  position: absolute;
  right: 15px;
  top: 10px;
}
.score p {
  margin: 5px;
}
.score .catscore {
  font-size: 12px;
  font-weight: 600;
}
.scorenum {
  font-size: 12px;
  font-weight: 100;
}
.catscore span {
  font-size: 16px;
  font-weight: 400;
  color: #ffc600;
}
.vux-x-icon {
  fill: #fff;
  display: inline-block;
  vertical-align: middle;
  margin-top: -2px;
  margin-right: 2px;
  width: 16px;
  height: 16px;
}
.wish {
  width: 160px;
  height: 40px;
  background-color: #514262;
  position: absolute;
  left: 15px;
  bottom: 10px;
  line-height: 40px;
  text-align: center;
}
.star {
  width: 160px;
  height: 40px;
  background-color: #514262;
  position: absolute;
  right: 15px;
  bottom: 10px;
  line-height: 40px;
  text-align: center;
}
.newslist ul li p {
  font-size: 14px;
  color: #555;
  line-height: 25px;
  height: 50px;
  overflow: hidden;
  transition: height 0.3s;
}
.story {
  margin-top: 20px;
  width: 100%;
  height: 100px;
}
.story p {
  height: 80px;
  overflow: auto;
}
.actor {
  width: 100%;
  height: 25px;
}
.actor span {
  display: inline-block;
  margin-left: 15px;
  font-weight: 700;
}
.actorall {
  display: inline-block;
  margin-left: 300px;
}
.box1 {
  height: 100px;
  position: relative;
  width: 1490px;
}
.box1-item {
  width: 100px;
  height: 120px;
  background-image: url(http://p1.meituan.net/movie/8681de5b3a26e25ab358353fe615020751012.jpg@128w_170h_1e_1c);
  background-size: 100px 120px;
  display: inline-block;
  margin-left: 15px;
  float: left;
  text-align: center;
  line-height: 100px;
}
.box1-item:first-child {
  margin-left: 0;
}
.direct {
  width: 100px;
  height: 35px;
  font-size: 12px;
  font-weight: 100;
}
.direct p {
  text-align: center;
}
</style>
