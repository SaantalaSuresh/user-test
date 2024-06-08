const mongoose = require("mongoose");


const UserSchema= mongoose.Schema({
    username:{
        type:String,required:true
    },
    gender:{
        type:String,required:true
    }
})


 const USER = mongoose.model('user', UserSchema);

 module.exports = USER;