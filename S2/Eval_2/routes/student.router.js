const express = require("express");
const {validator} = require("../middleware/validator.middleware")
const fs = require("fs");

const studentRouter = express.Router();

studentRouter.get("/",(req,res)=>{
    const data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
    res.json(data.students);
})

studentRouter.get("/:rollNo",(req,res)=>{
    const id = req.params.rollNo;
    const data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
    let response;
    data.students.map((ele)=>{
        if(ele.roll_no==id){
            response = ele;
        }
    })
    res.json(response);
})

studentRouter.post("/addstudent",(req,res)=>{
    const data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
    data.students.push(req.body);
    fs.writeFileSync("./db.json",JSON.stringify(data));
    res.send("Student has been added !");
})

studentRouter.use(validator);

studentRouter.patch("/:rollNo",(req,res)=>{
    const id = req.params.rollNo;
    const data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
    data.students.map((ele)=>{
        if(ele.roll_no==id){
            ele.name = req.body.name;
            ele.location = req.body.location;
            ele.course = req.body.course;
        }
    })
    fs.writeFileSync("./db.json",JSON.stringify(data));
    res.send("Patch Student Details");
})

studentRouter.delete("/:rollNo",(req,res)=>{
    const id = req.params.rollNo;
    const data = JSON.parse(fs.readFileSync("./db.json","utf-8"));
    data.students = data.students.filter((ele)=>{
        return ele.roll_no!=id;
    })
    fs.writeFileSync("./db.json",JSON.stringify(data));
    res.send("Deleted students Details");
})

module.exports = {
    studentRouter
}