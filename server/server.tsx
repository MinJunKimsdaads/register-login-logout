const express = require('express')
const app = express();
const port = 3001;

const cors = require("cors");
const bodyParser = require('body-parser');


// app.use((req,res,next)=>{
//     // bodyParser.urlencoded({extended:true});
//     bodyParser.json();
//     // cors();
//     next();
// })

// app.use((req,res,next)=>{
//     // bodyParser.urlencoded({extended:true});
//     // bodyParser.json();
//     cors();
//     next();
// })

const test1 = (req,res,next) => {
    console.log('미들웨어');
    next();
}

app.use(bodyParser.urlencoded({extended:true}));
//extended 옵션의 경우, true일 경우, 객체 형태로 전달된 데이터내에서 또다른 중첩된 객체를 허용한다는 말이며, false인 경우에는 허용하지 않는 의미
app.use(bodyParser.json());
app.use(cors());

app.use(test1);

app.get('/',(req,res)=>{
    res.send('test');
})

app.post("/test",(req,res,next)=>{
    const testID = req.body.testID;

    console.log(testID);

    const sendText = {
        text:'ok',
    }

    res.send(sendText);

    next();
    
})

app.use((req,res,next)=>{
    console.log('등록완료');
})

app.listen(port, ()=>{
    console.log('Connect success');
})