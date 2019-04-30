<template>
  <div class="movie">
    <div class="block">
        <el-pagination
            background
            layout="prev, pager, next"
            :page-size="pagesize"
            :page-count="pageCount"
            :total="100">
        </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "Lpagination",
  props:["totalmovies"],
  data() {
    return {
      pagesize:6
    };
  },
  computed:{
    pageCount:function(){
      return this.props.totalmovies/this.pagesize;
    }
  }
};
</script>

<style scoped>
</style>
