<template>
  <div>
      <div class="bg">
          <div class="box">
              <div class="left">
                 <video width="730" height="450" controls autoplay  :src="pre.url"></video>
              </div>
              <div class="right">
                  <div class="video">相关视频<span>（{{cates.length+1}}）</span></div>
                    <div class="rightdetail">
                            <img :src="pre.mainpic" alt="" class="mainpic playnow_img">
                      <div class="rightintroudtion">
                          <p class="playnow">{{pre.title}}</p>
                          <p class="rightnum"><span class="el-icon-caret-right"></span> {{pre.watchtimes}}</p>
                      </div>
                  </div>
                  <div class="content">
                        <div class="rightdetail_n" v-for="item in cates" :key="item.id">
                                <span @click="change(item.pid)"><img :src="item.mainpic" alt="" class="mainpic notplay_img"></span>
                            <div class="rightintroudtion">
                                <router-link :to="{name:'predetails', params:{pid:item.pid}}"><p class="notplay">{{item.title}}</p></router-link>
                                <p class="rightnum"><span class="el-icon-caret-right"></span> {{item.watchtimes}}</p>
                            </div>
                        </div>
                  </div>
              </div>
              <div class="foot">
                  <p class="footname">{{pre.name}}</p>
                  <p class="footdetail">{{pre.info}} </p>
              </div>
          </div>
      </div>
       <Listfooter></Listfooter>
  </div>

</template>


<script>
import listfooter from "@/components/listfooter";

export default {
  name: "App",
  components: {
    Listfooter: listfooter
  },
  data() {
    return {
        pid:1,
        pre:{},
        cates:{}
    };
  },
   methods:{
       getinfo:function (pid) {
            let _this = this;
             console.log(this.$route.params);
            _this.pid=pid?pid:this.$route.params.pid;
            _this.axios({
            method: "GET",
            url: _this.url+"/hottopic/predetails?pid="+_this.pid+""
            })
            .then(res => {
            console.log(res.data);
            console.log('请求数据');
            _this.pre = res.data.pre;
            _this.cates = res.data.cates;
            })
            .catch(res => {
                console.log(res);
            });
       },
       change:function (pid) {
           this.pid=pid;//点击事件改变pid
       }
  },
  mounted() {
      this.getinfo();//渲染页面
  },
  watch: {
      pid:function(){
          this.getinfo(this.pid);//监听pid改变，根据改变的值去请求数据并修改本地数据
      },
      '$route'(to,from) {
          this.getinfo(to.params.pid);//监听路由变化，根据路由改变去请求数据并修改本地数据(有bug，上下统一用一种方法则可以解决)                
            console.log('路由已经改变');   
      }
  },
};
</script>


<style scoped>
a{
    text-decoration: none;
    color: #fff;
}
 .bg{
     width: 100%;
     height: 550px;
     background-color: #555;
     position: relative;
     margin-bottom: -110px;
 }
 .box{
     width: 1200px;
     height: 528px;
     position: absolute;
     left: 75px;
     top: 20px;
     position: relative; 
 }
 .left{
     width:730px;
     height: 450px;
     position: absolute;
     left: 0px;
     top: 0px;
 }
 .right{
     width:450px;
     height: 528px;
     background-color: #1b1c1e;
     position: absolute;
     right: 0px;
     top: 0px;
 }
 .foot{
    height: 50px;
    position: absolute;
    bottom: 10px;
    left: 0px;
 }
 .footname{
    font-size: 18px;
    color: #fff;
 }
 .footdetail{
    font-size: 12px;
    line-height: 1.8;
    color: #fff;
 }
 .video{
     width: 110px;
     height: 20px;
     position: absolute;
    font-size: 14px;
    margin-bottom: 10px;
    color: #fff;
    left: 15px;
    top: 10px;
}
.rightdetail{
    width: 380px;
    height: 84px;
    position: absolute;
    left: 20px;
    top:45px;
}
.content{
    width: 380px;
    position: absolute;
    left: 22px;
    top:145px;
}
.rightdetail_n{
    position: relative;
    width: 380px;
    height: 84px;
    margin-bottom: 12px;
}
.rightintroudtion{
    width: 230px;
    height: 50px;
    position: absolute;
    left: 150px;
    top: 20px;
    font-size: 16px;
    color:#fff;
}
.rightnum{
        margin-top: 5px;
    font-size: 12px;
        color: #666;
}
.mainpic{
    width: 138px;
    height: 78px;
}

.playnow_img{
    border: 3px solid #ef4238;
    cursor: pointer;
}

.playnow{
    color: #ef4238;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
}
.notplay_img{
    cursor: pointer;
}
.notplay{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.notplay:hover{
    color: #ef4238;
}
</style>
