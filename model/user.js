const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: {
        type:String,
        required: true,
        uppercase: true,
        minLength: 3,
        maxLength: 50
    },
    phone_no: {
        type: Number,
        min:10,
        max:10
    },
    email: {
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
        minLength: 6,
        maxLength: 50
    }
})