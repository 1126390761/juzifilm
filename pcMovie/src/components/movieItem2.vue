<template>
<div class="box">
<div class="movie-item">
   <router-link :to="{path:'/movieinfo',query: {mid: mydata2['mid']}}">
      <div class="movie-poster">
        <img class="poster-default" src="//ms0.meituan.net/mywww/image/loading_2.e3d934bf.png">
        <img :src="mydata2['m_mainpic']">
        <div class="movie-overlay movie-overlay-bg">
          <div class="movie-info">
            <div class="movie-title" :title="mydata2['m_name']">{{mydata2['m_name']}}</div>
          </div>
        </div>
      </div>
   </router-link>  
<div class="movie-detail movie-wish"><span class="stonefont">{{mydata2['m_socre']}}</span></div>
<div class="movie-detail movie-detail-strong movie-presale">
  <a class="movie-presale-sep">预告片
  </a><router-link :to="{path:'/movieinfo',query: {mid: mydata2['mid']}}">预 售</router-link> 
</div>
      <div class="movie-ver"></div>
    </div>
    <div class="movie-detail movie-rt">{{date.getMonth()+1}}月{{date.getDate()}}日上映</div>
    </div>
</template>
<style scoped>

.box{
    width: 160px;
    height: 327px;
}
.movie-item {
    position: relative;
    border: 1px solid #efefef;
    margin: -1px;
    width:162px;
    height:295px;
}
a {
    text-decoration: none;
}
a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
}
div {
    display: block;
}
.movie-poster {
    background-color: #fcfcfc;
    width: 160px;
    height: 220px;
    overflow: hidden;
    position: relative;
}
.movie-poster .poster-default {
    top: 50%;
    left: 50%;
    width: 68px;
    height: 62px;
    margin-top: -31px;
    margin-left: -34px;
}
.movie-poster img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

img {
    border-style: none;
}
.movie-poster img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

.movie-poster .movie-overlay {
    height: 100%;
}

.movie-poster .movie-overlay, .movie-poster img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

.movie-overlay .movie-info {
    color: #fff;
    position: absolute;
    bottom: 7px;
    width: 100%;
}
.movie-title {
    font-size: 16px;
    line-height: 22px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0 10px;
}


.movie-wish {
    font-size: 14px;
    color: #ffb400;
    background-color: #fbfbfb;
    text-align: left;
    padding-left: 10px;
}

.movie-detail {
    height: 34px;
    line-height: 34px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.stonefont {
    font-family: stonefont;
}

.movie-wish {
    font-size: 14px;
    color: #ffb400;
    background-color: #fbfbfb;
    text-align: left;
    padding-left: 10px;
}
.movie-detail {
    height: 34px;
    line-height: 34px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.movie-detail-strong {
    height: 39px;
    line-height: 39px;
}

.movie-detail {
    height: 34px;
    line-height: 34px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}


.movie-presale a {
    width: 50%;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    color: #999;
    font-size: 14px;
}

.movie-presale-sep {
    border-right: 1px dotted #e5e5e5;
}
a{
    text-decoration: none;
}

.movie-presale a.active {
    color: #2d98f3;
    text-decoration: none;
}
.movie-presale a.active:hover {
    color: #fff;
    background-color:#2d98f3;
}
.movie-presale a {
    width: 50%;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    color: #999;
    font-size: 14px;
}


.movie-detail-strong {
    height: 39px;
    line-height: 39px;
}
.movie-detail {
    height: 34px;
    line-height: 34px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.movie-presale a.active {
    color: #2d98f3;
}

.movie-presale a {
    width: 50%;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    color: #999;
    font-size: 14px;
}

.movie-detail-strong {
    height: 39px;
    line-height: 39px;
}
.movie-detail {
    height: 34px;
    line-height: 34px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.movie-ver {
    position: absolute;
    top: 4px;
    left: -2px;
    font-size: 12px;
    color: #fff;
}
.movie-rt {
    border: none;
    color: #999;
    font-size: 14px;
    line-height: 40px;
}

.movie-detail {
    height: 34px;
    line-height: 34px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>

<script>
export default {
   props:['mydata','mydata2','date'],
  data() {
    return {
       
    }
  }
  
};
</script>