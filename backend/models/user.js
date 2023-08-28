const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type:String,
    },
    email: {
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    role: {
        type:String,
        default: 'visitor',
    },
})
const UserModel = mongoose.model('userInfo', userSchema);

module.exports = UserModel