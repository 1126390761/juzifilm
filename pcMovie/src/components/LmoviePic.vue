<template>
  <div class="movie">
    <el-container>
      <div class="movies-list">
            <div class="movie-item" v-for="(pic,ind) in picture" :key="ind">
                <router-link :to="{path:'/movieinfo',query: {mid: pic['mid']}}">
                    <div class="movie-poster">
                         <img :src="pic.m_mainpic" alt="">
                    </div>
                    <div class="movie-name">
                      <router-link  :to="{path:'/movieinfo',query: {mid: pic['mid']}}">{{pic.m_name}}</router-link>
                    </div>
                    <div class="score movie-name">{{pic.m_socre}}</div>
                </router-link>
            </div>
      </div>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Headerbar",
  props:["picture"],
  data() {
    return {
      
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-container {
  background-color: #ffffff;
  color: #333;
  margin: 20px 0px;
}

.movies-list {
  width: 90%;
  margin: 0 auto;
}

.movie-item {
    display: inline-block;
    margin: 10px;
}

.movie-poster {
    background-color: #fcfcfc;
    width: 160px;
    height: 220px;
    overflow: hidden;
    position: relative;
}

.movie-poster img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}
 
.movie-name {
    width: 160px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    font-size: 16px;
    color: #333;
    margin-top: 10px;
}

.movie-name router-link {
  color: #333;
}

.score {
  color: #ffb400;
}
</style>
