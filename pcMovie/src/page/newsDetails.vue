<template>
<div>
    <Header></Header>
    <div id='container'>
        <h1>{{news.title}}</h1>
        <span v-if="news.cate==1">橘子电影</span>
        <span v-else>橘子娱乐</span>
        <span>{{news.addtime}}</span>
        <span class="watchtimes"><i class="el-icon-view"></i>{{news.watchtimes}}</span>
        <div v-html="news.content">
        </div>
    </div>
    <div class="related">
        <span v-if="news.cate==1">相关电影</span>
        <span v-else>相关明星</span>
        <img :src="news.mainimg" alt="">
        <p>{{news.related}}</p>
    </div>
    <Listfooter></Listfooter>
</div>
</template>
<script>
    import header from "@/components/header";
    import listfooter from '@/components/listfooter';
    export default {
    data() {
        return {
            nid:1,
            news:{}
        }
    },
    methods: {
      
    },
    mounted:function(){
        let _this = this;
        console.log(this.$route.params);
        _this.nid=this.$route.params.newsid;
        _this.axios({
        method: "GET",
        url: _this.url+"/hottopic/newsdetails?nid="+_this.nid+""
        })
        .then(res => {
        console.log(res.data.addtime);
        _this.news = res.data;
        let d = new Date(res.data.addtime);
        let time =d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes();
        _this.news.addtime=time;
      })
      .catch(res => {
        console.log(res);
      });
    },
    components: {
    Header: header,
    Listfooter:listfooter
  }
  }
</script>
<style scoped>
    #container{
        width: 60%;
        margin-top: 40px;
        position: relative;
        left: 130px;
    }
    #container span {
        display: inline-block;
        color: #999;
        font-size: 16px;
        margin: 30px 10px 40px 0;
    }
    .related{
        width: 106px;
        position: absolute;
        top: 300px;
        right: 220px;
    }
    .related span{
        display: inline-block;
        text-align: center;
        padding: 0 0 0 10px;
        border-left: 3px solid red;
        color: #333;
        font-size: 18px;
    }
    .related img{
        width: 106px;
        height: 145px;
        margin: 10px auto 0;
    }
    .related p{
        display: inline-block;
        font-size: 13px;
        color: #333;
    }
</style>
