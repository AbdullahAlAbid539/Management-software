const mongoose = require("mongoose")
const { Schema } = mongoose;

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    date: Date,
    id: Number
})

module.exports = mongoose.model("User",userSchema)

