<template>
	<div>
		<div class="header">
			<div class="">
				<img :src="info.headimg" alt="" v-if="info.headimg">
				<img src="http://p0.meituan.net/movie/7dd82a16316ab32c8359debdb04396ef2897.png" alt="" v-else>
				<p>{{info.username}}</p>
			</div>
		</div>
		<div class="personInfor">
			<ul class="box">
				<li>昵称：<span>{{info.username}}</span></li>
				<li>性别：<span>{{info.sex}}</span></li>
				<li>兴趣：<span>{{info.interest}}</span></li>
				<li>生日：<span>{{new Date(info.birthday).getFullYear()}}-{{new Date(info.birthday).getMonth()+1}}-{{new Date(info.birthday).getDate()}}</span></li>
				<li>个性签名：<span>{{info.moto}}</span></li>

			</ul>
		</div>
		<FooterBar></FooterBar>
	</div>
</template>

<script>
	import FooterBar from '@/components/FooterBar';
	import { XTextarea } from 'vux'
	export default {
		components: {
			'FooterBar': FooterBar,
			XTextarea
		},
		data() {
			return {
				info: '',
			}
		},
		methods: {
			getinfo() {
				let _this = this;
				_this.axios({
					method: "get",
					url: '/getinfo'
				}).then(response => {
					_this.info = response.data.r[0];
				}).catch(response => {
					console.log("请求失败");
				});
			}
		},
		created() {
        	this.getinfo()
    	},
	
	}
</script>

<style scoped>
	.header {
		width: 100%;
		display: flex;
		display: -webkit-flex;
		justify-content: center;
		height: 200px;
		border: 1px solid #ccc;
		align-items: center;
		text-align: center;
	}
	
	.header img {
		width: 80px;
		height: 80px;
		border-radius: 50%;
	}
	
	.box {
		position: relative;
	}
	
	.box>li {
		padding-left: 15px;
		height: 55px;
		line-height: 55px;
		border-bottom: 1px solid #ccc;
	}
	
	.box>li>span {
		position: absolute;
		right: 15px;
		width: 220px;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
</style>