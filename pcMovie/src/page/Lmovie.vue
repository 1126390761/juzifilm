<template>
  <div class="movie">
    <!-- 头部组件 -->
    <Header></Header>
    <!-- 电影 -->
    <el-container>
      <!-- 电影种类 -->
      <Headerbar :playstates="moviekinds" @getType="changeType"></Headerbar>
      <el-main>
        <lmovie-nav @types="changeKinds" @areas="changeAreas" @alltype="changeAlltype"></lmovie-nav>
        <lmovie-pic :picture="moviespic"></lmovie-pic>
        <div>
          <el-pagination
            background
            layout="prev, pager, next"
            @current-change="currentPage"
            :page-size="pagesize"
            :current-page="currentpage"
            :total="totalmovies">
        </el-pagination>
        </div>
      </el-main>
      <el-footer></el-footer>
    </el-container>
     <list-footer></list-footer>
  </div>
</template>

<script>
import Header from "@/components/header";
import Headerbar from "@/components/headerbar";
import LmovieNav from "@/components/LmovieNav";
import LmoviePic from "@/components/LmoviePic";
import ListFooter from "@/components/listfooter";

export default {
  name: "Lmovie",
  data() {
    return {
      moviekinds: [
        { state:"1",title: "正在热映" },
        { state:"2",title: "即将上映" },
        { state:"3",title: "经典影片" }
      ],
      moviespic: [],
      t:'',
      m_state:'1',
      m_type:"",
      m_area:"",
      pagesize:6,
      totalmovies:0,
      currentpage:1,
      
    };
  },
  computed:{
   
  },
  created() {
    this.getMovie();
  },
  watch:{
    m_state:function(){
      this.getMovie();
    },
    m_type:function(){
      this.getMovie();
    },
    m_area:function(){
      this.getMovie();
    },
    currentpage:function(){
      this.getMovie();
    }
  },
  methods: {
    changeType(t){
      this.m_state = t;
      this.m_type='';
      this.m_area='';
      this.currentpage=1;
    },
    changeKinds(t){
      console.log("m:"+t);
      this.m_type=t;
      this.currentpage=1;
    },
    changeAreas(a){
      console.log("A:"+a);
      this.m_area=a;
      this.currentpage=1;
    },
    currentPage(p){
      console.log(p);
      this.currentpage=p;
    },
    changeAlltype(){
      // console.log(at);
      this.m_type='';
      this.m_area='';
      this.currentpage=1;
    },
    getMovie(){
    let This = this;
        This.axios
          .get("http://localhost:81/lt/lmovie", {
            params: {
              m_state:This.m_state,
              m_type:This.m_type,
              m_area:This.m_area,
              pagesize:This.pagesize,
              currentpage:This.currentpage
              }
          })
          .then(function(response) {
            console.log(response);
            This.moviespic = response.data.lists;
            This.totalmovies=response.data.totalnums;
          })
          .catch(function(error) {
            console.log(error);
        });
    }
   
  },
  components: {
    Header: Header,
    Headerbar: Headerbar,
    LmovieNav: LmovieNav,
    LmoviePic: LmoviePic,
    ListFooter:ListFooter,
  }
};
</script>

<style scoped>
/* .el-footer {
  background-color: #47464a;
  color: #999;
  text-align: center;
  line-height: 60px;
  font-size: 16px;
} */

.el-main {
  background-color: #ffffff;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
