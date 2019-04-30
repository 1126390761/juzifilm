<template>
	<div>
		<div id="">
			<router-link to="" class="hot">正在热映</router-link>
			<router-link to="" class="info">全部 <x-icon type="ios-arrow-right" size="15"></x-icon></router-link>
			<scroller lock-y :scrollbar-x=false :bounce=false>
				<div class="box1">
					
					<div class="box1-item" v-for="(item,ind) in imgurl" :key="ind" >
						<router-link :to="{path:'/detail',query: {mid: item['mid']}}" >
						<img  class="img-item" :src="item.m_mainpic"/>
						<img class="bacg"  src="@/assets/movieBg.png"/>
						<p class="score">橘子评分{{item.m_score2}}</p>
						<h3 class="title">{{item.m_name}}</h3>
						</router-link>
						<div class="border">
								<router-link to="">购票</router-link>
						</div>
					</div>
				</div>
			</scroller>
		</div>
	</div>
</template>

<script>
	import { Scroller } from 'vux'

	export default {
		props:['imgurl'],
		components: {
			Scroller
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped>
a:active,a:link,a:visited{
  color: #000;
}

.box1 {
  height: 100px;
  position: relative;
  /*width: 900px;*/
  width:940px;
  margin-top: 5px;
  height: 170px;
  margin-left: 10px;
  overflow: hidden;
}
.box1-item {
  width: 100px;
  height: 170px;
  display:inline-block;
  margin-left: 15px;
  float: left;
  text-align: center;
  line-height: 100px;
  position: relative;
}
.box1-item .img-item{
	width: 100px;
	height: 120px;
	position: relative;
}
.bacg{
	position: absolute;
	width: 100px;
	top: 69px;
	left: 0px;
}
.box1-item:first-child {
  margin-left: 0;
}
.box1-item .title{
	position: absolute;
	top: 80px;
	left:5px;
	font-size: 16px;
	font-weight: 500;
	width: 100px;
	 overflow: hidden;
 	text-overflow: ellipsis;
	 white-space: nowrap;
}
.box1-item>.border{
	border-radius: 30px;
	position:absolute;
	top: 140px;
	width: 50px;
	height: 25px;
	background:#ef4238;
	left: 2px;
}
.border>a{
	position: absolute;
	top:-37px;
	color:#fff;
	left: 10px;
	font-size: 14px;
}
.hot{
	font-size: 18px;
}
.info{
	float: right;
}
.score{
	position: absolute;
	top: 60px;

	font-size: 14px;
	color:#ffb400;
	text-indent: 5px;
	
}

</style>