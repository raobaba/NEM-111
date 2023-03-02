const mongoose=require("mongoose")

const blogSchema = new mongoose.Schema ({
    isCompleted: {type:Boolean,default:false},
    content:{type:String, requred:true},
    author:{type:String,ref:"User"}
})

const blog=mongoose.model("blog",blogSchema)
module.exports= blog