const sql = require('./db.tsx');
const auth = require('./auth.tsx');

//중복 아이디 조회
const getDupliID = async(info) => {
  try{
    const [results] = await sql.query(`SELECT * FROM user_info WHERE id = '${info.ID}'`);
    console.log(results);
    if(results.length > 0){
      return false;
    }else{
      return true;
    }
  }catch(e){
    console.log(e);
  }
}

//회원가입
const createUser = async(info) => {
  try{
    auth.createSalt().then(async(result)=>{
        await sql.query(`INSERT INTO user_id_key (id,salt) VALUE ("${info.ID}","${result}")`);
        
        await auth.createPassword(info.password,result).then(async(result)=>{
          await sql.query(`INSERT INTO user_info (id,password,regidate) VALUE ('${info.ID}','${result}',NOW())`);
        })
    });
  }catch(e){
    console.log(e);
  }
}

//로그인
  const getLogin = async(info) => {
    try{
      const JWT = auth.createToken({
        type: "JWT",
        id: info.ID,
        password: info.password,
      })

      return JWT;
      
    }catch(e){
      console.log(e);
    }
  }

  // const getLogin = async(info) => {
  //   try{
  //     const [results] = await sql.query(`SELECT * FROM user_id_key WHERE id = ${info.ID}`);
  //     auth.createPassword(info.password,results.key).then(async(result)=>{
  //       const [results] = await sql.query(`SELECT * FROM user_info WHERE id = ${info.ID} AND password = ${result}`);
  //       if(results.length > 0){
  //         auth.createToken({
  //           type: "JWT",
  //           id: info.ID,
  //           password: info.password,
  //         }).then((result)=>{
  //           return result;
  //         })
  //       }else{
  //         return false;
  //       }
  //     })
  //   }catch(e){
  //     console.log(e);
  //   }
  // }


//채팅 등록
  const createChatt = async(param) => {
    try{
      await sql.query(`INSERT INTO user_chat (id,des,regidate) VALUES ('${param.ID}','${param.des}',NOW())`);
    }catch(e){
      console.log(e);
    }
  }
  
//채팅 유저 조회
  const getChattUser = async() => {
    try{
      await sql.query(`SELECT DISTINCT id, read, writedate FROM user_chat ORDER BY num desc LIMIT 1`);
    }catch(e){
      console.log(e);
    }
  }

//채팅 목록 조회
const getChattList = async(param) => {
  try{
    const [results] = await sql.query(`SELECT id, read, writedate FROM user_chat WHERE id = '${param.ID}' ORDER BY num desc`);
  }catch(e){
    console.log(e);
  }
}

module.exports = {
  getDupliID : getDupliID,
  createUser : createUser,
  getLogin : getLogin,
  createChatt : createChatt,
  getChattUser : getChattUser,
  getChattList : getChattList,
}
