<template>
  <div class="movie">
    <!-- 头部组件 -->
    <Header></Header>
    <!-- 电影 -->
    <el-container>
      <Headerbar></Headerbar>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/header";
import Headerbar from "@/components/headerbar";

export default {
  name: "Lmovie",
  data() {
    return {
     
    };
  },
  methods: {
   
  },
  components: {
    Header:Header,
    Headerbar: Headerbar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }

</style>
