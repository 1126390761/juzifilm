<template>
    <div class="header">
    
        <div class="header-logo">
            <img src="@/assets/filmlogo.png" alt="">
            <span>橘子电影</span>
        </div>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#fff"
        text-color="#333"
        active-text-color="#f40">
        <el-menu-item index="1" >首页</el-menu-item>
        <el-menu-item index="2" >电影</el-menu-item>
        <el-menu-item index="3" >榜单</el-menu-item>  
        <el-menu-item index="4" >热点</el-menu-item>  
    </el-menu>
    <input type="text" class="header-search">
    
    </div>
  

</template>

<script>
export default {
  data() {
    return {
        activeIndex: '1',
    };
  },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
};
</script>


<style scoped>
.header {
  position: relative;
  width: 100%;
  box-shadow: 0px 2px 5px #ddd;
}
.header-logo{
    width: 133px;
    height: 80px;
    font-size: 18px;
    
}
.header-logo img{
    width: 50px;
    height: 50px;
    position: relative;
    top: 10px;
}
.header-logo span{
    position: absolute;
    top: 20px;
    left: 56px;
    color: #f40;
}
.el-menu {
    width: 400px;
    height: 80px;
    position: absolute;
    top: 0;
    left: 20%;

}
.el-menu-item{
    font-size: 18px;
}
.el-menu-item:hover{
    background-color:#fff !important;
    color:#000;
}
.el-menu.el-menu--horizontal{
    border: none;
}
.header-search{
    position: absolute;
    top: 25px;
    right: 400px;
    width: 260px;
    height: 25px;
  
}
</style>
