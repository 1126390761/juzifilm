<template>
  <div>
    <lmovie-nav :state="m_state"></lmovie-nav>
    <div class="container">
    	<lmovie-pre :premovie="previews"></lmovie-pre>
    	<lmovie-await :await="moviesawait"></lmovie-await>
    	<lmovie-pic :picture="moviespic"></lmovie-pic>
    </div>
    <footer-bar style="position: fixed;"></footer-bar>
  </div>
</template>

<script>
import FooterBar from "@/components/FooterBar";
import LmoviePic from "@/components/LmoviePic";
import LmovieNav from "@/components/LmovieNav";
import LmoviePre from "@/components/LmoviePre";
import LmovieAwait from "@/components/LmovieAwait";

export default {
	components: {
		FooterBar,
		LmoviePic,
		LmovieNav,
		LmoviePre,
		LmovieAwait
	},
	data() {
		return {
			moviespic: [],
			moviesawait: [],
			t: '',
			m_state: '2',
			pagesize: 6,
			totalmovies: 0,
			currentpage: 1,
			previews:[],
		}
	},
	created() {
		this.getMovie();
		this.moviePre();
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
				console.log(response);
//				This.moviespic = response.data;
				This.moviespic = response.data.lists;
				This.moviesawait = [...response.data.lists].reverse();
				This.totalmovies = response.data.totalnums;
				
			}).catch(function(error) {
				console.log(error);
			});
		},
		moviePre() {
			let This = this;
			This.axios.get("http://localhost:81/lt/lmoviewill", {
				params: {
					m:2
				}
			}).then(function(response) {
				// console.log(response);
				This.previews=response.data;
			}).catch(function(error) {
				console.log(error);
			});
		},
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
