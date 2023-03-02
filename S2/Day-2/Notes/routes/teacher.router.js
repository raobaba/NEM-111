const express = require("express");
const teacherRouter = express.Router();
teacherRouter.get("/",(req,res)=>{
    res.send("All teacher");
})
teacherRouter.post("/addteacher",(req,res)=>{
    console.log(req.body)
    res.send("All teacher added");
})
module.exports={
    teacherRouter
}