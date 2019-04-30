<template>
	<div>
		<div id="movieItem">
			<router-link to="" class="hot">即将上映</router-link>
			<router-link to="" class="info">全部 <x-icon type="ios-arrow-right" size="15"></x-icon></router-link>
			<scroller lock-y :scrollbar-x=false :bounce=false>
				<div class="box1">
					
					<div class="box1-item" v-for="(item,ind) in upcomdata">
						<router-link :to="{path:'/detail',query: {mid: item['mid']}}" >
						<img  class="img-item" :src="item.m_mainpic"/>
						<img class="bacg"  src="@/assets/movieBg.png"/>
						<p class="score">{{item.m_socre}}</p>
						<h3 class="title">{{item.m_name}}</h3>
						</router-link>
						<span>{{new Date(item['m_date']).getMonth()+1}}月{{new Date(item['m_date']).getDate()}}日</span>
					</div>
				</div>
			</scroller>
		</div>
	</div>
</template>

<script>
	import { Scroller } from 'vux'
	
	export default {
		props:['upcomdata'],
		components: {
			Scroller
		}
	}
</script>

<style scoped>
a:active,a:link,a:visited{
  color: #000;
}
#movieItem{
	margin-top: 10px;
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
 text-overflow: ellipsis;
 
 white-space: nowrap;

}
.box1-item {
  width: 100px;
  height: 170px;
  /*background-color: #ccc;*/
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
	font-size: 16px;
	font-weight: 500;
	text-overflow: ellipsis;
	left:5px;
	width: 100px;
	 overflow: hidden;
 	text-overflow: ellipsis;
	 white-space: nowrap;

}
.box1-item>span{
	position: absolute;
	top: 100px;
	left: 10px;
	color: #333;
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