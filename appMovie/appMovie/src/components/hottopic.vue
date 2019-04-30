<template>
  <div>
      <router-link to="" v-for="item in news" :key="item.id">

        <div class="onenews">
            <img :src="item.mainimg" alt="" width="30%" height="80px">
            <p class="title">{{item.title}}</p>
            <span class="info cate">猫眼资讯</span>
            <span class="info">点击量：123456</span>
        </div>
      </router-link>

        <!-- <button type="button" @click="morenews">123</button> -->
      <p class="formore" v-if="formore" @click="morenews">——————&nbsp;&nbsp;点击加载更多&nbsp;&nbsp;——————</p>
      <p class="formore" v-else>——————&nbsp;&nbsp;我是有底线的&nbsp;&nbsp;——————</p>
  </div>
</template>

<script>
import { LoadMore,Divider } from 'vux'

export default {
  components: {
      LoadMore,
      Divider
  },
  data () {
    return {
      news:[],
      formore:true
    }
    
  },
  created() {
    let _this = this;
    _this.formore=true;
    _this.axios({
        method: "GET",
        url: _this.url+"/hottopic/newslist"
      })
      .then(res => {
        console.log("数据请求成功");
        _this.news = res.data;
        //  console.log(res.data);
      })
      .catch(res => {
        console.log("请求失败");
      });
  },
  methods:{
      morenews:function () {    
                let _this = this;
                _this.axios({
                    method: "GET",
                    url: _this.url+"/hottopic/morenews"
                })
                .then(res => {
                    console.log("数据请求成功");
                    // console.log(res.data);
                    if(res.data.length==0){
                        _this.formore=false;
                    }
                    for (const item of res.data) {
                        _this.news.push(item);                       
                    }
                })
                .catch(res => {
                    console.log("请求失败");
                });
      }
  }
}
</script>

<style>
    *{
        margin: 0;
        padding: 0;
    }
    a{
        text-decoration: none;
        color: black;
    }
    .onenews{
        position: relative;
        border-bottom: 1px solid #e0e0e0;
        padding: 8px;
    }

    /* .onenews span {
        font-size: 14px;
    } */
    .onenews img{
        border-radius: 5px;
    }
    .title{
        display: inline-block;
        width: 65%;
        position: absolute;
    }
    .info{
        color: #919191;
        font-size: 14px;
    }
    .cate{
        position: absolute;
        right: 8px;
        bottom: 8px;
    }

    .formore{
        display: inline-block;
        width: 100%;
        margin: 0 auto;
        color: #919191;
        text-align: center;
        font-size: 12px;
    }

</style>
