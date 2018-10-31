<template>
        <div class="home">
            <Header></Header>
             <el-carousel indicator-position="outside" height="440px">
                <el-carousel-item v-for="item in imgList" :key="item">
                <img :src="item" alt="">
                </el-carousel-item>
            </el-carousel>
            <div>
                <el-row>
                <el-col :span="14">
                    <div class="main">
                  <div class="panel-header">
                    <span class="panel-more">
                      <router-link to=""><span class="textcolor_red">全部<i class="el-icon-arrow-right"></i></span></router-link>
                       
                    </span>
                    <span class="panel-title">
                        <span class="textcolor_red">正在热映（60部）</span>
                    </span>
                         </div>
                    <div class="movie-list">
                          <movieItem class="movieItem" v-for="item in 9" :key="item" ></movieItem>
                    </div>
                  </div>
                </el-col>
                <el-col :span="10">
                    <aside>
                    </aside>
                </el-col>
                </el-row>
            </div>
        </div>
</template>

<script>
import header from "@/components/header";
import movieItem from "@/components/movieItem";
import img1 from "@/assets/home_one.jpg";
import img2 from "@/assets/home_two.jpg";
import img3 from "@/assets/home_three.jpg";

export default {
  data() {
    return {
      imgList: {
        img1: img1,
        img2: img2,
        img3: img3
      }
    };
  },
  components: {
    'Header': header,
    'movieItem':movieItem
  },
  created:function(){
      let _this=this;
        _this.axios({
			method: "post",
            url: _this.url + "/show",
            // data: _this.ruleForm,
            //  transformRequest: [function (data) {
            //     let ret = ''
            //     for (let it in data) {
            //       ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            //     }
            //     return ret;
            //   }],
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
					}).then(response => {
                        console.log("请求成功")
						console.log(response.data);
					}).catch(response => {
						console.log("请求失败");
					})
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.textcolor_red {
    color: #ef4238;
}

a{
    text-decoration: none;
}
.panel-title {
    font-size: 26px;
    color: #ffb400;
}
.panel-more {
    font-size: 14px;
    line-height: 16px;
    float: right;
    margin-top: 10px;
}
.panel-more>a{
    position: relative;
    left:-50px;
}
.main{
 
    position: relative;
    left: 90px;
}
.movies-list {
  width: 100%;
  margin: 0 auto;
}
.movieItem{
    display: inline-block;
    margin: 10px 10px;
}
</style>
