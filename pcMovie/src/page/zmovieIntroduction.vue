<template>
  <div>
   <Header></Header>
   <Introduction :movieData='movieData' :buyTicket='buyTicket'></Introduction>
   <Introductionbar></Introductionbar>
   <Introductionstory :movieData='movieData'></Introductionstory>
   <Introductionstar></Introductionstar>
   <Introductionmovie></Introductionmovie>
   <div class="piccollect">
      <i></i><span>{{collect}}</span>
      <div class="picone"><img :src="address" alt="">
      </div> 
      <div class="picall">
        <img :src="addressone" alt="">
        <img :src="addresstwo" alt="">
        <img :src="addressthree" alt="">
        <img :src="addressfour" alt="">
      </div>
   </div>
     <div class="comment">
        <i></i><span>{{comment}}</span>
     </div>
   
     <div class="information">
       <div>
         <i></i>
         <span class="about">{{information}}</span>
       </div>
       <div>
         <img :src="informationone" alt="">
         <p class="inforone">{{inforone}}</p>
        <div class="catinfor">
           <span>{{catmovie}}</span>
         <span class="el-icon-view"></span>
         <span>14449</span>
         <span>3</span>
        </div>
       </div>
       <div>
         <img :src="informationtwo" alt="">
         <p class="infortwo">{{infortwo}}</p>
        <div class="catinforone">
         <span>{{catmovie}}</span>
         <span class="el-icon-view"></span>
         <span>7316</span>
         <span>0</span>
        </div>
       </div>
       <div>
         <img :src="informationthree" alt="">
         <p class="inforthree">{{inforthree}}</p>
        <div class="catinfortwo">
           <span>{{catmovie}}</span>
         <span class="el-icon-view"></span>
         <span>4984</span>
         <span>2</span>
        </div>
       </div>
     </div>
     <div class="clear"></div>
      <Hotcomment :getdata="getcomment"></Hotcomment>
    <shortcomment :mid="getMovieInfo"></shortcomment>
     <Listfooter></Listfooter>
  </div>

</template>


<script>
import header from "@/components/header";
import introduction from "@/components/movieIntorduce/introduction";
import introductionbar from "@/components/movieIntorduce/introductionbar";
import introductionstory from "@/components/movieIntorduce/introductionstory";
import introductionstar from "@/components/movieIntorduce/introductionstar";
import introductionmovie from "@/components/movieIntorduce/introductionmovie";
import hotcomment from "@/components/movieIntorduce/hotcomment";
import shortcomment from "@/components/movieIntorduce/shortcomment";
import listfooter from "@/components/listfooter";

export default {
  name: "App",
  components: {
    Header: header,
    Introduction: introduction,
    Introductionbar: introductionbar,
    Introductionstory: introductionstory,
    Introductionstar: introductionstar,
    Introductionmovie: introductionmovie,
    Hotcomment: hotcomment,
    Listfooter: listfooter,
    shortcomment:shortcomment
  },
  data() {
    return {
      comment: "热门短评",
      collect: "图集",
      information: "相关资讯",
      inforone: "《嗝嗝老师》全国热映中，好评不断引万千影迷集体力荐",
      infortwo: "《嗝嗝老师》曝图雷特版预告，呼吁拒绝歧视尊重差异",
      inforthree: "《嗝嗝老师》曝幕后特辑，匠人精神打造口碑佳作",
      catmovie: "猫眼电影",
      address: require("../assets/collectone.jpg"),
      addressone: require("../assets/collecttwo.jpg"),
      addresstwo: require("../assets/collectthree.jpg"),
      addressthree: require("../assets/collectfour.jpg"),
      addressfour: require("../assets/collectfive.jpg"),
      informationone: require("../assets/informationpicone.png"),
      informationtwo: require("../assets/informationpictwo.png"),
      informationthree: require("../assets/informationpicthree.jpg"),
      getMovieInfo:{mid:''},
      movieData:{},
      buyTicket:true,
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
      shortcomment:function(event){
          // console.log(111)
          },
      close:function(event){

      },
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
              // console.log("请求成功")
              _this.movieData=response.data.r[0];
              // console.log(_this.movieData);       
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
              // console.log("请求成功")
              _this.getcomment=response.data.r;
              // console.log(_this.getcomment);       
					}).catch(response => {
						console.log("请求失败");
            });
      }
  },
  
    
};
</script>


<style scoped>
.piccollect {
  width: 730px;
  height: 300px;
  margin-left: 75px;
  margin-top: 60px;
  position: relative;
}
i {
  width: 5px;
  height: 18px;
  display: inline-block;
  background-color: #df2d2d;
  margin-right: 5px;
}
.piccollect span {
  font-size: 18px;
  display: inline-block;
  margin-bottom: 25px;
}
.picone {
  width: 465px;
  height: 258px;
  position: absolute;
  left: 0;
  top: 42px;
}
.picall {
  width: 260px;
  height: 260px;
  position: absolute;
  right: 0;
  top: 42px;
}
.comment {
  margin-top: 60px;
  margin-left: 75px;
  position: relative;
}
.clear {
  clear: both;
}
.information {
  width: 360px;
  height: 331px;
  float: right;
  margin-top: -1282px;
  margin-right: 90px;
  position: relative;
  top: 348px;
  left: -15px;
}
.about {
  display: inline-block;
  margin-bottom: 20px;
}
.information img {
  margin-bottom: 10px;
}
.inforone {
  width: 210px;
  height: 40x;
  position: absolute;
  left: 150px;
  top: 50px;
}
.infortwo {
  width: 210px;
  height: 40x;
  position: absolute;
  left: 150px;
  top: 150px;
}
.inforthree {
  width: 210px;
  height: 40x;
  position: absolute;
  left: 150px;
  top: 250px;
}
.catinfor {
  color: #999;
  font-size: 14px;
  position: absolute;
  width: 180px;
  height: 20px;
  left: 150px;
  top:105px;
}
.catinforone {
  color: #999;
  font-size: 14px;
  position: absolute;
  width: 180px;
  height: 20px;
  left: 150px;
  top:205px;
}
.catinfortwo {
  color: #999;
  font-size: 14px;
  position: absolute;
  width: 180px;
  height: 20px;
  left: 150px;
  top:305px;
}
.shortcomment{
    width: 70px;
    height: 30px;
    position: absolute;
    right: 557px;
    top: 1508px;
    text-align: center;
    font-size: 14px;
    line-height: 30px;
    color: #ef4238;
    border-radius: 15px;
    border: 1px solid #ef4238;
    cursor: pointer;
}
.model{
    width: 570px;
    height: 470px;
    position: fixed;
    display: block;
    opacity: 1;
    z-index: 10000;
    left: 50%;
    top: 50%;
    margin-left: -285px;
    margin-top: -235px;
    border: 8px solid #ccc;  
    background-color: #fff; 
}
.del{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #ccc;
    margin-left: 540px;
}
.el-icon-close{
  text-align: center;
  line-height: 30px;
  color: #fff;
  font-size: 25px;
  font-weight: 500;
}
.modelscore input{
    display: block;
    height: 30px;
    width: 200px;
    margin-left: 190px;
    margin-bottom: 10px;
    text-align: center;
}
.modelcomment{
  margin-left: 30px;
  margin-top: 50px;
}
.submit{
position: absolute;
right: 15px;
bottom: 15px;
}
</style>
