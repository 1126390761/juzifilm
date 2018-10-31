//

const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();
//CORS：允许跨域
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
});

app.use(bodyParser.urlencoded({extended:true}));


// 数据库连接
global.conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    port: 3306,
    database: 'juzifilm'
});
conn.connect();

//文件上传
const storage = multer.diskStorage({
    //file 上传上来的文件的相关信息
    destination: function (req, file, cb) {
        //按照月份存放路径
        cb(null, `./uploads/${new Date().getFullYear()}/${(new Date().getMonth()+1).toString().padStart(2,'0')}`);
    },
    filename: function (req, file, cb) {
        //保证文件名的不重复 时间+随机数+文件后缀
        // new Date().valueOf() 把时间转化为时间戳
        let filename = new Date().valueOf() + Math.random().toString().substr(2, 8) + '.' + file.originalname.split('.').pop();
        cb(null, filename);
    }
})
global.upload = multer({
    storage: storage
});

app.post('/uploadMovimg', upload.single('images'), (req, res) => {
    res.json(req.file);
    console.log(req.file);
});
// 自己配置路由
app.use('/', require('./modul/xxy/addMovie'));
app.use('/uploads', express.static('uploads'));
app.listen(81, () => {
    console.log('服务器地址:http://localhost:81');
});