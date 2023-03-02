const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
   title : {
    type : String,
    required : true
   },
   isComplete : {
    type : Boolean,
    default : false
   }
}, {versionKey : false, timestamps : true});

const todoModel = mongoose.model("todos", todoSchema);
module.exports = todoModel;