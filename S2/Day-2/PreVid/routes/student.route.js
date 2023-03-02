const {Router} = require("express");

const student = Router();

student.post("/create",(req,res)=>{
    res.end("Students Post Request");
})
student.put("/put",(req,res)=>{
    res.end("Students put Request");
})
student.get("/get",(req,res)=>{
    res.end("Students get Request");
})
student.delete("/delete",(req,res)=>{
    res.end("Students delete Request");
})

module.exports = student;