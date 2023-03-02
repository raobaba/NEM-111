const mongoose = require("mongoose")
const connection = mongoose.connect("mongodb://127.0.0.1:27017/masaidb")


const userSchema = mongoose.Schema({
    name: String,
    age: Number,
    legal: Boolean,
    city: String,
    language: String
})
//model
const UserModel = mongoose.model("user", userSchema)
module.exports = {
    UserModel,
    connection
}