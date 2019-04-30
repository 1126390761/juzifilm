<template>
  <div class="banner">
      <img src="@/assets/banner_bg.png" alt="">
      <div class="pic" :style="{backgroundImage: 'url('+movieData['m_mainpic']+')'}">
      <div class="detail">
          <h3 class="name">{{movieData['m_name']}}</h3>
          <p>{{movieData['m_ename']}}</p>
          <p>{{movieData['m_type']}}</p>
          <p>{{movieData['m_area']}} / 117分钟</p>
          <p>{{new Date(movieData['m_date']).getFullYear()}}-{{new Date(movieData['m_date']).getMonth()+1}}-{{new Date(movieData['m_date']).getDate()}}大陆上映</p>
      </div>
      <div class="buy">
          <div class="look">
              <i>
                  <img src="@/assets/wish.png" alt="">
              </i>
              <span>想看</span>
          </div>
          <div class="score"> 
              <i class="el-icon-star-on"></i>
              <span>评分</span>
         </div>
         <router-link :to="{path:'/theater',query: {mid: movieData['mid']}}" v-if='buyTicket'>
            <div class="ticket">特惠购票</div>
         </router-link>
         <router-link :to="{path:'/movieinfo',query: {mid: movieData['mid']}}" v-else='buyTicket'>
            <div class="ticket">查看电影详情</div>
         </router-link>
      </div>
      <div class="user">
          <p class="use-score">用户评分</p>
          <div>
              <span class="use-num">{{movieData['m_socre']}}</span>
              <span class="use-people">73159人评分</span>
          </div>
          <p class="use-ticket">累计票房</p>
          <p> 1.22 <span>亿</span></p>
      </div>
      </div>
  </div>
</template>

<script>
export default {
    props:['movieData','buyTicket'],
    data() {
        return {

        }
    },
    methods: {
        
    },
};
</script>
    
<style scoped>
.banner{
    width: 100%;
    height: 376px;
    position: relative;
}
.pic{
    /* background-image: url(../assets/movie-detail.jpg); */
    background-repeat: no-repeat;
    background-size: 240px 330px;
    position: absolute;
    top: 70px;
    left:105px;
    width: 240px;
    height: 330px;
}
.detail{
    width: 200px;
    position: absolute;
    left:270px;
    top:5px;
    color: #fff;
}
.detail p{
    margin-bottom: 10px;
}
.name{
    font-size: 25px;
}
.buy{
    width: 250px;
    height: 110px;
    position: absolute;
    left: 270px;
    bottom: 25px;
    color: #fff;
}
.look{
    background-color: #756189;
    width: 120px;
    height: 40px;
    line-height: 40px;
    text-align: center;
}
.look i>img{
    width: 18px;
    height: 18px;
}
.score{
    background-color: #756189;
    width: 120px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin-left: 130px;
    margin-top: -40px;
}
.ticket{
    background-color: #df2d2d;
    width: 250px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin-top: 10px;
    color:white;
}
.user{
    width: 125px;
    height: 145px;
    position: absolute;
    left:600px;
    bottom: 15px;
    color:#fff;
}
.use-num{
    font-size: 18px;
    color: #ffc600;
    height: 30px;
    line-height: 30px;
}
.use-score{
    font-size: 12px;
    margin-bottom: 10px;
}
.use-people{
    font-size: 12px;
}
.use-ticket{
    margin-top: 15px;
}
</style>
