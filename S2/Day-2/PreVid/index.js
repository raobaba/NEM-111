const express = require("express");
const app = express();

const teacherRouter = require("./routes/teacher.route.js");
const studentRouter = require("./routes/student.route.js");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use((req,res,next)=>{
    console.log('Got request',req.query);
    if(!req.query.apiKey){
       return res.status(401).send("No API key is provided");
    }
    next();
})

app.get("/",(req,res)=>{
    res.end("Welcome To PreVid");
})

// app.use("/teacher",teacherRouter);
// app.use("/student",studentRouter);

app.listen(3000,()=>{
    console.log("http://localhost:3000");
})