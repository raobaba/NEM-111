const express = require("express");
const studentRouter = express.Router();
studentRouter.get("/",(req,res)=>{
    res.send("All students");
})
studentRouter.post("/addstudent",(req,res)=>{
    console.log(req.body)
    res.send("All Student added");
})
module.exports={
    studentRouter
}