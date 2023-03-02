const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello World");
})

// app.post("/addData",(req,res)=>{
//     console.log(req.body);
//     res.send("Data has been recorded");
// })

app.get("/data",(req,res)=>{
    const data = fs.readFileSync("./db.json","utf-8");
    const parsed_data = JSON.parse(data);
    console.log(parsed_data);
    res.send("You got data in the terminal");
})

app.post("/addstudent",(req,res)=>{
    //first read the file
    const data = fs.readFileSync("./db.json","utf-8");
    //parse the data to add a new student
    const parsed_data = JSON.parse(data);
    //adding the new student
    parsed_data.student.push(req.body);
    fs.writeFileSync("./db.json",JSON.stringify(parsed_data));
    res.send("Database updated");
})
app.post("/addteacher",(req,res)=>{
    const data = fs.readFileSync("./db.json","utf-8");
    const parsed_data = JSON.parse(data);
    parsed_data.teacher.push(req.body);
    fs.writeFileSync("./db.json",JSON.stringify(parsed_data));
    res.send("Database Updated")
})


app.listen(9000,()=>{
    console.log("http://localhost:9000");
})