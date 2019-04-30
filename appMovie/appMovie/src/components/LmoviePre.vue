<template>
	<div>
		<divider>预告片推荐</divider>
		<scroller lock-y :scrollbar-x=false >
			<div class="box1">
				<div class="box1-item" v-for="(pre,ind) in premovie" :key="ind">
					<video controls>
						<source :src="pre.url" type="video/mp4" />
					</video>
				</div>
			</div>
		</scroller>
	</div>
</template>

<script>
import { Scroller,Divider } from 'vux'

export default {
  components: {
    Scroller,
    Divider
  },
  props:["premovie"],
}

</script>

<style scoped="scoped">
	.box1 {
		height: 100px;
		position: relative;
		width: 1490px;
	}
	
	.box1-item {
		width: 200px;
		height: 100px;
		/*background-color: #ccc;*/
		display: inline-block;
		margin-left: 15px;
		float: left;
		text-align: center;
		line-height: 100px;
	}
	
	
	.box1-item:first-child {
  		margin-left: 0;
}
	.box1-item video {
		display: inline-block;
		width: 180px;
		height: 100px;
	}

</style>

<style type="text/css">
	
	
	/*video::-webkit-media-controls-fullscreen-button{ display: none; }*/
	
</style>