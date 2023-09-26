const express = require('express');
const app = express();
const port = 3001;
// const register = require('./routes/register');
// const login = require('./routes/login');

const routes = require('./routes/index.tsx');

const cors = require("cors");
const bodyParser = require('body-parser');

// const env= require("dotenv").config({ path: ".env" })

app.use(bodyParser.urlencoded({extended:true}));
//extended 옵션의 경우, true일 경우, 객체 형태로 전달된 데이터내에서 또다른 중첩된 객체를 허용한다는 말이며, false인 경우에는 허용하지 않는 의미
app.use(bodyParser.json());
app.use(cors());

app.get('/',(req,res)=>{
    console.log('dddd');
});

require("./routes/routes.tsx")(app);

/////////////로그인/////////////

app.get("/login",(req,res,next)=>{
    // console.log(login);
})

// /////////////로그인/////////////

// /////////////회원가입/////////////

// app.post("/register",(req,res,next)=>{
//     // // register(req.body);
//     // const registerState = register(req.body);
//     // res.send(registerState);
// })

/////////////회원가입/////////////

app.listen(port, ()=>{
    console.log('연결');
})

//1. 서버가 패스워드를 받아서 64자리 salt생성
//2. salt로 패스워드를 키로 제작
//3. salt랑 key를 함께 저장
//4. 로그인 시 패스워드와 저장된 salt를 이용해 key제작 후 비교
