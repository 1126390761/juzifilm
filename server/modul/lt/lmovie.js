// 电影界面

const express = require('express');
const router = express.Router();
const async = require("async");

router.get("/lmovie", (req, res) => {
    let m_state = req.query.m_state ? req.query.m_state : '1';
    let currentpage = req.query.currentpage ? req.query.currentpage*1 : 1;
    let m_type = req.query.m_type;
    let m_area = req.query.m_area;
    let pagesize = req.query.pagesize*1;

    async.series({
        // 查询总条数
        totalnums: function(cb) {
            let sql = `SELECT count(*) AS nums FROM movies WHERE m_state LIKE "%${m_state}%" AND status=1`;
            if (m_type) {
                sql += ` AND m_type LIKE "%${m_type}%"`;
            } else if (m_area) {
                sql += ` AND m_area LIKE "%${m_area}%"`;
            }
            conn.query(sql, (err, results) => {
                cb(null, results[0].nums);
            })
        },
        lists: function(cb) {
            // 每页显示条数
            let sql = `SELECT * FROM movies WHERE m_state LIKE "%${m_state}%" AND status=1 `;
            if (m_type) {
                sql += ` AND m_type LIKE "%${m_type}%"`;
            } else if (m_area) {
                sql += ` AND m_area LIKE "%${m_area}%"`;
            }
            sql += ` LIMIT ${(currentpage-1)*pagesize},${pagesize}`;
            conn.query(sql, (err, results) => {
                console.log(err);
                cb(null, results);
            })
        }
    }, (err, data) => {
        // console.log(data);
        res.send(data);
    });

})

router.get("/lmoviewill",(req,res)=>{
	let sql=`SELECT * FROM previews WHERE watchtimes>90`;
	conn.query(sql,(err,results)=>{
		// console.log(err);
		// console.log(results);
		res.send(results);
	})
})

router.get("/lmovieall",(req,res)=>{
	let m_state = req.query.m_state ? req.query.m_state : '1';
	let sql=`SELECT * FROM movies WHERE m_state LIKE "%${m_state}%" AND status=1`;
	conn.query(sql,(err,results)=>{
		// console.log(err);
		// console.log(results);
		res.send(results);
	})
})


module.exports = router;