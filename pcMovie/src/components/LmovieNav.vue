<template>
<!-- 电影种类导航 -->
  <div class="movie">
    <el-container>  

        <div class="moviekinds">

          <!-- 类型 -->
          <ul >
            <li>
              <div class="movie-title">类型 ：</div>
              <ul class="title-kinds">
                  <li class="active"  @click="allTypes()">
                      全部
                  </li>
                  <li v-for="t in type" :key="t" @click="changeType(t)">
                    {{t}}
                  </li>
              </ul>
            </li>  
          </ul>

          <div style="clear:both"></div>

          <!-- 地区 -->
          <ul >
            <li>
              <div class="movie-title">区域 ：</div>
              <ul class="title-kinds">
                  <li class="active"  @click="allTypes()">
                    全部
                  </li>
                  <li v-for="a in area" :key="a" @click="changeArea(a)">
                    {{a}}
                  </li>
              </ul>
            </li>  
          </ul>

           <div style="clear:both"></div>

           <!-- 年代 -->
          <ul >
            <li>
              <div class="movie-title">年代 ：</div>
              <ul class="title-kinds">
                 <li class="active"  @click="allTypes()">
                      全部
                  </li>
                  <li v-for="e in era" :key="e">
                     {{e}}
                  </li>
              </ul>
            </li>  
          </ul>
        </div> 

    </el-container>

    <div class="order">
        <el-radio v-model="radio" label="1">按热门排序</el-radio>
        <el-radio v-model="radio" label="2">按时间排序</el-radio>  
        <el-radio v-model="radio" label="3">按评价排序</el-radio>  
    </div>   
  </div>
</template>

<script>
export default {
  name: "LmovieNav",
  data() {
    return {
      type: ["爱情", "喜剧", "动画", "剧情", "恐怖", "惊悚","科幻","动作","悬疑","犯罪","冒险","战争","奇幻","运动","家庭","古装","武侠","西部","历史","传记","歌舞","黑色电影","短片","记录片","其他"],
      area: [ "大陆", "美国", "韩国", "日本", "中国香港","中国台湾","泰国","印度","法国","英国","俄罗斯","意大利","西班牙","德国","波兰","澳大利亚","伊朗","其他"],
      era: ["2018以后", "2018", "2017","2016","2015","2014","2013","2012","2011","2000-2010","90年代","80年代","70年代","更早"],
      radio:1
    };
  },
  methods:{
    changeType(t) {
      console.log(t);
      this.$emit("types",t);
    },
    changeArea(a) {
      console.log(a);
      this.$emit("areas",a);
    },
    allTypes() {
      // console.log(at);
      this.$emit("alltype");
    }
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

.moviekinds {
  width: 80%;
  margin: 0 auto;
  border: 1px #e5e5e5 solid;
  padding: 10px 20px;
}

.moviekinds>ul {
  /* border-bottom: 1px dashed #ddd; */
  padding: 20px 0px;
}

.moviekinds ul li {
  float: left;
}

.movie-title {
    height: 24px;
    line-height: 24px;
    float: left;
    color: #999;
    font-size: 14px;
}

.title-kinds {
  margin-left: 40px;
}

.title-kinds li {
    border-radius: 14px;
    padding: 3px 9px;
    display: inline-block;
    margin-left: 12px;
    text-align: center;
}

.title-kinds li.active {
   background: #f34d41;
   
}

.title-kinds li {
  color: #333;
  font-size: 14px;
}

.title-kinds li:hover {
  color: #ef4238;
  cursor: pointer;
}

.title-kinds li.active {
  color: #fff;
}

.order {
  width: 44%;
}

</style>
