const sql = require('./db.tsx');

//중복 아이디 조회 select
const getDupliID = async (info) => {
  try{
    const [results] = await sql.query(`SELECT * FROM user_info WHERE id = '${info.ID}'`);
    if(results.length > 0){
      return false;
    }else{
      return true;
    }
  }catch(e){
    throw e;
  }

}

//회원가입 insert
const createUser = async (info) => {
  try{
    const [results] = await sql.query(`INSERT INTO user_info (id,password,regidate) VALUE ('${info.ID}','${info.password}',NOW())`);
    console.log(results);
  }catch(e){
    throw e;
  }
}
  // "INSERT INTO user_info "

//로그인 select
  const getLogin = (id) => {
    sql.query(`SELECT * FROM user_info WHERE ID = ${id}`,(error, results, fields)=>{

    })
  }
// "SELECT * FROM user_info WHERE ID = id"

//채팅 insert
  const createChatt = (param) => {
    sql.query(`INSERT INTO user_info (ID, DES) VALUES ?`,param,(error, results, fields)=>{
    
    })
  }
  // "INSERT INTO user_chatting "
  
//채팅 유저 조회 select
  const getChattUser = (param) => {
    sql.query(`INSERT INTO user_info (ID, DES) VALUES ?`,param,(error, results, fields)=>{
    
    })
  }
// "SELECT * FROM user_chatting WHERE ID = id"

//채팅 유저 조회 select
const getChattList = (param) => {
  sql.query(`INSERT INTO user_info (ID, DES) VALUES ?`,param,(error, results, fields)=>{
  
  })
}
// "SELECT * FROM user_chatting WHERE ID = id"
  

module.exports = {
  getDupliID : getDupliID,
  createUser : createUser,
}
