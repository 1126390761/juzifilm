<template>
  <div class="movie">
    <el-container>
      <el-header>
        <ul>
          <li> <a href="" class="active">正在热映</a> </li>
          <li> <a href="">即将上映</a> </li>
          <li> <a href="">经典影片</a> </li>
        </ul>
      </el-header>
    </el-container>
  </div>
</template>

<script>

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
    width: 40%;
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
  .el-header a  :not(.active) :hover  {
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
