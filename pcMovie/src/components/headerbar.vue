<template>
  <div class="movie">
    <el-container>
      <el-header>
        <ul>
          <li v-for="(item,index) in mydata" :key="index"> <a :class='{active:index==0?isActive:!isActive}' href="###" v-on:click="Select($event)">{{item.title}}</a> </li>
        </ul>
      </el-header>
    </el-container>
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">l
  <el-menu-item index="1">处理中心</el-menu-item>
  <el-menu-item index="3">消息中心</el-menu-item>
  <el-menu-item index="4"><a href="" target="_blank">订单管理</a></el-menu-item>
</el-menu>

  </div>
</template>

<script>
  export default {
    props:['mydata'],
    data() {
      return {
        isActive:true
      };
  },
  methods: {
    Select:function(){
      this.isActive=!this.isActive;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.el-header, .el-footer {
    background-color: #47464a;
    color: #999;
    text-align: center;
    line-height: 60px;
    font-size: 16px;
  }

  .el-header>ul {
    width: 60%;
    height: 60px;
    margin: 0 auto;
    text-align: center;
  }

  .el-header>ul>li {
    float: left;
    list-style: none;
    margin-left: 15%;
  }

  .el-header a {
  text-decoration: none;
   color: #999;
    text-align: center;
    font-size: 16px;

}
  .el-header a :hover  {
    color: #fff;
  }
 
  .el-header .active {
    color: #ef4238;
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
