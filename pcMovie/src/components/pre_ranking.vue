<template>
    <div class="ranking-box-wrapper">
    <div class="panel">
        <div class="panel-header">
            <span class="panel-title">
                <span class="textcolor_red">热门预告片</span>
            </span>
        </div>   
<div class="panel-content">
<ul class="ranking-wrapper ranking-box">
    <li class="ranking-item ranking-top ranking-index-1" v-if="ind<5" v-for="(item,ind) in listData" :key="item['m_mainpic']">
       <router-link :to="{name:'predetails',params: {pid: item['pid']}}">
        <div class="ranking-top-left">
            <p class="ranking-top-icon">
              <i class="ranking-index" v-if="ind<=1">{{ind+1}}</i>
              <i class="ranking-index ind" v-else>{{ind+1}}</i>
            </p>
            <img class="ranking-img  default-img" :src="item['mainpic']">
        </div>
        <div class="ranking-top-right">
          <div class="ranking-top-right-main">
            <span class="ranking-top-moive-name">{{item['title']}}</span>

              <p class="ranking-top-wish">
                  <i class="el-icon-caret-right"></i><span class="stonefont">{{item['watchtimes']}}</span>
              </p>
          </div>
        </div>
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
    color: #2d98f3;
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
.ranking-box-wrapper .panel-title, .ranking-box-wrapper .ranking-index-2 .ranking-index, .ranking-box-wrapper .ranking-index-3 .ranking-index, .ranking-box-wrapper .ranking-num-info, .ranking-box-wrapper .ranking-top-right .ranking-top-wish {
    color: #f8fafc;
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
    margin-bottom: 16px;
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
   
    height: 68px;
}
.ranking-box .ranking-top-left, .ranking-top100 .ranking-top-left {
    width: 120px;
    height: 68px;
    float: left;
    position: relative;
}
.ranking-box .ranking-top-right, .ranking-top100 .ranking-top-right {
    height: 68px;
    line-height: 68px;
}

.ranking-top-right {
    height: 68px;
    padding-left: 10px;
    line-height: 68px;
    overflow: hidden;
}
.ranking-top-icon {
    display: inline-block;
    position: absolute;
    left: 0;
    bottom: -16px;
    width: 20px;
    height: 25px;
    background-color: #2d98f3;
    border-radius: 0 8px 0 0;
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
    height: 68px;
    line-height: 68px;
}

.ranking-top-right {
    height: 68px;
    padding-left: 10px;
    line-height: 68px;
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
    font-size: 6px;
    color: #333;
    line-height: 1.4;
}

.ranking-box-wrapper .panel-title, .ranking-box-wrapper .ranking-index-2 .ranking-index, .ranking-box-wrapper .ranking-index-3 .ranking-index, .ranking-box-wrapper .ranking-num-info, .ranking-box-wrapper .ranking-top-right .ranking-top-wish {
    color: #2d98f3;
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

.ranking-num-info {
    float: right;
    color: #fdb863;
    font-size: 14px;
}
.ranking-index{
    font-size: 16px;
    display: inline-block;
    margin: 2px 0 0 2px;
    color: #efefef;
}
.ind{
    color: rgb(189, 188, 188) !important;
}
.ranking-item:hover{
    background-color: rgba(221, 221, 221, 0.349);
}
.el-icon-caret-right{
    font-style: normal;
}
</style>
