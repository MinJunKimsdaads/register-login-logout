const sql = require('./db.tsx');
const crypto = require('crypto');

//중복 아이디 조회
const getDupliID = async(info) => {
  try{
    const [results] = await sql.query(`SELECT * FROM user_info WHERE id = '${info.ID}'`);
    if(results.length > 0){
      sql.release();
      return false;
    }else{
      sql.release();
      return true;
    }
  }catch(e){
    alert(e);
  }
}

//salt 생성
const createSalt = async () => {
  try{
      const salt = await crypto.randomBytes(64);
      return salt.toString('base64');
  }catch(e){
      alert(e);
  }    
}

//암호화
const createPassword = async (password,salt) => {
  try{
      const key = await crypto.pbkdf2(password, salt, 100000, 64, 'sha512');
      return key.toString('base64');
  }catch(e){
      alert(e);
  }   
}

//회원가입
const createUser = async(info) => {
  try{
    createSalt().then(async(result)=>{
        await sql.query(`INSERT INTO user_info (id,key) VALUE ('${info.ID}','${result}')`);

        createPassword(info.password,result).then(async(result)=>{
          await sql.query(`INSERT INTO user_info (id,password,regidate) VALUE ('${info.ID}','${result}',NOW())`);
        })
    });
    sql.release();
  }catch(e){
    alert(e);
  }
}

//로그인
  const getLogin = async(info) => {
    try{
      const [results] = await sql.query(`SELECT * FROM user_info WHERE ID = ${info.ID}`);
      if(results.length > 0){
        sql.release();
        return true;
      }else{
        sql.release();
        return false;
      }
    }catch(e){
      alert(e);
    }
  }

//채팅 등록
  const createChatt = async(param) => {
    try{
      await sql.query(`INSERT INTO user_chat (id,des,regidate) VALUES ('${param.ID}','${param.des}',NOW())`);
      sql.release();
    }catch(e){
      alert(e);
    }
  }
  
//채팅 유저 조회
  const getChattUser = async() => {
    try{
      await sql.query(`SELECT DISTINCT id, read, writedate FROM user_chat ORDER BY num desc LIMIT 1`);
      sql.release();
    }catch(e){
      alert(e);
    }
  }

//채팅 목록 조회
const getChattList = async(param) => {
  try{
    const [results] = await sql.query(`SELECT id, read, writedate FROM user_chat WHERE id = '${param.ID}' ORDER BY num desc`);
    sql.release();
  }catch(e){
    alert(e);
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
