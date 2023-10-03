const sql = require("../models/model.tsx");

const registMsg = {
    flag1:{
        code:'IDduplication',
        msg:'중복된 아이디 존재',
    },
    flag2:{
        code:'success',
        msg:'회원가입이 완료되었습니다.',
    },
}

module.exports = (app) => {
    app.get('/',(req,res)=>{
        console.log('/');
    })

    app.post('/register',(req,res)=>{
        const dupliID = sql.getDupliID(req.body).then((result)=>{
            if(!result){
                res.send(registMsg.flag1);
                return false;
            }else{
                const reist = sql.createUser(req.body).then((result)=>{
                    console.log(result)
                });
            }
        });
    })

    app.get('/login',(req,res)=>{
        console.log('/login');
    })

    app.get('/chat-history',(req,res)=>{
        console.log('/chat-history');
    })

    app.get('/chat-list',(req,res)=>{
        console.log('/chat-list');
    })

    app.post('/chat-write',(req,res)=>{
        console.log('/chat-write');
    })
    
}