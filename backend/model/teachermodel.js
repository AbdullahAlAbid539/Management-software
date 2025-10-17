const mongoose = require ('mongoose')
const {Schema} = mongoose;

const teacherSchema = new Schema({
    teachername: String,
    department : String,
    teacherid: Number,
    phonenumber: Number
})

module.exports = mongoose.model("Teacher",teacherSchema)