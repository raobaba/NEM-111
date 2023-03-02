const mongoose=require("mongoose")

const userSchema = new mongoose.Schema({
    name: {type:String, required:true},
    password: {type:String, required:true},
    email: {type:String, required:true,unique:true},
    age:{type:Number, min:20,max:100},
    gender:{type:String, enum : ['Male','Female']}
})

const user=mongoose.model("user",userSchema)
module.exports=user