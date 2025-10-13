const mongoose = require("mongoose")
const { Schema } = mongoose;

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    dateofbirth: Date,
    idno: Number
})

module.exports = mongoose.model("User",userSchema)

