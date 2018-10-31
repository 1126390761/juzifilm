<template>
        <div class="home">
            <Header></Header>
             <el-carousel indicator-position="outside" height="440px">
                <el-carousel-item v-for="item in imgList" :key="item">
                <img :src="item" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
</template>

<script>
import header from "@/components/header";
import img1 from "@/assets/home_one.jpg";
import img2 from "@/assets/home_two.jpg"
import img3 from "@/assets/home_three.jpg"

export default {
  data(){
      return {
          imgList:{
              img1:img1,
              img2:img2,
              img3:img3
        }
      }
  },
  components: {
    'Header': header
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
