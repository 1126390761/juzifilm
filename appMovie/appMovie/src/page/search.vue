<template>
	<div id="">
		<search 
			v-model="value" position="fixed" auto-scroll-to-top 
			 @on-submit="onSubmit" ref="search">
		</search>
		<div class="search-result-box">
			<dl class="movie-list">
				<!--v-for="(item,ind) in searchdata" :key="ind"-->
				<dd class="container" v-for="(item,ind) in searchdata" :key="ind" v-if="searchdata.length>0">
					<router-link :to="{path:'/detail',query: {mid: item['mid']}}"> <img :src="item['m_mainpic']" alt="">
					<!--<router-link to=""> <img src="http://p1.meituan.net/movie/a05a03a1b1b6c678eb7ef73a8347f4682641527.jpg@160w_220h_1e_1c" alt=""></router-link>-->
					<div class="content">
						<!--:to="{path:'/movieinfo',query: {mid: item['mid']}}"-->
						<h3> <router-link to="">{{item.m_name}}</router-link></h3>
						<p class="text-color">{{item.m_ename}}</p>
						<span>{{item.m_score2}}</span>
						<p>{{item.m_type}}</p>
						<p>{{new Date(item['m_date']).getFullYear()}}-{{new Date(item['m_date']).getMonth()+1}}-{{new Date(item['m_date']).getDate()}}大陆上映</p>
						<!--<p>2018-10-26大陆上映</p>-->
					</div>
					</router-link>
				</dd>
				<dd class="container" v-if="searchdata.length==0">
					<h3 class="text-color" style="text-align: center;margin-top: 15px;">未找到 NOT FOUND</h3>
				</dd>
			</dl>
		</div>
	</div>
</template>

<script>
		import { Search, Swiper } from 'vux';
	export default {
		data() {
			return {
				results: [],
    			value: '',
    			searchdata:[]
			};
		},
		components: {
			Search,
		},


		methods: {
			search: function(data) {
				this.axios({
					method: "post",
					url:"/search",
					data: data,
					transformRequest: [function(data) {
						let ret = ''
						for(let it in data) {
							ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
						}
						return ret;
					}],
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					}
				}).then(response => {
//					console.log(response.data.r);
					// window.location.reload();
					this.searchdata = response.data.r;
				}).catch(response => {
					console.log("请求失败");
				})
			},
		onSubmit() {
//		console.log(this.value)
		this.search(this.value)
			},

		},


}
</script>

<style scoped>
	.search-result-box {
		position: relative;
		margin: 0 auto;
		padding-top: 50px;
	}
	
	.movie-list {
		overflow: hidden;
	}
	
	.movie-list>.container {
		width: 460px;
		float: left;
		position: relative;
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;
		padding-left: 10px;
	}
	
	.container img {
		/*width: 140px;
		height: 180px;*/
		
	    width: 120px;
   		height: 145px;
   		
	}
	
	.content {
		position: absolute;
		left: 140px;
		top: 10px;
	}
	
	.text-color {
		color: #999;
	}
	
	.content span {
		color: #ffb400;
		font-size: 26px;
		display: inline-block;
		margin: -8px 0 -4px 0;
	}
	
	h3 a {
		color: #333;
		font-size: 18px;
	}
</style>