const express = require('express');
const async=require('async');
const router = express.Router();


//渲染热点界面时请求数据
router.get("/news",(req,res)=>{
        let data={};
        async.series({
            findnews:function(callback){
                let sql = `SElECT * FROM hottopic limit 0,6`;
                conn.query(sql,(err,result)=>{
                    callback(null, result);
                });
            },
            newsranking:function(callback){
                let sql ='SELECT * FROM hottopic ORDER BY watchtimes DESC limit 0,9';
                conn.query(sql,(err,result)=>{
                    callback(null,result);
                });
            },
            preranking:function(callback){
                let sql ='SELECT * FROM previews ORDER BY watchtimes DESC limit 0,9';
                conn.query(sql,(err,result)=>{
                    callback(null,result);
                });
            },
            findpre:function(callback){
                let sql ='SELECT * FROM previews limit 0,6';
                conn.query(sql,(err,result)=>{
                    callback(null,result);//将查询结果(数组)传进回调函数
                });
            },
        },(err,result)=>{
            //上面的回调函数就是将上面的各个操作步骤中查询出的数据以属性的形式存放到最终的这个result对象中
            data.newslist=result.findnews;
            data.previews=result.findpre;
            data.newsranking=result.newsranking;
            data.preranking=result.preranking;
            res.json(data);
        });
});

//响应资讯列表的请求
let start=0;
router.get("/newslist",(req,res)=>{
    // console.log(req.query.nid);
    start=0;
    let sql = `SElECT * FROM hottopic limit ${start},7`;
    conn.query(sql,(err, result)=>{
        if(err){
            console.log(err);
            res.json({r:'db_err'});
            return ;
        }
        res.json(result);
    });
});

//获取更多news
router.get("/morenews",(req,res)=>{
    // console.log(req.query.nid);
    start+=7;
    let sql = `SElECT * FROM hottopic limit ${start},7`;
    conn.query(sql,(err, result)=>{
        if(err){
            console.log(err);
            res.json({r:'db_err'});
            return ;
        }
        res.json(result);
    });
});

//渲染资讯详情界面
router.get("/newsdetails",(req,res)=>{
    console.log(req.query.nid);
    let sql = `SElECT * FROM hottopic WHERE nid= ${req.query.nid}`;
    conn.query(sql,(err, result)=>{
        if(err){
            console.log(err);
            res.json({r:'db_err'});
            return ;
        }
        res.json(result[0]);
    });
});

//渲染预告片详情页面
router.get("/predetails",(req,res)=>{
    let data={};
    let cate=0;
    async.series({
        findpre:function (callback) {
            let sql = `SElECT * FROM previews WHERE pid= ${req.query.pid}`;
            conn.query(sql,(err,result)=>{
                cate=result[0].cate;
                callback(null, result);
            });
        },
        findcates:function (callback) {
            let sql = `SElECT * FROM previews WHERE cate= ${cate} AND pid not in (${req.query.pid})`;
            conn.query(sql,(err,result)=>{
                if(err){
                    console.log(err);
                    return;
                }
                callback(null, result);
            });
        }
    },(err,result)=>{
        //上面的回调函数就是将上面的各个操作步骤中查询出的数据以属性的形式存放到最终的这个result对象中
        data.pre=result.findpre[0];
        data.cates=result.findcates;
        res.json(data);
    });
});


//渲染APP端预告片详情页面
router.get("/apppre",(req,res)=>{
    let data={};
    let cate=0;
    async.series({
        findpre:function (callback) {
            let sql = `SElECT * FROM previews2 WHERE pid= ${req.query.pid}`;
            conn.query(sql,(err,result)=>{
                cate=result[0].cate;
                callback(null, result);
            });
        },
        findcates:function (callback) {
            let sql = `SElECT * FROM previews2 WHERE cate= ${cate} AND pid not in (${req.query.pid})`;
            conn.query(sql,(err,result)=>{
                if(err){
                    console.log(err);
                    return;
                }
                callback(null, result);
            });
        }
    },(err,result)=>{
        //上面的回调函数就是将上面的各个操作步骤中查询出的数据以属性的形式存放到最终的这个result对象中
        data.pre=result.findpre[0];
        data.cates=result.findcates;
        res.json(data);
    });
});


//响应登录界面请求
router.post('/login',(req,res)=>{
    // console.log(req.body);
    let d=req.body;
    let sql = 'SELECT * FROM user WHERE status = 1 AND username = ?';
    conn.query(sql, d.username, (err, result)=>{
        //账号是不是存在
        if(!result.length){
            res.json({r:'u_not'});
            return ;
        }
        //判断密码是否正确
        if(md5(d.pwd) != result[0].password){
            res.json({r:'p_err'});
            return ;
        }
        //登录成功
        //保存session信息
        req.session.uid = result[0].uid;
        req.session.username = result[0].username;
        req.session.headimg = result[0].headimg;
        // console.log(req.session);
        //更新状态
        let sql = 'UPDATE user SET loginnum = loginnum + 1, lasttimes = ? WHERE aid = ?';
        conn.query(sql, [new Date().toLocaleString(), result[0].aid], (err, result)=>{
            res.json({r:'ok'});
        });
    });
});

module.exports = router;