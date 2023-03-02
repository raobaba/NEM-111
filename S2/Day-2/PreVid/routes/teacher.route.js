const {Router} = require("express");
const teacher = Router();


teacher.post("/create",(req,res)=>{
    res.end("Teachers post Request");
})
teacher.put("/put",(req,res)=>{
    res.end("Teachers put Request");
})
teacher.get("/get",(req,res)=>{
    res.end("Teachers get Request");
})
teacher.delete("/delete",(req,res)=>{
    res.end("Teachers delete Request");
})

module.exports = teacher;