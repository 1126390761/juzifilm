<template>
  <div class="movie">
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#47464a"
  text-color="#999"
  active-text-color="#ef4238">
  <el-menu-item :span="6" class="grid-content" v-for="(play,ind) in playstates" :key="ind" :index="ind+1+''"  @click="changeMovie(play.state)">
     {{play.title}}
  </el-menu-item>
</el-menu>
  </div>
</template>

<script>
  export default {
    name: "Headerbar",
    props:["playstates"],
    data() {
      return {
        isActive:true,
        activeIndex: '1',
        activeIndex2: '1'
      };
  },
  methods: {
    Select:function(){
      this.isActive=!this.isActive;
    },
    handleSelect(key, keyPath) {
        // console.log(key, keyPath);
    },
    changeMovie(t){
      // console.log(t);
      this.$emit('getType', t);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

li{
  border-bottom: none !important;
  margin-left: 30px !important;
  padding: 0 !important;
  font-size: 16px;
  text-decoration: none;
  display: inline-block;
  width: 104px;
  height: 60px;
  text-align: center;
}

/* li a{
  font-size: 16px;
  text-decoration: none;
  display: inline-block;
  width: 104px;
  height: 60px;
} */

ul{
  display: flex;
  justify-content: center;
}
</style>
