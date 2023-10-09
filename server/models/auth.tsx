const crypto1 = require('crypto');
const jwt = require('jsonwebtoken');

//salt 생성
const createSalt = async () => {
    try{
        const salt = await crypto1.randomBytes(64);
        return salt.toString('base64');
    }catch(e){
        console.log(e);
    }    
  }

//암호화
const createPassword = async (password,salt) => {
    try{
        await crypto1.pbkdf2(password, salt, 100000, 64, 'sha512',(err,key)=>{
            return key.toString('base64');
        });
    }catch(e){
        console.log(e);
    }   
}

//JWT 토큰 생성
const createToken = async(payload) => {
    try{
        const token = await jwt.sign(payload,'secret-key',{expiresIn: '3d'});
        return token;
    }catch(e){
        console.log(e);
    }
}

//JWT 토큰 검증
const verifyToken = async(token) => {
    try{
        const verify = await jwt.verify(token, 'secret-key');
        return verify;
    }catch(e){
        return e;
    }
}

module.exports = {
    createSalt : createSalt,
    createPassword : createPassword,
    createToken : createToken,
    verifyToken : verifyToken,
}