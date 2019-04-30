<template>
<div>

	<listcontent :descdata="descdata"></listcontent>
		<tabbar slot="bottom"></tabbar>
<FooterBar></FooterBar>

</div>
</template>

<script>
	import tabbar from '@/components/home/tabbar';
	import listcontent from '@/components/home/listcontent'
	import FooterBar from '@/components/FooterBar';
    export default {
		components: {
			'listcontent': listcontent,
			'tabbar':tabbar,
			'FooterBar':FooterBar
	},
	beforeCreate() {
	
	let _this = this;
				_this.axios({
					method: "post",
					url: _this.url + "/show3",
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					}
				}).then(response => {
//					console.log("请求成功")
					_this.descdata = response.data.r;
//					console.log(_this.descdata)
				}).catch(response => {
					console.log("请求失败");
				});
		},
		methods: {
			
		},
		data(){
			return{
				descdata:{}
			}
		}
	}
</script>

<style>
</style>