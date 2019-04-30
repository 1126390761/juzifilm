<template>
	<div>
	
		<search @result-click="resultClick" @on-change="getResult" :results="results" v-model="value" position="absolute" auto-scroll-to-top  @on-focus="onFocus" @on-cancel="onCancel" @on-submit="onSubmit" ref="search">
		</search>
		<swiper :list="demo03_list" auto style="width:100%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center">
		</swiper>
		<movieItem1 :imgurl="imgUrl"></movieItem1>
		<movieItem2 class="" :upcomdata="upcomdata"></movieItem2>
		<hottopic class="hottopic"></hottopic>
		<!--<tabbar style="position:fixed"></tabbar>-->
		<FooterBar></FooterBar>

	</div>
</template>
<script>
	import { Search, Swiper } from 'vux';
	import tabbar from '@/components/home/tabbar';
	import movieItem1 from '@/components/home/movieItem1'
	import movieItem2 from '@/components/home/movieItem2'
	import FooterBar from '@/components/FooterBar';
	import hottopic from '@/components/hottopic';
	const imgList = [
		'http://p1.meituan.net/mmc/a17d8c1c7cef60828a51dec6dd0162cf61611.jpg',
		'http://p1.meituan.net/mmc/d436a965a2ad207b754064740b0b981164468.jpg',
		'http://p1.meituan.net/mmc/11cb6ffc62537bef62de0a1bc60aec0b135287.jpg'
	];
	const demoList = imgList.map((one, index) => ({
		url: 'javascript:',
		img: one
	}))
	export default {
		components: {
			Search,
			Swiper,
			'movieItem1': movieItem1,
			'movieItem2': movieItem2,
			'tabbar':tabbar,
			'FooterBar':FooterBar,
			'hottopic':hottopic
		},
		methods: {
			resultClick(item) {
				window.alert('you click the result item: ' + JSON.stringify(item))
			},
			getResult(val) {
				console.log('on-change', val)
				this.results = val ? getResult(this.value) : []
			},
			onSubmit() {
				console.log(this.value)
				this.axios({
					method: "post",
					url: this.url + "/search",
					data: this.value,
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

					console.log(response.data.r);
					// window.location.reload();
					this.searchdata = response.data.r;
				}).catch(response => {
					console.log("请求失败");
				})
			
		
	},
	onFocus() {
			window.location.href="/search"
		},
		onCancel() {
			console.log('on cancel')
		},
		show() {
			this.axios({
				method: "post",
				url: "/show",
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			}).then(response => {
				// console.log("请求成功")
				this.imgUrl = response.data.r;
//				console.log(this.imgUrl)
			}).catch(response => {
				console.log("请求失败");
			});
		},
		//获取即将上映的电影
		show2() {
			let _this = this;
			_this.axios({
				method: "post",
				url: _this.url + "/show2",
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			}).then(response => {
				// console.log("请求成功")
				_this.upcomdata = response.data.r;

			}).catch(response => {
				console.log("请求失败");
			});
		}
	},
	data() {
			return {
				results: [],
				value: 'test',
				demo03_list: demoList,
				imgUrl: [],
				upcomdata: []
			}
		},
		created() {
			this.show();
			this.show2();
		}
	}

	function getResult(val) {
		let rs = []
		for(let i = 0; i < 20; i++) {
			rs.push({
				title: `${val} result: ${i + 1} `,
				other: i
			})
		}
		return rs
	}
</script>
<style scoped>
	/*.fixed{
		position: fixed;
		bottom:0;
	}*/
	.search{
		position: fixed;
	}
	.hottopic{
		margin-bottom: 60px;
	}
</style>