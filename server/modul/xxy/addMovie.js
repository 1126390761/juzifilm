const express = require('express');

const router = express.Router();

router.get("/",(req,res)=>{
    res.render('admin/index');
});



// 添加电影
router.post('/addMovie', (req, res) => {
    let d = req.body;
    let date = new Date(d.date1);
    let date_value=date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    let url='http://localhost:81/'+d.imgUrl
    // console.log(date_value);
    let sql = `INSERT INTO movies(m_ename, m_name,m_type,m_area,m_date,m_socre,m_intor,m_director,m_mainpic,m_state) VALUES (?,?,?,?,?,?,?,?,?,?)`;
    //let sql= 'UPDATE books SET bname = ?,kinds=?,auther=?,readnum=?,wordnum=?  WHERE bid = ? AND status=1';
    let data = [d.Ename, d.name,d.type,d.region,date_value, d.score,d.desc,d.author,url,d.situation];
    conn.query(sql, data, (err, result) => {
        if (err) {
            console.log(err);
            res.json({r:'db_err'});
            return ;
        }
        res.json({
            r: 'success'
        });
    })
})

// 查询电影并且展示
router.post('/show', (req, res) => {
    let sql = `SELECT * FROM MOVIES limit 0,8`;
    conn.query(sql,(err, result) => {
        if (err) {
            console.log(err);
            res.json({r:'db_err'});
            return ;
        }
        // console.log("db_success");
        res.json({
            r: result
        });
    })
})

// 查询未上映电影并且展示
router.post('/show2', (req, res) => {
    let sql = `SELECT * FROM MOVIES WHERE m_state=2 limit 0,8`;
    conn.query(sql,(err, result) => {
        if (err) {
            console.log(err);
            res.json({r:'db_err'});
            return ;
        }
        // console.log("db_success");
        res.json({
            r: result
        });
    })
})

// 排行榜展示
router.post('/show3', (req, res) => {
    let sql = `SELECT * FROM movies where m_state=1 ORDER BY m_score2 DESC limit 0,12`;
    conn.query(sql,(err, result) => {
        if (err) {
            console.log(err);
            res.json({r:'db_err'});
            return ;
        }
        // console.log("db_success");
        res.json({
            r: result
        });
    })
});
// 点击跳转并展示的当前电影信息
router.post('/movieInfo', (req, res) => {
    // console.log(req.body);
    let d=req.body;
    let sql = `SELECT * FROM movies where mid=${d['mid']}`;
    conn.query(sql,(err, result) => {
        if (err) {
            console.log(err);
            res.json({r:'db_err'});
            return ;
        }
        // console.log("db_success");
        res.json({
            r: result
        });
    })
});

// 评论添加
router.post('/addcomment',(req,res)=>{
    let d=req.body;
    // console.log(d);
    // return;
    let sql =`INSERT INTO comment(c_con,mid,comtime,score) VALUES(?,?,?,?)`
    let insert=[d.text,d.mid,new Date().toLocaleString(),d.score];
    conn.query(sql,insert,(err, result) => {
        if (err) {
            console.log(err);
            res.json({r:'db_err'});
            return ;
        }
        // console.log("db_success");
        res.json({
            r: result
        });
    })
})
// 获取评论信息
router.post('/getcomment', (req, res) => {
    // console.log(req.body);
    let d=req.body;
    let sql = `SELECT * FROM comment where mid=${d['mid']}`;
    conn.query(sql,(err, result) => {
        if (err) {
            console.log(err);
            res.json({r:'db_err'});
            return ;
        }
        // console.log("db_success");
        res.json({
            r: result
        });
    })
});
//获取搜索信息
router.post('/search', (req, res) => {
    // console.log(req.body['0']);
    let d=req.body['0'];
    let sql = `SELECT * FROM MOVIES where m_name like '%${d}%'`;
    conn.query(sql,(err, result) => {
        if (err) {
            console.log(err);
            res.json({r:'db_err'});
            return ;
        }
        // console.log("db_success");
        res.json({
            r: result
        });
    })
});

// 上传头像
router.post('/head', (req, res) => {
    let d = req.body;
    // console.log(d);
    // return;
    console.log(d.date1);
    let date = new Date(d.date1);
    let date_value=date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() +' ' + '00:00:01';
    let url='http://localhost:81/'+d.imgUrl;
    // console.log(date_value);
    // let sql = `INSERT INTO user(username, sex,headimg,birthday,interest,moto) VALUES (?,?,?,?,?,?)`;

    let sql= `UPDATE user SET username = ?,sex=?,headimg=?,birthday=?,interest=?,moto=?  WHERE uid = 1 AND status=1`;
    let data = [d.name,d.sex,url,date_value,d.type,d.desc];
    conn.query(sql, data, (err, result) => {
        if (err) {
            console.log(err);
            res.json({r:'db_err'});
            return ;
        }
        res.json({
            r: result
        });
    })
})

// 获取头像信息
router.get('/getHeadimg', (req, res) => {
    let d = req.body;
    // console.log(req.session)
    let uid=req.session.uid;
    // console.log(d);
    // return;
    if(!req.session.uid){
        return ;
    }
    // let sql = `INSERT INTO user(username, sex,headimg,birthday,interest,moto) VALUES (?,?,?,?,?,?)`;
    let sql= `SELECT * FROM USER  WHERE uid = ${uid} AND status=1`;
    // let data = [];
    conn.query(sql,(err, result) => {
        if (err) {
            console.log(err);
            res.json({r:'db_err'});
            return ;
        }
        res.json({
            r: result
        });
    })
});

//获取用户信息
router.get('/getinfo', (req, res) => {
    // let sql = `INSERT INTO user(username, sex,headimg,birthday,interest,moto) VALUES (?,?,?,?,?,?)`;
    let sql= `SELECT * FROM USER  WHERE uid = 1 AND status=1`;
    // let data = [];
    conn.query(sql,(err, result) => {
        if (err) {
            console.log(err);
            res.json({r:'db_err'});
            return ;
        }
        res.json({
            r: result
        });
    })
});

module.exports = router;