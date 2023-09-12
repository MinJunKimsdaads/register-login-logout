const express = require('express')
const app = express();
const port = 3001;
const mongoose = require('mongoose');

const cors = require("cors");
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
//extended 옵션의 경우, true일 경우, 객체 형태로 전달된 데이터내에서 또다른 중첩된 객체를 허용한다는 말이며, false인 경우에는 허용하지 않는 의미
app.use(bodyParser.json());
app.use(cors());

const crypto1 = require('crypto');

// const testPassword = crypto1.createHash('sha512').update('alswns123!').digest('base64');

// crypto1.randomBytes(64, (err, buf) => {
//     crypto1.pbkdf2('alswns123!', buf.toString('base64'), 100000, 64, 'sha512', (err, key) => {
//         console.log(key.toString('base64')); // 'dWhPkH6c4X1Y71A/DrAHhML3DyKQdEkUOIaSmYCI7xZkD5bLZhPF0dOSs2YZA/Y4B8XNfWd3DHIqR5234RtHzw=='
//         console.log(buf.toString('base64'));
//     });
// });

//조회 -> 아이디 중복 체크 후 저장
//패스워드 암호화 필요
mongoose
    .connect(
        'mongodb://localhost:27017'
    ).then(()=>{
        console.log('mongodb connected')
    })
    .catch((err)=>{
        console.log(err);
    })

const userInfo = mongoose.Schema({
    ID : 'string',
    password : 'string',
});

var UserInfo = mongoose.model('Schema', userInfo);


// const userInfo = mongoose.Schema({
//     ID : 'string',
//     password : 'string',
// });

// var UserInfo = mongoose.model('Schema', userInfo);

// UserInfo.find({ID: 'admin'}).then((docs) => {
//     console.log(docs); //아이디 중복 확인
// })


/////////////회원가입/////////////

app.post("/register",(req,res,next)=>{

    UserInfo.find({ID: 'admin'}).then((docs) => {
        console.log(docs); //아이디 중복 확인
    })
    var newUserInfo = new UserInfo({ID:req.body.ID, password:req.body.password});

    newUserInfo.save(); 
})

/////////////회원가입/////////////

app.listen(port, ()=>{
    // crypto1.randomBytes(64, (err, buf) => {
    //     crypto1.pbkdf2('alswns123!', buf.toString('base64'), 100000, 64, 'sha512', (err, key) => {
    //         console.log(key.toString('base64')); // 'dWhPkH6c4X1Y71A/DrAHhML3DyKQdEkUOIaSmYCI7xZkD5bLZhPF0dOSs2YZA/Y4B8XNfWd3DHIqR5234RtHzw=='
    //         console.log(buf.toString('base64'));
    //     });
    // });

    crypto1.pbkdf2('alswns123!', 'PN11bE2pZxeEd6GAMppnhj/QGeAWPpFdu8pfA3VdKQDfCY5KhVZg5XHCgnFVTUK7TjXyFAmvskYewc8jzw05jg==', 100000, 64, 'sha512', (err, key) => {
        // console.log(key.toString('base64'));
    });

    
})


//1. 서버가 패스워드를 받아서 64자리 salt생성
//2. salt로 패스워드를 키로 제작
//3. salt랑 key를 함께 저장
//4. 로그인 시 패스워드와 저장된 salt를 이용해 key제작 후 비교
