<template>
  <div class="predetails">
    <div class="fix">
        <div class="top">
            <x-header :right-options="{showMore: true}" @on-click-more="showMenus = true"></x-header>
            <video width="100%" height="200px" controls  :src="pre.url"></video>
            <!-- <tab>
            <tab-item selected badge-label="1">收到的消息</tab-item>
            <tab-item badge-background="#38C972" badge-color="#fff" badge-label="2">发出的消息</tab-item>
            </tab> -->
            <div v-transfer-dom>
            <actionsheet :menus="menus" v-model="showMenus" show-cancel></actionsheet>
            </div>
        </div>
        <tab :line-width=2 active-color='#ef4238' v-model="index" >
            <tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
        </tab>
    </div>
    <div class="select">
        <swiper v-model="index" height="auto" :show-dots="false">
            <!-- 电影信息 -->
            <swiper-item>
            <div class="tab-swiper vux-center">
                <div class="container">
                    <div class="namebox">
                        <div class="left">
                            <span class="name">{{pre.name}}</span>
                            <span class="score">7.9分</span><br>
                            <span class="info">{{pre.info}}</span>
                        </div>
                        <router-link to="">购票</router-link>
                    </div>
                    <div class="list">
                        <p>播放列表（{{cates.length}}）</p>
                        <div class="onepre" v-for="item in cates" :key="item.pid" @click="change(item.pid)">
                            <img :src="item.mainpic" alt="">
                            <div class="rightone">
                                <p class="title">{{item.title}}</p>
                                <span>观看：{{item.watchtimes}}&nbsp;&nbsp;评论：15</span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            </swiper-item>
            <!-- 评论 -->
            <swiper-item>
            <div class="tab-swiper vux-center">
                
            </div>
            </swiper-item>
        </swiper>
    </div>
  </div>
</template>

<script>
import {XHeader, Actionsheet, TransferDom, ButtonTab, ButtonTabItem,Tab, TabItem,Swiper,
    SwiperItem  } from 'vux'

const list = () => ['视频信息', '评论']
export default {
    directives: {
    TransferDom
  },
  components: {
    XHeader ,
    XHeader,
    Actionsheet,
    ButtonTab,
    ButtonTabItem,
    Tab,
    TabItem,
    Swiper,
    SwiperItem
  },
  data () {
    return {
      menus: {
        menu1: '分享'
      },
      index01: 0,
      list2: list(),
      demo2: '美食',
      list3: ['收到的消息', '发出的消息'],
      demo3: '收到的消息',
      list4: ['正在放映', '即将上映'],
      demo4: '即将上映',
      demoDisabled: 'A',
      index: 0,
      getBarWidth: function (index) {
        return (index + 1) * 22 + 'px'
      },
      showMenus: false,
      pre:{},
      cates:{},
      pid:1,
      mid:0
    }
  },
  methods:{
       getinfo:function (pid) {
            let _this = this;
             console.log(this.$route.params);

            _this.mid=pid?pid:this.$route.params.mid;
            
            _this.axios({
            method: "GET",
            url: _this.url+"/hottopic/apppre?pid="+_this.mid+""
            })
            .then(res => {
            console.log(res.data);
            // console.log('请求数据');
            _this.pre = res.data.pre;
            _this.cates = res.data.cates;
            })
            .catch(res => {
                console.log(res);
            });
       },
       change:function (pid) {
           this.pid=pid;//点击事件改变pid
       }
  },
  mounted() {
      this.getinfo();//渲染页面
  },
  watch: {
      pid:function(){
          this.getinfo(this.pid);//监听pid改变，根据改变的值去请求数据并修改本地数据
      },
      '$route'(to,from) {
          this.getinfo(to.params.pid);//监听路由变化，根据路由改变去请求数据并修改本地数据(有bug，上下统一用一种方法则可以解决)                
            // console.log('路由已经改变');   
      }
  },
}
</script>

<style>
/* @import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less'; */

.vux-tab-item.vux-center{
    background-color: azure;
}

.box {
  padding: 15px;
}
.active-6-1 {
  color: rgb(252, 55, 140) !important;
  border-color: rgb(252, 55, 140) !important;
}
.active-6-2 {
  color: #04be02 !important;
  border-color: #04be02 !important;
}
.active-6-3 {
  color: rgb(55, 174, 252) !important;
  border-color: rgb(55, 174, 252) !important;
}
.tab-swiper {
  background-color: #fff;
  height: 100px;
}




.select{
    margin-top:240px; 
    z-index: -1;
    height: 700px;
}
.vux-swiper{
    height: 700px !important
}
.list{
    height:800px;
    overflow: scroll;
}
.fix{
    width: 100%;
    height: 244px;
    position: fixed;
    top: 0;
    z-index: 100;
}

a{
    text-decoration: none;
    color: black;
}
.moviecon{
    width: 100%;
    height: 200px;
}
/* .predetails{
    position: relative;
} */
.top{
    position: relative;
    width: 100%;
    height: 200px;
    z-index: 100;
}

.predetails .vux-header{
    background-color: rgba(104, 100, 100, 0);
    z-index: 100;
}

video{
    position: absolute;
    background-color: rgba(29, 29, 29, 0.932);
    top: 0;
}
.namebox{
    border-bottom: 1px solid #e0e0e0;
    height: 70px;
    margin-bottom: 10px;
}
.namebox span{
     display: inline-block;
}
.left{
    float: left;
    margin-left: 15px;
    margin-top: 10px
}
.namebox .name{
    font-size: 16px;
}


.namebox .info{
    font-size: 12px;
    color: #969696;
}
.namebox .score{
    color: #FFD700;
    font-size: 12px;
}
.namebox a{
    background-color: #ef4238;
    margin-right: 15px;
    margin-top: 22.5px;
    float: right;
    font-size: 12px;
    width: 50px;
    height: 25px;
    color: aliceblue;
    text-align: center;
    line-height: 25px;
    border-radius: 15px;
}
.onepre{
    padding-bottom: 5px;
    margin-bottom: 8px;
    border-bottom: 1px solid #e0e0e0;
    position: relative;
}
.list{
    padding:0 10px;
    overflow: scroll;
}

.list>p{
    display: inline-block;
    margin-bottom: 10px;
}
.list p{
    font-size: 12px;
}

.list img{
    height: 68px;
}

.list span{
    font-size: 12px;
    color: #969696;
    margin-right: 10px;
}

.rightone{
    position: absolute;
    top: 3px;
    left: 135px;
    width: 60%;
    height: 68px;
}
.rightone p{
    width: 100%;
}
.rightone span{
    position: absolute;
    bottom: 0px
}
</style>
