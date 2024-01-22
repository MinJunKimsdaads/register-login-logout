//조회 -> 아이디 중복 체크 후 저장
//패스워드 암호화 필요
const mysql = require('mysql2');
<<<<<<< HEAD
// const dbConfig = require('../db/dbConfig.tsx');
const env = require("dotenv").config({ path: "../../config/dbconfig.jsx" });
=======
const dbConfig = require('../../config/dbconfig.jsx');
>>>>>>> fc23810a6149af4bf7e73b560bd8fb51244dcc44

const connection = mysql.createPool({
    host     : env.host,
    user     : env.user,
    password : env.password,
    database : env.database
});

const db = connection.promise();

module.exports = db;
