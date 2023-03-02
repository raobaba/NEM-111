const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.get("/data",(req,res)=>{
    const data = fs.readFileSync("./db.json","utf-8");
    const parsed_data = JSON.parse(data);
    console.log(parsed_data);
    res.send("You got data in the terminal");
})

app.post("/addstudent",(req,res)=>{
    const data = fs.readFileSync("./db.json","utf-8");
    const parsed_data = JSON.parse(data);
    parsed_data.student.push(req.body);
    fs.writeFileSync("./db.json",JSON.stringify(parsed_data));
    res.send("Database updated");
})


app.listen(3000,()=>{
    console.log("http://localhost:3000");
})