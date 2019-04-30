<template>
<div>
<div class="">
<div  class="shortcomment" @click="offClose">写短评</div>
</div>
  <div class="dialog-container" v-show="isShow">
      <div class="el-icon-close" @click="onClose"></div>
      <div class="score">
            <input class="scorenum"/>
            <div class="scorestar">
                <el-rate v-model="value3" show-text></el-rate>
            </div>
      </div>
      <div>
        <el-button type="danger" class="danger" @click="getcomment">提交</el-button>
      </div>
      <!-- <textarea class="view" cols="55" rows="10">快说说你的看法吧</textarea> -->
  <el-input
      type="textarea"
      :rows="6"
      placeholder="快说说你的看法"
      v-model="textarea" class="view">
  </el-input>
  </div>

</div>
</template>

<script>
export default {
  props:['mid'],
  data() {
    return {
      isShow: false,
      value3: null,
      textarea:'',
      parms:{}
    };
  },
  methods: {
    offClose() {
      this.isShow = !this.isShow;
    },
    onClose() {
      this.isShow = false;
    },
    getcomment(){
      console.log(this.value3+this.textarea);
      console.log(this.mid);
      this.parms={
          score:this.value3,
          text:this.textarea,
          mid:this.mid['mid']
      }
      let _this=this;
      _this.axios({
					method: "post",
          url: _this.url + "/addcomment",
          data: _this.parms,
          transformRequest: [function (data) {
          let ret = ''
          for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
                return ret;
              }],
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
					}).then(response => {
            alert('添加成功');
            _this.textarea='';
            _this.onClose();
            window.location.reload();
						this.GitUsers = response.data;
					}).catch(response => {
						console.log("请求失败");
					})
    }
  }
};
</script>
<style scoped>
.dialog-container {
  position: fixed;
  z-index: 10000;
  top: 80px;
  left: 400px;
  width: 570px;
  height: 470px;
  border:8px solid #ccc;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
}
.el-icon-close {
    font-size: 25px;
    color: #fff;
    background-color: #ccc;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    text-align: center;
    line-height: 30px;
    position: absolute;
    right: 0px;
}
.shortcomment {
  width: 70px;
  height: 30px;
  position: absolute;
  right: 557px;
  top: 1508px;
  text-align: center;
  font-size: 14px;
  line-height: 30px;
  color: #ef4238;
  border-radius: 15px;
  border: 1px solid #ef4238;
  cursor: pointer;
}
.score{
    position: absolute;
    top: 45px;
    left: 175px;
    width: 200px;
    height: 120px;
}
.scorenum{
    text-align: center;
    width: 200px;
    height: 30px;
    border: none;
    outline: none;
    color: #ffc600;
    font-size: 36px;

}
.scorestar{
      text-align: center;
    width: 200px;
    height: 30px;
    border: none;
    outline: none;
    color: #ffc600;
    font-size: 36px;
}
.view{
    font-size: 18px;
    color: #333;
    position: absolute;
    left: 30px;
    bottom: 110px;
    width: 520px;
   
}
.danger{
    position: absolute;
    right: 25px;
    bottom: 20px;
   
}
</style>
