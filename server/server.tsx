const express = require('express')
const app = express();
const port = 3001;
const mongoose = require('mongoose');

mongoose
    .connect(
        'mongodb://localhost:27017'
    ).then(()=>{
        console.log('mongodb connected')
    })
    .catch((err)=>{
        console.log(err);
    })

const student = mongoose.Schema({
    name : 'string',
    address : 'string',
    age : 'number'
}); 

var Student = mongoose.model('Schema', student);

var newStudent = new Student({name:'Hong Gil Dong', address:'서울시 강남구 논현동', age:'22'});

newStudent.save();


// const cors = require("cors");
// const bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({extended:true}));
// //extended 옵션의 경우, true일 경우, 객체 형태로 전달된 데이터내에서 또다른 중첩된 객체를 허용한다는 말이며, false인 경우에는 허용하지 않는 의미
// app.use(bodyParser.json());
// app.use(cors());


// app.post("/register",(req,res,next)=>{

//     console.log(req.body)
    
    
// })

app.listen(port, ()=>{
    console.log('Connect success');
})