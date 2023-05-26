const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    role:{
        type: String,
        default: "user"
    }
})

const userModel = mongoose.model(
    "usermodels",userSchema
)

module.exports = {userModel}