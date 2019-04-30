<template>
    <div>
        <Header></Header>
        <div class="searchbox">
              <el-input v-model="input" placeholder="找影视剧"></el-input>
              <!-- <router-link :to="{path:'/search',query: {value: input}}"> -->
              <span class="goto" @click="search(input)"> <img src="@/assets/search.png" alt=""></span>
             
              <!-- </router-link> -->
        </div>
        <div class="search-result-box">
        <dl class="movie-list" >
        <dd class="container" v-for="(item,ind) in searchdata" :key="ind">
            <router-link :to="{path:'/movieinfo',query: {mid: item['mid']}}"> <img :src="item['m_mainpic']" alt=""></router-link>
           
            <div class="content">
                 <h2> <router-link :to="{path:'/movieinfo',query: {mid: item['mid']}}">{{item['m_name']}}</router-link></h2>
                 <p class="text-color">{{item['m_ename']}}</p>
                 <span>{{item['m_score2']}}</span>
                 <p>{{item['m_type']}}</p>
                 <p>{{new Date(item['m_date']).getFullYear()}}-{{new Date(item['m_date']).getMonth()+1}}-{{new Date(item['m_date']).getDate()}}大陆上映</p>
            </div>
        </dd>
        </dl>
        </div>
    <listfooter></listfooter>
    </div>
</template>


<script>
import header from "@/components/header";
import listfooter from '@/components/listfooter'
export default {
  data() {
    return {
      input: "",
      value1:this.$route.query.value,
      searchdata:[]
    };
  },
  components: {
    'Header': header,
    'listfooter':listfooter
  },
  // updated(){
  //   this.search(this.value1);
  // },
  // watch:{
  //   value1:function(){
  //     this.search(this.value1);
  //   },
  //   value2:function(){
  //     this.search(this.value2);
  //   }
  // },
  mounted() {
    this.search(this.value1);
  },
  methods:{
    search: function(data){
      // console.log(data);
      // window.location.reload()
      // return;
      	this.axios({
						method: "post",
            url: this.url + "/search",
            data: data,
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
            
            console.log(response.data.r);
            // window.location.reload();
						this.searchdata=response.data.r;
					}).catch(response => {
						console.log("请求失败");
					})
    }
  }
};
</script>


<style scoped>
.searchbox {
  width: 100%;
  height: 156px;
  background: #47464a;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
}
.el-input {
  width: 630px;
  height: 50px;
}
.searchbox .goto {
  margin: -8px 0 0 -30px;
  z-index: 2;
  cursor:pointer;
}
.search-result-box {
  width: 950px;
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
    margin-bottom: 50px;
    margin-left: 10px;
    border-bottom: 1px solid #ccc;
}
.container img{
    width: 160px;
    height:220px;
}
.content{
    position: absolute;
    left: 180px;
    top: 40px;
}
.text-color{
    color:#999;
}
.content span{
   color: #ffb400;
   font-size: 26px;
   display: inline-block;
   margin: 10px 0 10px 0;
}
h2 a{
  color: #333;
}
</style>
