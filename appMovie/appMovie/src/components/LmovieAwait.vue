<template>
	<div>
		<divider>近期最受期待</divider>
		<scroller lock-y :scrollbar-x=false>
			<div class="box1">
				<div class="box1-item" v-for="pic in await">
					<router-link to="/a">					
						<img :src="pic.m_mainpic"/>
					</router-link>
					<div class="m-score">
						<p>{{pic.m_socre}}</p>
					</div>
					<div class="mname">{{pic.m_name}}</div>
				</div>
			</div>
		</scroller>
		<divider>即将上映</divider>

	</div>
</template>

<script>
import { Scroller,Divider,Cell, } from 'vux'

export default {
  components: {
    Scroller,
    Divider,
    Cell
  },
  props:["await"],
  computed: {
        reversePic() {
            return this.await.reverse();
        }
	}
}

</script>

<style scoped="scoped">
	
	.box1 {
		height: 165px;
		position: relative;
		width: 800px;
		overflow: hidden;
	}
	
	.box1-item {
		width: 120px;
		height: 170px;
		/*background-color: #ccc;*/
		display: inline-block;
		margin-left: 15px;
		float: left;
		text-align: center;
		line-height: 170px;
		position: relative;
	}
	
	.box1-item .mname {
		position: absolute;
		top: 70px;
		width: 120px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: #333;
		font-size: 14px;
	}
	
	.box1-item a:active {
		color: #fff;
	}
	
	.box1-item>.m-score {
		width: 100%;
		height: 40px;
		/*opacity: 0.2;*/
		background-color: #333333;
	}
	
	.m-score p {
		position: absolute;
		top: 45px;
		width: 120px;
		color: #ffc600;
		font-size: 12px;
		z-index: 999;
	}
	
	.box1-item:first-child {
  		margin-left: 0;
}
	.box1-item img {
		display: inline-block;
		width: 120px;
		height: 140px;
		border: 1px cadetblue solid;
		border-radius: 5px;
	}

</style>

<style type="text/css">
	.vux-divider {
		margin: 15px 0px 10px;
		
	}
</style>
