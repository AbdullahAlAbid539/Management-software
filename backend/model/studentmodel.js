const mongoose = require("mongoose")
const { Schema } = mongoose;

const studentSchema = new Schema({
    studentname:String,
    department: String,
    studentid: Number,
    phonenumber: Number,
    result: Number
})

module.exports = mongoose.model("Student",studentSchema)