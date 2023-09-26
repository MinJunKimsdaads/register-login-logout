//조회 -> 아이디 중복 체크 후 저장
//패스워드 암호화 필요
const mysql = require('mysql2');
const dbConfig = require('../../config/db.config');

const connection = mysql.createConnection({
    host     : dbConfig.host,
    user     : dbConfig.user,
    password : dbConfig.password,
    database : dbConfig.database
});

connection.connect((error)=>{
    if(error)throw error;
    console.log("Successfully connected to the database. ");
});

module.exports = connection;
