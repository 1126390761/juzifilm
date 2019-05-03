<template>
    <div>
        <Header></Header>
        <Introduction :movieData='movieData' :buyTicket='buyTicket'></Introduction>
        <div class="select">
          <el-container>  
            <div class="theaterkinds">
              <div style="clear:both"></div>

              <!-- 影城 -->
              <ul >
                <li>
                  <div class="movie-title">影城 ：</div>
                  <ul class="title-kinds">
                    <!--
                      <li class="active"  @click="allTypes()">
                        全部
                      </li>
                    -->
                      <li v-for="(theater,ind) in theater" :class="theater==theaterName?'active':''" :key="ind" @click="changeTheater(theater,ind)">
                        {{theater}}
                      </li>
                  </ul>
                </li>  
              </ul>

              <div style="clear:both"></div>

              <!-- 行政区 -->
              <ul >
                <li>
                  <div class="movie-title">行政区 ：</div>
                  <ul class="title-kinds">
                    <!--
                     <li class="active"  @click="allTypes()">
                          全部
                      </li>
                    -->
                      <li v-for="(area,ind) in area" :class="area==areaName?'active':''" :key="ind" @click="changeArea(area,ind)">
                         {{area}}
                      </li>
                  </ul>
                </li>  
              </ul>

              <div style="clear:both"></div>

              <!-- 日期 -->
              <ul >
                <li>
                  <div class="movie-title">日期 ：</div>
                  <ul class="title-kinds">
                  <!--
                      动态绑定属性 对第一项添加active类名
                  -->
                      <li v-for="(day,ind) in filmdate" :class="day.cdate==selectedDay?'active':''" :key="ind" @click="changeDate(day)">
                        {{day.cdate}}
                      </li>
                  </ul>
                </li>  
              </ul>
            </div> 
          </el-container>
          <div class="theaterlistbar">影院列表</div>
          <div class="theaterlist" v-for="(item,ind) in theaterList" :key="ind" :index="item.theater_id+''">
            <div class="theateritem">
              <span class="theatername">{{item.theater_name}}</span>
              <!-- <router-link :to="{path:'/selectfield', query:{mid:getMovieInfo.mid,selectedDay:selectedEday,theater_id:item.theater_id}}" target="_blank"> -->
                <span class="buyTicket" @click="selectFiled(item.theater_id)">特惠购买</span>
              <!-- </router-link> -->
              <span class="qi">起</span><span class="price">￥39</span>
              <span class="theaterinfo">地址：{{item.theater_adress}}</span>
            </div>
          </div>
          <ListFooter></ListFooter>
        </div>  
    </div>
</template>

