const express = require('express')
const app = express();
const port = 3001;

const cors = require("cors");
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send('test');
})

app.post("/test",(req,res)=>{
    const testID = req.body.testID;
    console.log(testID);
})

app.listen(port, ()=>{
    console.log('Connect success');
})