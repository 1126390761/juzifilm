<template>
    <div>
        <Header></Header>
        <Introduction :movieData='movieData' :buyTicket='buyTicket'></Introduction>
        <div class="container">
            <div class="show-date">
                <span>观影日期：</span>
                <span class="active" >
                    {{date.cdate}}
                </span>
            </div>

            <!-- 场次列表 -->
            <table class='fieldList'>
                <thead>
                    <tr>
                        <th>放映时间</th>
                        <th>语言版本</th>
                        <th>放映厅</th>
                        <th>售价（元）</th>
                        <th>选座购票</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- <tr> -->
                    <tr v-for="(item,ind) in fieldList" :class="ind%2==1?'greybackground':''" :key="ind">
                        <td>
                            <span class="begin-time">{{item.start_time}}</span>
                            <!-- <br>
                            <span class="end-time">12:00散场</span> -->
                        </td>
                        <td>
                            <span class="language">原版</span>
                        </td>
                        <td>
                            <span class="field">{{item.field_name}}</span>
                        </td>
                        <td>
                           <span class="price">￥39</span>
                        </td>
                        <td>
                            <span class="selectSeats">选座购票</span>
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import Header from '@/components/header';
import introduction from "@/components/movieIntorduce/introduction";
import moment from 'moment';
export default {
    components:{
        Header: Header,
        Introduction:introduction
    },
    data() {
        return {
            getMovieInfo:{mid:''},
            buyTicket:false,
            movieData:{},
            date:{cdate:"",date:""},
            mid:"",//电影id
            theater_id:"",//影院id
            fieldList:[]//获取到的影厅列表
        }
    },
    created() {
        this.mid=this.$route.query.mid;
        this.date.date=this.$route.query.selectedDay;
        this.theater_id=this.$route.query.theater_id;
        this.getMovieInfo.mid=this.mid;
        this.getField();
        this.getInfo();
        this.getDate();
    },
    methods: {
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
        getField(){
            let _this = this;
          _this.axios.get(_this.url+"/ticket/getfield",{
            params:{
              selectedDay:_this.date.date,
              theater_id:_this.theater_id,
              mid:_this.mid
            } 
        }).then(res => {
          console.log("影院数据请求成功");
          console.log(res.data);           
          _this.fieldList=res.data.fieldList;  
        }).catch(res => {
          console.log("请求失败",res);
        });
        },
        getDate(){
            this.date.cdate=moment(this.date.date).format('MM月DD日');
        }
           
    },
}
</script>

<style scoped>
.container{
    width: 1200px;
    margin: auto;
}
.show-date{
    width: 100%;
    font-size: 14px;
    color: #999;
    margin-top:64px;

    margin-bottom: 32px;
}

.active{
    background-color: #df2d2d;
    border-radius: 14px;
    padding: 3px 9px;
    display: inline-block;
    margin-left: 8px;
    text-align: center;
    color: #fff;
}


.fieldList{
    width: 100%;
    margin-bottom: 40px;
    border-spacing: 0px;
}

.fieldList thead{
    background-color: #f7f7f7;
    color: #333;
    font-size: 16px;
    padding: 18px 0;
}

.fieldList thead tr{
    height: 53px;
}

.fieldList tbody tr{
    height: 82px;
}

.fieldList tbody td{
    text-align: center;
    width: 20%;
}
.begin-time{
    font-size: 18px;
    color: #333;
    font-weight: 700;
}

.end-time{
    font-size: 12px;
    color: #999;
}

.price{
    font-size: 18px;
    color: #f03d37;
    font-weight: 700;
}

.selectSeats{
    background-color: #df2d2d;
    border-radius: 14px;
    padding: 3px 9px;
    display: inline-block;
    color: #fff;
}

.greybackground{
    background-color: #f7f7f7;
}
</style>