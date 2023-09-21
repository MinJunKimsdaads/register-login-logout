//조회 -> 아이디 중복 체크 후 저장
//패스워드 암호화 필요
const mysql = require('mysql2');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'alswns123!A',
    database : 'justright'
});

connection.connect();

connection.query('SELECT * from user_info', (error, rows, fields) => {
    if (error) throw error;
    console.log('User info is: ', rows);
});

connection.end();