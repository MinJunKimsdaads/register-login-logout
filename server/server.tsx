const express = require('express');
const app = express();
const port = 3001;
const cors = require("cors");
const bodyParser = require('body-parser');

const auth = require('./models/auth.tsx');

// // const env= require("dotenv").config({ path: ".env" })

app.use(bodyParser.urlencoded({extended:true}));
//extended 옵션의 경우, true일 경우, 객체 형태로 전달된 데이터내에서 또다른 중첩된 객체를 허용한다는 말이며, false인 경우에는 허용하지 않는 의미
app.use(bodyParser.json());
app.use(cors());

require("./routes/routes.tsx")(app);

app.listen(port, ()=>{
    console.log('연결');

    auth.createToken({
        type: "JWT",
        nickname: 'test1',
        profile: 'test2',
    }).then((result)=>{
        console.log(result);
    })
})

