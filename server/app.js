//

const express = require('express');

const bodyParser = require('body-parser');
const mysql = require('mysql');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser(secret));

// 数据库连接
global.conn = mysql.createConnection({
    host: 'orange',
    user: 'root',
    password: '',
    port: 3306,
    database: 'juzifilm'
});
conn.connect();

//session
app.use(session({
    secret:secret,
    resave:true,
    saveUninitialized:true,
    cookie:{maxAge:30*24*3600*1000}
}));



global.upload = multer({
    storage: storage
});
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
// 自己配置路由
app.use('/',require('./module/xxy'));
app.use('/uploads', express.static('uploads'));
app.listen(81, () => {
    console.log('http://orange:81/');
});