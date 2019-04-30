<template>
	<div>
		<sticky :check-sticky-support="false" :offset="46">
			<tab active-color="#fff" default-color="#333" bar-active-color="#3385ff" custom-bar-width="80px">
				<tab-item :selected="state==1">
					<router-link to="/lmoviehot">正在热映</router-link>
				</tab-item>
				<tab-item :selected="state==2">
					<router-link to="/lmoviewill">即将上映</router-link>
				</tab-item>
			</tab>
		</sticky>
		<div style="height: 50px;"></div>
	</div>
</template>

<script>
import { Tab, TabItem, Sticky } from 'vux'

export default {
	components: {
		Tab,
		TabItem,
		Sticky,
	},
	props:["state"]
}

</script>

<style>
	.vux-fixed,
	.vux-sticky-box {
		width: 100%;
		position: fixed;
		top: 0 !important;
	}

	.vux-tab {
		background-color: #ef4238 !important;
	}
	
	.vux-tab .vux-tab-item {
		font-size: 18px !important;
	}
	
	.vux-tab .vux-tab-item a {
		font-size: 18px !important;
		color: #333333;
	}
</style>