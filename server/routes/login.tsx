const jwt = require('jsonwebtoken');

const createToken = (payload) => {
    return new Promise(
        (resolve,reject) => {
            jwt.sign(
                payload,
                'secret-key',
                {
                    expiresIn: '3d'
                }, (error, token)=>{
                    if(error) reject(error);
                    resolve(token);
                }
            )
        }
    )
}

module.exports = createToken;