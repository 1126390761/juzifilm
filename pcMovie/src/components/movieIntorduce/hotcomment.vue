<template>
<div class="box">
<div class="hotcomment" v-for="(item,ind) in getdata" :key="ind">
    <div class="headportrait">
        <img :src="addr" alt="">
    </div>
   <div class="username">
      <p>{{username}}<span class="buy">{{buy}}</span></p>
      <p>{{new Date(item['comtime']).getFullYear()+'-'+(new Date(item['comtime']).getMonth()+1)+'-'+new Date(item['comtime']).getDate()}}
<el-rate
  v-model="item['score']"
  disabled
  show-score
  text-color="#ff9900"
  score-template="{value}">
</el-rate>
      </p>  
   </div>
   <div class="usercomment">
      <p> {{item['c_con']}}</p>
   </div>
    <div class="praisenum">
        <span><img :src="prise" alt=""></span>
        <span>{{num}}</span>
    </div>
</div>
</div>
</template>

<script>

// new Date(this.getdata['comtime']).getFullYear()+'-'+(new Date(this.getdata['comtime']).getMonth()+1)+'-'+new Date(this.getdata['comtime']).getDate()
export default {
  name: 'App',
  props:['getdata'],
  data(){
      return{
          username:'土匪3419',
          buy:'购',
          time:'07-10',
          comment:'挺好看的，没有不好的学生，只有不好的老师，真的非常有教育意义的一部电影，值得大家看，内容题材非常的好，很真实',
          addr:require('@/assets/headpic.png'),
          prise:require('@/assets/prise.png'),
          value3: null,
          num:3060,
          value5: 3.6
      }
  },
 
}
</script>
    
<style scoped>

.hotcomment{
    width: 730px;
    height: 300px;
    margin-left: 75px;
    position: relative;
}

.headportrait img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.username{
    width: 250px;
    height: 50px;
    position: absolute;
    left: 65px;
    top: 8px;
}
.username p{
    margin-bottom: 10px;
}
.buy{
    display: inline-block;
    width: 14px;
    height: 14px;
    border: 1px solid #7cc6f9;
    border-radius: 2px;
    color: #7cc6f9;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    margin-left: 3px;
}
.usercomment{
    width: 660px;
    position: absolute;
    top:80px;
    left: 65px;
}
.usercomment p {
    margin-top: 20px;
    padding-bottom: 30px;
    border-bottom: 1px solid #e5e5e5;
    color: #666;
    line-height: 26px;
    font-size: 14px;
}
.praisenum{
    width: 80px;
    height: 30px;
    position: absolute;
    right: 0;
}
.praisenum img{
    width: 18px;
    height: 20px;
}

</style>
