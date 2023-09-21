//조회 -> 아이디 중복 체크 후 저장
//패스워드 암호화 필요
const mongoose = require('mongoose');

const connect = () => {
    // console.log(process.env.DATABASE);
    mongoose
    .connect(
        process.env.DATABASE
    ).then(()=>{
        console.log('mongodb connected')
    })
    .catch((err)=>{
        console.log("error:" + err);
    })
}

module.exports = connect;