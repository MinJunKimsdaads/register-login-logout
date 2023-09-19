const crypto1 = require('crypto');
const mongoose = require('mongoose');


const register = (req) => {
    //아이디 중복체크 => 이메일 중복체크 => 패스워드 암호화 => 가입

    // const ttt = UserInfo.findOne();
    // console.log(ttt._id);
    // var newUserInfo = new UserInfo({ID:req.body.ID, password:req.body.password});

    // newUserInfo.save(); 

    // crypto1.randomBytes(64, (err, buf) => {
    //     crypto1.pbkdf2('alswns123!', buf.toString('base64'), 100000, 64, 'sha512', (err, key) => {
    //         console.log(key.toString('base64')); // 'dWhPkH6c4X1Y71A/DrAHhML3DyKQdEkUOIaSmYCI7xZkD5bLZhPF0dOSs2YZA/Y4B8XNfWd3DHIqR5234RtHzw=='
    //         console.log(buf.toString('base64'));
    //     });
    // });

    // crypto1.pbkdf2('alswns123!', 'PN11bE2pZxeEd6GAMppnhj/QGeAWPpFdu8pfA3VdKQDfCY5KhVZg5XHCgnFVTUK7TjXyFAmvskYewc8jzw05jg==', 100000, 64, 'sha512', (err, key) => {
    //     // console.log(key.toString('base64'));
    // });

    
}
