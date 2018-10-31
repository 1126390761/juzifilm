const express = require('express');

const router = express.Router();
router.get("/",(req,res)=>{
    res.render('admin/index');
});
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// 添加电影
router.post('/addMovie', (req, res) => {
    let d = req.body;
    let date = new Date(d.date1);
    let date_value=date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    console.log(date_value);
    let sql = `INSERT INTO movies(m_ename, m_name,m_type,m_area,m_date,m_socre,m_intor,m_director,m_mainpic,m_state) VALUES (?,?,?,?,?,?,?,?,?,?)`;
    //let sql= 'UPDATE books SET bname = ?,kinds=?,auther=?,readnum=?,wordnum=?  WHERE bid = ? AND status=1';
    let data = [d.Ename, d.name,d.type,d.region,date_value, d.score,d.desc,d.author,d.imgUrl,d.situation];
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
        console.log("db_success");
        res.json({
            r: result
        });
    })
})

module.exports = router;