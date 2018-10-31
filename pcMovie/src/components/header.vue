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
    <div class="search">
   <input type="text" class="header-search">
     <el-button type="danger" icon=""><i class="el-icon-search" ></i>
  </el-button>
    </div>
    
    <div class="person">
        <img src="@/assets/person.png" alt="">
   <el-col :span="12" class="person-info">

    <el-dropdown>
      <span class="el-dropdown-link">
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人信息</el-dropdown-item>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-col>
   
    </div>
    
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
  box-shadow: 0px 2px 5px #ddd;
  left: 0;
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
.search {
    position: absolute;
    top: -10px;
    right: 0px;
}
.header-search{
    position: absolute;
    top: 24px;
    right: 400px;
    width: 260px;
    height: 36px;
    border: 1px solid #ccc;
    border-radius: 30px;
    outline: none;
    text-indent: 20px;
}
.search .el-button{
    border-radius: 30px;
    position: absolute;
    right: 400px;
    top:25px;
}
.person img{
    width: 40px;
    height: 40px;
    position: absolute;
    right: 100px;
    top: 10px;;
}
.person-info{
    position: absolute;
    top: 20px;
    right: -580px;
}
</style>
