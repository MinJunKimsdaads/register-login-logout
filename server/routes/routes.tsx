const sql = require("../models/model.tsx");
const cookieParser = require('cookie-parser');

const registerMsg = {
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
    app.post('/',(req,res)=>{
        if (req.cookies) { 
            console.log(req.cookies); // { mycookie: 'test'}
        }else{ // 클라이언트에 저장된 쿠키가 없다면
            // 쿠키 쓰기
            res.cookie('name', 'test', { 
                expires: new Date(),
                httpOnly: true,
                path: '/',
            })
        }
    })

    app.post('/register',(req,res)=>{
        const dupliID = sql.getDupliID(req.body).then((result)=>{
            if(!result){
                res.send(registerMsg.flag1);
                return false;
            }else{
                const reist = sql.createUser(req.body).then((result)=>{
                    res.send(registerMsg.flag2);
                    return true;
                });
            }
        });
    })

    app.post('/login',(req,res)=>{
        // res.cookie('name', 'test', { 
        //     expires: new Date(),
        //     httpOnly: true,
        //     path: '/',
        //     sameSite: 'none',
        //     secure: true, // https, ssl 모드에서만
        // })
        // res.send('cookie');

        //JWT
        const JWT = sql.getLogin(req.body).then((result)=>{
            res.send(result);
        });

        // res.send(JWT);
        // console.log(JWT());
        
    })

    app.post('/chatting',(req,res)=>{
        console.log(req.body);

        
    })

    app.get('/chat-list',(req,res)=>{
        console.log('/chat-list');
    })

    app.post('/chat-write',(req,res)=>{
        console.log('/chat-write');
    })
    
}