<template>
    <div class="header">
    
        <div class="header-logo">
            <img src="@/assets/orange.png" alt="">
            <span>橘子电影</span>
        </div>
    <el-menu
        :default-active="this.$route.path"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#fff"
        text-color="#333"
        active-text-color="#f40" router>
        <el-menu-item v-for="(item,ind) in navList" :key="ind" :index="item.name+''">{{item.navItem}}</el-menu-item>
    </el-menu>
    <div class="search">
   <input type="text" class="header-search"  v-model="input">
     <el-button type="danger" icon="" size="medium"><router-link :to="{path:'/search',query: {value: input}}"><i class="el-icon-search" ></i></router-link>
  </el-button>
    </div>
    
    <div class="person">
        <img :src="img" alt="" v-if="img">
        <img src="../assets/person.png" alt="" v-else>
   <el-col :span="12" class="person-info">

    <el-dropdown>
      <span class="el-dropdown-link">
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item><span @click="session">个人信息</span></el-dropdown-item>
        <el-dropdown-item><router-link to="/login">退出登录</router-link></el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-col>
    </div>
    </div>
  

</template>

<script>
export default {
    props:['imgurl'],
  data() {
    return {
        navList:[
            {name:'/',navItem:'首页'},
            {name:'/Lmovie',navItem:'电影'},
            {name:'/list',navItem:'榜单'},
            {name:'/hottopic',navItem:'热点'}
        ],
        input:'',
        img: this.imgurl,
        hassession:false
    };
  },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },

      session(){
          if(this.hassession){
              window.location.href='/user'
          }else{
              window.location.href='/login'
          }
      },
      getHead(){
        let _this=this;
        _this.axios({
			method: "get",
            url: '/getHeadimg'
        }).then(response => {
            console.log(response.data)
            _this.img=response.data.r[0].headimg;
            _this.hassession=true;
           
        }).catch(response => {
            console.log("请求失败");
            });
      }
    },
    created() {
        this.getHead()
    },

};
</script>


<style scoped>
a{
    text-decoration: none;
}
.el-icon-search{
    color: #fff;
    font-size: 15px;
}
.ablock{
    display: block;
    width: 40px;
    height: 60px;
}
.header {
  position: relative;
  min-width:1200px;
  box-shadow: 0px 2px 5px #ddd;
  left: 0;
}
.header-logo{
    width: 133px;
    height: 80px;
    font-size: 18px;
    
}
.header-logo img{
    width: 120px;
    height: 84px;
    position: relative;
    top: -2px;
    left: 15px;
}
.header-logo span{
    position: absolute;
    top: 15px;
    left: 110px;
    color: #f8931f;
    font-size: 26px;
    font-weight: 600;
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
    border-radius: 50%;
}
.person-info{
    position: absolute;
    top: 20px;
    right: -580px;
}
</style>
