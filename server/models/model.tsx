const sql = require('./db.tsx');
const auth = require('./auth.tsx');

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

//회원가입
const createUser = async(info) => {
  try{
    auth.createSalt().then(async(result)=>{
        await sql.query(`INSERT INTO user_id_key (id,key) VALUE ('${info.ID}','${result}')`);

        auth.createPassword(info.password,result).then(async(result)=>{
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
      const [results] = await sql.query(`SELECT * FROM user_id_key WHERE id = ${info.ID}`);
      auth.createPassword(info.password,results.key).then(async(result)=>{
        const [results] = await sql.query(`SELECT * FROM user_info WHERE id = ${info.ID} AND password = ${result}`);
        if(results.length > 0){
          auth.createToken({
            type: "JWT",
            id: info.ID,
            password: info.password,
          }).then((result)=>{
            sql.release();
            return result;
          })
        }else{
          sql.release();
          return false;
        }
      })
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
