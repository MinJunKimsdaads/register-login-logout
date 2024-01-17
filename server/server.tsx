const express = require('express');
const app = express();
const port = 5001;
const cors = require("cors");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const auth = require('./models/auth.tsx');

// const env= require("dotenv").config({ path: ".env" });

app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
//extended 옵션의 경우, true일 경우, 객체 형태로 전달된 데이터내에서 또다른 중첩된 객체를 허용한다는 말이며, false인 경우에는 허용하지 않는 의미
app.use(bodyParser.json());
app.use(cors({ credentials: true, origin: "*" }));

// app.use((req,res)=>{
//     res.setHeader('Access-Control-Allow-origin', '*'); // 모든 출처(orogin)을 허용
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // 모든 HTTP 메서드 허용
//     res.setHeader('Access-Control-Allow-Credentials', 'true'); // 클라이언트와 서버 간에 쿠키 주고받기 허용
// })

require("./routes/routes.tsx")(app);

app.listen(port, ()=>{
    console.log('연결4');
})

