<template>
    <div>
        <Header></Header>
        <Introduction :movieData='movieData' :buyTicket='buyTicket'></Introduction>
        <div class="show-date">
            <span>观影日期：</span>
            <span class="date-item">5月1日</span>
        </div>

    </div>
</template>

<script>
import Header from '@/components/header';
import introduction from "@/components/movieIntorduce/introduction";
export default {
    components:{
        Header: Header,
        Introduction:introduction

    },
    data() {
        return {
            getMovieInfo:{mid:''},
            movieData:{},
            buyTicket:false,
            date:"",
            mid:"",
            tid:""
        }
    },
    created() {
        this.mid=this.$route.query.mid;
        this.getMovieInfo.mid=this.mid;
        this.getInfo();
    },
    methods: {
        getInfo(){
            let _this=this;
            this.axios({
		        	method: "post",
                    url: _this.url + "/movieInfo",
                    data: _this.getMovieInfo,
                     transformRequest: [function (data) {
                        let ret = ''
                        for (let it in data) {
                          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
                        }
                        return ret;
                      }],
                      headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                      }
		            			}).then(response => {
                      // console.log("请求成功");
                      _this.movieData=response.data.r[0];
                      // console.log(_this.movieData);       
		            			}).catch(response => {
		            				console.log("请求失败");
                    });
        },
        get
    },
}
</script>

<style scoped>
    .show-date{}

</style>