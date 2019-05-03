const express = require('express');
const async=require('async');
const router = express.Router();
const moment =require('moment');

router.get("/gettheater",(request,res)=>{
    console.log(request.query);
    /**对请求发送的数据进行处理 */
    let req=request.query;
    let mid=request.query.mid;
    let theater=req.theater?req.theater:'*';//请求时是否得到影院品牌名
    let area=req.area?req.area:'*';//请求时是否得到影院所属地区
    let selectedDay=req.selectedDay?req.selectedDay:'*';

    let data={};
    async.series({
        findAllTime:function (callback) {//根据电影id找到所有在上映这部电影的日期
            //查询场次表，根据影院id数组和场次id数组找到符合条件的电影播放日期
            let sql =`SELECT DATE_FORMAT(t.time,'%c月%e日') AS 'cdate' ,DATE_FORMAT(t.time,'%Y-%m-%d') AS 'date' FROM time t WHERE t.mid = ${mid} GROUP BY DATE_FORMAT(t.time,'%Y-%m-%d')`;
            conn.query(sql,(err,result)=>{
                //console.log(result);
                callback(null,result);
            });
        },
        findTheater:function(callback){//根据影院品牌和地区查询电影院
            let sql =`SELECT * FROM theater t right join time s on s.theater_id = t.theater_id WHERE s.mid = ${mid}`;
            if(theater!=="全部"){               //根据不同的数据改造sql语句
                sql += ` AND cate="${theater}"`;//根据影院品牌改造sql语句 查询出指定品牌的影院
            }
            if(area!=="全部"){
                sql += ` AND area="${area}"`;//根据影院所属地区改造sql语句 查询出指定地区的影院
            }
            if(selectedDay!=='alldate'){//根据日期改造sql语句
                sql+=` AND DATE_FORMAT(s.time,'\%Y-\%m-\%d')='${selectedDay}'`
            }
            sql+=` group by t.theater_id`
            conn.query(sql,(err,result)=>{
                if(err){
                    console.log(err);
                    return;
                }
               // console.log(result);
                
                callback(null,result);
            });
        }        
    },(err,result)=>{
        //上面的回调函数就是将上面的各个操作步骤中查询出的数据以属性的形式存放到最终的这个result对象中
        data.timeList=result.findAllTime;
        data.theaterList=result.findTheater   
        res.json(data);
    });
});

router.get('/getfield',(request,res)=>{
    console.log(request.query);
    /**对请求发送的数据进行处理 */
    let req=request.query;
    let data={};
    let mid=request.query.mid;
    let theater_id=req.theater_id?req.theater_id:'*';//请求时是否得到影院品牌名
    let selectedDay=req.selectedDay?req.selectedDay:'*';
    let sql = `SELECT t.time_id,DATE_FORMAT(t.time,'%H:%i') AS "start_time",d.field_name FROM time t left join field d on t.field_id = d.field_id WHERE 1=1`
    if(mid){
        sql+=` AND t.mid =${mid}`;
    }
    if(theater_id){
        sql+=` AND t.theater_id =${theater_id}`;
    }
    if(selectedDay){
        sql+=` AND DATE_FORMAT(t.time,'\%Y-\%m-\%d') = '${selectedDay}'`;
    }
    conn.query(sql,(err, result)=>{
        if(err){
            console.log(err);
            res.json({r:'db_err'});
            return ;
        }
        data.fieldList=result;
        res.json(data);
    });
});









module.exports = router;