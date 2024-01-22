const jwt = require('jsonwebtoken');

//JWT 토큰 검증
const verifyToken = async(token) => {
    try{
        const verify = await jwt.verify(token, 'secret-key');
        return verify;
    }catch(e){
        return e;
    }
}

module.exports = verifyToken;