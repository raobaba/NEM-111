const mongoose = require("mongoose")
const BookSchema = mongoose.Schema({
    title: String,
    genre: String,
    price: Number,
    author:String
})
const BookModel = mongoose.model("book", BookSchema)


module.exports = { BookModel }