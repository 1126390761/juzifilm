const express = require('express');
const async=require('async');
const router = express.Router();

router.get("/gettheater",(request,res)=>{
    //console.log(request.query);
    /**对请求发送的数据进行处理 */
    let req=request.query;
    let theater=req.theater?req.theater:'*';//请求时是否得到影院品牌名
    let area=req.area?req.area:'*';//请求时是否得到影院所属地区
    let sql = `SELECT * FROM theater WHERE 1=1`
    //根据不同的数据改造sql语句
    if(req.theater!=="全部"){
        sql += ` AND cate="${theater}"`;
    }
    if(req.area!=="全部"){
        sql += ` AND area="${area}"`;
    }
    conn.query(sql,(err, result)=>{
        if(err){
            console.log(err);
            res.json({r:'db_err'});
            return ;
        }
        res.send(result);
    });



    // res.send({list:'111'});

});









module.exports = router;