<script>
import header from "@/components/header";
import introduction from "@/components/movieIntorduce/introduction";
import listfooter from '@/components/listfooter';
import moment from 'moment';
export default {
  name: "App",
  components: {
      Header: header,
      Introduction: introduction,
      ListFooter:listfooter
  },
  data() {
      return {
            getMovieInfo:{mid:''},
            movieData:{},
            buyTicket:false,
            filmdate: [{cdate:"全部",date:'alldate'}],
            selectedDay:"全部",
            selectedEday:'alldate',
            theater: ["全部","横店电影城", "耀莱成龙国际影城", "太平洋影城", "攀枝花影城","联娱国际影城"],
            theaterName:"全部",
            area: ["全部","东区", "西区","仁和区","米易县","盐边县"],
            areaName:"全部",
            theaterList:[]
      };
  },
  created() {
      this.getMovieInfo.mid=this.$route.query.mid;
      this.getInfo();     
      this.getTheater();

  },
   methods:{
      getInfo(){
       let _this=this;
       this.axios({
			  method: "post",
            url: _this.url + "/movieInfo",
            data: _this.getMovieInfo,
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
              // console.log("请求成功");
              _this.movieData=response.data.r[0];
              // console.log(_this.movieData);       
					}).catch(response => {
						console.log("请求失败");
            });
      },
      getTheater(){
          let _this = this;
          _this.axios.get(_this.url+"/ticket/gettheater",{
            params:{
              filmdate:_this.selectedDay,
              theater:_this.theaterName,
              area:_this.areaName,
              mid:_this.getMovieInfo.mid,
              selectedDay:_this.selectedEday
            } 
        })
        .then(res => {
          console.log("影院数据请求成功");
          console.log(res.data);           
          _this.theaterList=res.data.theaterList;
          _this.filmdate.length=1;//清空上次请求到的日期
          //let temp=[];
          // res.data.timeList.forEach(element => {//遍历返回的获取到的日期数据
          //   let date=element.time.split(' ');//将字符串分割为[YYYY-MM-DD,HH:MM]
          //   date[0]=moment(date[0]).format("MM月DD日");//将YYYY-MM-DD转换成MM月DD日
          //   if(temp.indexOf(date[0])==-1){//检查中是否存在那一天，不存在则添加
          //       temp.push(date[0]);
          //   }
          //_this.filmdate=_this.filmdate.concat(temp);//两个数组拼接并赋给日期数组
          //});
          res.data.timeList.forEach(element => {//遍历返回的获取到的日期数据,并添加到日期数组里
              _this.filmdate.push(element);
          });  

          //console.log(_this.filmdate);
          
          //  var now=moment('2019-05-01').format("YYYY年MM月DD日");
          //  console.log(now);
        }).catch(res => {
          console.log("请求失败",res);
        });
      },
      changeDate(day) {
        console.log(day);
        this.selectedDay=day.cdate;
        this.selectedEday=day.date;
        this.getTheater();

      },
      changeTheater(theater) {
        this.theaterName=theater;
        this.getTheater();
      },
      changeArea(area) {
        console.log(area);
        this.areaName=area;
        this.getTheater();
      },
      selectFiled(theater_id) {
        let _this=this;
        if(_this.selectedEday=='alldate'){
          alert('请选择日期哦亲');
          return;
        }else{
          window.location.href=`/selectfield?mid=${_this.getMovieInfo.mid}&selectedDay=${_this.selectedEday}&theater_id=${theater_id}`
        }
      }

   }
}
</script>

<style scoped>
.el-container {
  background-color: #ffffff;
  color: #333;
  margin: 20px 0px;
}

.theaterkinds {
  width: 1000px;
  margin: 64px auto 20px;
  border: 1px #e5e5e5 solid;
  padding: 10px 20px;
}

.theaterkinds>ul {
  /* border-bottom: 1px dashed #ddd; */
  width:100%;
  padding: 20px 0px;
}

.theaterkinds ul li {
  float: left;
}

.movie-title {
    height: 24px;
    line-height: 24px;
    float: left;
    color: #999;
    font-size: 14px;
}

.title-kinds {
  width:100%;
  margin-left: 40px;
}

.title-kinds li {
    border-radius: 14px;
    padding: 3px 9px;
    display: inline-block;
    margin-left: 12px;
    text-align: center;
    color: #333;
    font-size: 14px;
}

.title-kinds li.active {
    background: #f34d41;
    color: #fff;
}

.title-kinds li.active:hover{
  color: #fff;
}
.title-kinds li:hover {
  color: #ef4238;
  cursor: pointer;
}

.theaterlistbar{
  width:1035px;
  border-left:4px solid red;
  margin: 0px auto 20px;
  padding-left:5px;
}

.theaterlist{
  width:1040px;
  margin: 0px auto 20px;
}
.theateritem{
  border-bottom:1px #e0e0e0 dashed;
  margin-bottom:10px;
}
.theaterinfo{
  display:block;
  font-size:14px;
  color:#999;
  margin-bottom:10px;
}
.price{
  color:#f03d37;
  font-weight:700;
  float:right;
  margin-top:5px;
}
.qi{
  display:inline-block;
  font-size:14px;
  float:right;
  margin-top:5px;
}
.buyTicket{
  display:inline-block;
  width:80px;
  height:30px;
  line-height:30px;
  text-align:center;
  margin-left:36px;
  border-radius: 100px;
  color:#fff;
  background-color:#f03d37;
  font-size:14px;
  box-shadow: 0 2px 10px -2px #f03d37;
  float:right;
}
.buyTicket:hover{
  cursor: pointer;
}
</style>