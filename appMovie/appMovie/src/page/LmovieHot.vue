<template>
  <div>
    <lmovie-nav :state="m_state"></lmovie-nav>

    <div class="container">
    	<div class="ticket">
    		<ul>
    			<li><img src="../assets/ticket.png" alt="" /> 实时票房</li>
    			<li>今日大盘 <span style="color: red;">1321.0万</span><x-icon type="ios-arrow-right" size="20"></x-icon></li>
    		</ul>
    		<div style="clear: both;"></div>
    	</div>
    	<lmovie-pic :picture="moviespic"></lmovie-pic>
    </div>
    <footer-bar style="position: fixed;margin-top: 20px;"></footer-bar>
  </div>
</template>

<script>
import FooterBar from "@/components/FooterBar";
import LmoviePic from "@/components/LmoviePic";
import LmovieNav from "@/components/LmovieNav";

export default {
	components: {
		FooterBar,
		LmoviePic,
		LmovieNav
	},
	data() {
		return {
			moviespic: [],
			t: '',
			m_state: '1',
			pagesize: 6,
			totalmovies: 0,
			currentpage: 1,
		}
	},
	created() {
		this.getMovie();
	},
	watch: {
		m_state: function() {
			this.getMovie();
		}
	},
	methods: {
		getMovie() {
			let This = this;
			This.axios.get("http://localhost:81/lt/lmovie", {
				params: {
					m_state: This.m_state,
					pagesize: This.pagesize,
					currentpage: This.currentpage
				}
			}).then(function(response) {
//				console.log(response);
				This.moviespic = response.data.lists;
//				This.moviespic = response.data;
				This.totalmovies = response.data.totalnums;
			}).catch(function(error) {
				console.log(error);
			});
		},
		changeMovie(t) {
			// console.log(t);
			this.m_state = t;
		}
	}
}
</script>


<style>
.container {
	margin: 0px 10px 10px;
	padding: 0 10px;
}

.container .ticket {
	width: 90%;
	height: 40px;
	line-height: 40px;
	background-color: #ddd;
	margin: 0 auto;
	padding: 0px 20px;
	position: relative;
}

.ticket svg {
	position: absolute;
	right: 3px;
	top: 10px;
}

ul>li {
	list-style: none;
}

.ticket>ul>li:first-child {
	float: left;
	margin-left: 15px;
}

.ticket>ul>li:nth-child(2) {
	float: right;
} 

.ticket img {
	width: 20px;
	height: 20px;
	position: absolute;
	top: 8px;
	left: 10px;
}

</style>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        