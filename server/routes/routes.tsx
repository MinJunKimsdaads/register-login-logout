const sql = require("../models/model.tsx");

const Msg = {
    flag1:{
        code:'01',
        msg:'중복된 아이디 존재',
    },
    flag2:{
        code:'02',
        msg:'회원가입이 완료되었습니다.',
    },
    flag3:{
        code:'03',
        msg:'로그인 성공.',
    },
    flag4:{
        code:'04',
        msg:'아이디 또는 패스워가 일치하지 않습니다.',
    }
    
}

module.exports = (app) => {
    app.get('/',(req,res)=>{
        console.log('/');
    })

    app.post('/register',(req,res)=>{
        const dupliID = sql.getDupliID(req.body).then((result)=>{
            if(!result){
                res.send(Msg.flag1);
                return false;
            }else{
                const reist = sql.createUser(req.body).then((result)=>{
                    res.send(Msg.flag2);
                    return true;
                });
            }
        });
    })

    app.get('/login',(req,res)=>{
        const login = sql.getLogin(req.body).then((result)=>{
            // if(!result){
            //     res.send(Msg.flag1);
            //     return false;
            // }else{
            //     const reist = sql.createUser(req.body).then((result)=>{
            //         console.log(result);
            //     });
            // }
        }) 
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