//조회 -> 아이디 중복 체크 후 저장
//패스워드 암호화 필요
const mysql = require('mysql2');
const dbConfig = require('../../config/dbconfig.jsx');

const connection = mysql.createPool({
    host     : dbConfig.host,
    user     : dbConfig.user,
    password : dbConfig.password,
    database : dbConfig.database
});

const db = connection.promise();

module.exports = db;
