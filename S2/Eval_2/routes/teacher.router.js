const express = require("express");

const fs = require("fs");

const teacherRouter = express.Router();

teacherRouter.get("/",(req,res)=>{
    const data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
    res.json(data.teachers);
})

teacherRouter.get("/:empID",(req,res)=>{
    const id = req.params.empID;
    const data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
    let response;
    data.teachers.map((ele)=>{
        if(ele.emp_id==id){
            response = ele;
        }
    })
    res.json(response);
})

teacherRouter.post("/addteacher",(req,res)=>{
    const data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
    data.teachers.push(req.body);
    fs.writeFileSync("./db.json",JSON.stringify(data));
    res.send("Teacher has been added !");
})


teacherRouter.patch("/:empID",(req,res)=>{
    const id = req.params.empID;
    const data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
    data.teachers.map((ele)=>{
        if(ele.emp_id==id){
            ele.sub = req.body.sub;
            ele.exp = req.body.exp;
        }
    })
    fs.writeFileSync("./db.json",JSON.stringify(data));
    res.send("Patch Teacher Details");
})

module.exports = {
    teacherRouter
}