<template>
  <div>
      <div class="moviepic">
          <p>视频剧照</p>
      </div>
      <div>
        <scroller lock-y :scrollbar-x=false>
      <div class="box1">
        <div class="box1-item" v-for="i in 4"></div>
      </div>
    </scroller>
      </div>
      <div class="short">
          <div class="shortcomment">短评</div> 
          <div class="write">写短评</div>
         <div v-for="(item,ind) in getcomment" class="commentbox" :key="ind">
          <div class="head">
              <img src="https://img.meituan.net/avatar/8ff3b15e32ceb514744a58bc68f86be527567.jpg@100w_100h_1e_1c" alt="">
          </div>
          <div class="user">
              <p class="name">KVforever<span class="tiket">购票</span></p>
              <p class="star"> <cell ><rater v-model="item.score" :data3="item.score" disabled></rater>{{item.score}}</cell></p>
          </div>
          
          <div class="comment">
              <!--<p>刚看完，觉得挺好看的，并不像影评说的那么一般，一贯地迪士尼公主电影，就特效来说，迪士尼电影一直在线，就情节来说，我觉得所谓的惊心动魄也不亚于当年的爱丽丝，感动的地方也很多，最后看到泪目，亲情友情爱情都很温暖，我觉得花并不贵的价格去看一场这样的电影，作为迪士尼忠实粉丝，很值！然后最后想说，没有彩蛋，最后芭蕾舞结束就可以走了，我等到最后╮(╯▽╰)╭</p>-->
          		<p>{{item['c_con']}}</p>
          </div>
        </div>
      </div>
      <div class="footer">
          特惠购票
      </div>
  </div>
</template>

<script>
import {
  Scroller,
  Divider,
  Spinner,
  XButton,
  Group,
  Cell,
  LoadMore,
  Range,
  Rater
} from "vux";
export default {
	props:['getcomment'],
  name: "app",
  components: {
    Rater,
    Scroller,
    Divider,
    Spinner,
    XButton,
    Group,
    Cell,
    Range,
    LoadMore
  },
  data(){
  	return {
  		data3:4.7,
  		
  	}
  }
};
</script>

<style lang="less" scoped>
@import "~vux/src/styles/reset.less";

body {
  background-color: #fbf9fe;
}
.moviepic {
  width: 100%;
  height: 25px;
  margin-top: 310px;
}
.moviepic p {
  margin-left: 15px;
  font-weight: 700;
}
.box1 {
  height: 100px;
  position: relative;
  width: 1490px;
}
.box1-item {
  width: 160px;
  height: 100px;
  background-image: url(http://p1.meituan.net/movie/90a4ced349230db69626184be5665e89179081.jpg@126w_126h_1e_1c);
  background-size: 160px 100px;
  display: inline-block;
  margin-left: 15px;
  float: left;
  text-align: center;
  line-height: 100px;
}
.box1-item:first-child {
  margin-left: 0;
}
.short {
  width: 100%;
  margin-top: 20px;
  position: relative;
}
.shortcomment {
  font-weight: 700;
  position: absolute;
  left: 15px;
  top: 5px;
}
.write {
  width: 80px;
  height: 30px;
  line-height: 30px;
  color: #fff;
  background-color: #df2d2d;
  font-size: 16px;
  font-weight: 100;
  text-align: center;
  position: absolute;
  right: 15px;
  top: 5px;
  border-radius: 30px;
}
.commentbox{
	position: relative;
	width: 100%;
	height:200px;
	overflow: hidden;
	text-overflow: ellipsis;
	border-bottom: 1px solid #ccc;
}
.head {
  width: 32px;
  height: 32px;
  position: absolute;
  left: 15px;
  top: 40px;
}
.head img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
.user {
  height: 35px;
  width: 280px;
  position: absolute;
  top: 35px;
  left: 65px;
}
.tiket {
  border: 1px solid #7cc6f9;
  color: #7cc6f9;
  border-radius: 5px;
  margin-left: 20px;
}
.star {
  margin-left: -35px;
  height: 30px;
  margin-top: -10px;
  width: 200px;
  display: inline-block;
}
.weui-cell__ft {
  color: #ffb400;
}
.comment {
  width: 100%;
  position: absolute;
  top: 100px;
  text-overflow: ellipsis;
}
.comment p {
  margin-left: 50px;
  text-overflow: ellipsis;

}
.footer {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: #df2d2d;
  position: fixed;
  bottom: 0px;
  z-index: 1000;
  color: #fff;
  font-weight: 100;
}
</style>
