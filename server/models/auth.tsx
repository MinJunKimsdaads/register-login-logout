const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserInfo = new Schema({
    ID: String,
    password: String,
    regidate:{
        type:Date,
        default:Date.now
    }
})

const ChatList = new Schema({
    ID: String,
    Des: String,
    read: Boolean,
    regidate:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('UserInfo',UserInfo);
