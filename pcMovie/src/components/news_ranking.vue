<template>
    <div class="ranking-box-wrapper">
  <div class="panel">
    <div class="panel-header">
      <span class="panel-title">
        <span class="textcolor_red">热门资讯</span>
      </span>
    </div>
    <div class="panel-content">
            <ul class="ranking-wrapper ranking-box">
    <li class="ranking-item ranking-top ranking-index-1" v-if="ind<1" v-for="(item,ind) in listData" :key="item['m_mainpic']">
        <router-link :to="{name:'newsdetails', params:{newsid:item.nid}}">
        <div class="ranking-top-left">
          <i class="ranking-top-icon"></i>
            <img class="ranking-img  default-img" :src="item['mainimg']">
        </div>
        <div class="ranking-top-right">
          <div class="ranking-top-right-main">
            <span class="ranking-top-moive-name">{{item['title']}}</span>

              <p class="ranking-top-wish">
                  <span class="stonefont">{{item['watchtimes']}}</span>分
              </p>
          </div>
        </div>
        </router-link>
    </li>
    <li class="ranking-item ranking-index-2" v-if="ind<listData.length-1" v-for="(item,ind) in listData" :key="ind">
        <router-link :to="{name:'newsdetails', params:{newsid: listData[ind+1]['nid']}}">
          <span class="normal-link">
            <i class="ranking-index" v-if="ind<=1">{{ind+2}}</i>
             <i class="ranking-index ind" v-else>{{ind+2}}</i>
            <span class="ranking-movie-name" >{{listData[ind+1]['title']}}</span>
            <span class="ranking-num-info">
                <span class="stonefont">{{listData[ind+1]['watchtimes']}}</span>分
              </span>
          </span>
        </router-link>
    </li>
</ul>
    </div>
  </div>
    </div>
</template>
<script>
    export default {
   props:['listData'],

  data() {
    return {
        top:0
    }
  }
 }
</script>
<style scoped>
 .aside {
    float: right;
    width: 360px;
}
.ranking-box-wrapper {
    margin-top: 0!important;
}
.aside .panel {
    margin: 0;
}

.panel {
    margin: 10px;
}
.panel-header {
    overflow: hidden;
    height: 26px;
    line-height: 26px;
}
.ranking-box-wrapper .panel-title, .ranking-box-wrapper .ranking-index-2 .ranking-index, .ranking-box-wrapper .ranking-index-3 .ranking-index, .ranking-box-wrapper .ranking-num-info, .ranking-box-wrapper .ranking-top-right .ranking-top-wish {
    color: #ef4238;
}

.panel-title {
    font-size: 26px;
    color: #ffb400;
}
.panel-header {
    overflow: hidden;
    height: 26px;
    line-height: 26px;
}
.textcolor_red {
    color: #ef4238!important;
}
.ranking-box-wrapper .panel-title, .ranking-box-wrapper .ranking-index-2 .ranking-index, .ranking-box-wrapper .ranking-index-3 .ranking-index, .ranking-box-wrapper .ranking-num-info, .ranking-box-wrapper .ranking-top-right .ranking-top-wish {
    color: #ef4238;
}

.panel-header {
    overflow: hidden;
    height: 26px;
    line-height: 26px;
}
.panel-content {
    overflow: hidden;
    width: 100%;
    margin-top: 23px;
}
.ranking-wrapper {
    overflow: hidden;
}

ul, ul li {
    list-style: none;
}



.ranking-wrapper .ranking-item {
    overflow: hidden;
}
.ranking-item {
    cursor: pointer;
}

.ranking-index-1 {
    margin-bottom: 11px;
    border: 1px solid #efefef;
}
ul, ul li {
    list-style: none;
}
dd, dl, dt, h1, h2, h3, h4, h5, h6, li, p, ul {
    margin: 0;
    padding: 0;
}

li {
    display: list-item;
    text-align: -webkit-match-parent;
}

a {
    text-decoration: none;
}

a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}
user agent stylesheet
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
}
.ranking-item {
     width: 360px;
}
.ranking-item.ranking-top {
    cursor: pointer;
   
    height: 80px;
}
.ranking-box .ranking-top-left, .ranking-top100 .ranking-top-left {
    width: 120px;
    height: 78px;
    float: left;
    position: relative;
}
.ranking-box .ranking-top-right, .ranking-top100 .ranking-top-right {
    height: 78px;
    line-height: 78px;
}

.ranking-top-right {
    height: 80px;
    padding-left: 10px;
    line-height: 80px;
    overflow: hidden;
}
.ranking-top-icon {
    display: inline-block;
    position: absolute;
    left: 0;
    top: 0;
    width: 22px;
    height: 25px;
    background: url('../assets/bang.png') no-repeat;
    background-size: contain;
}


i, cite, em, var, address, dfn {
    font-style: italic;
}
.ranking-top-left .ranking-img {
    width: 100%;
    height: 100%;
}

.ranking-img {
    vertical-align: middle;
}
img {
    border-style: none;
}
.ranking-box .ranking-top-right, .ranking-top100 .ranking-top-right {
    height: 78px;
    line-height: 78px;
}

.ranking-top-right {
    height: 80px;
    padding-left: 10px;
    line-height: 80px;
    overflow: hidden;
}
.ranking-box .ranking-top-right-main, .ranking-top100 .ranking-top-right-main {
    width: 220px;
}

.ranking-top-right-main {
    display: inline-block;
    line-height: 1;
    vertical-align: middle;
    width: 200px;
}
.ranking-top-right .ranking-top-moive-name {
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}

.ranking-top-right .ranking-top-moive-name {
    margin: 0;
    padding: 0;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 18px;
    color: #333;
    line-height: 1.4;
}

.ranking-box-wrapper .panel-title, .ranking-box-wrapper .ranking-index-2 .ranking-index, .ranking-box-wrapper .ranking-index-3 .ranking-index, .ranking-box-wrapper .ranking-num-info, .ranking-box-wrapper .ranking-top-right .ranking-top-wish {
    color: #ef4238;
}
.ranking-top-right .ranking-top-wish {
    margin-top: 12px;
    font-size: 14px;
    color: #ffb400;
}

p {
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
}
.stonefont {
    font-family: stonefont;
}

.ranking-item .normal-link {
    display: block;
    height: 35px;
    line-height: 35px;
}
.ranking-item .ranking-movie-name {
    display: inline-block;
    max-width: 190px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
     color: #7e7e7e;
    vertical-align: top;
    text-indent: 20px;
}


.ranking-top-right .ranking-top-wish {
    color: #ef4238;
}

.ranking-num-info {
    float: right;
    color: #fdb863;
    font-size: 14px;
}
.ranking-index{
    font-size: 18px;
}
.ind{
    
    color: #999 !important;
}
.ranking-item:hover{
    background-color: rgba(221, 221, 221, 0.349);
}
</style>
