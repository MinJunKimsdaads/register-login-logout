const sql = require('./db.tsx');

//중복 아이디 조회 select
const getDupliID = (id) => {
  sql.query(`SELECT * FROM user_info WHERE ID = ${id}`,(error, results, fields)=>{

  })
}
// "SELECT * FROM user_info WHERE ID = id"

//회원가입 insert
const createUser = (param) => {
  sql.query(`INSERT INTO user_info (ID,PASSWORD,DATE) VALUES ?`,param,(error, results, fields)=>{
    
  })
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
  

// module.exports = {
  
// }
