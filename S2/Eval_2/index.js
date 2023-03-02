const express = require("express");
const {studentRouter} = require("./routes/student.router.js");
const {teacherRouter} = require("./routes/teacher.router.js");
const {logger} = require("./middleware/logger.middleware.js")
const app = express();
app.use(express.json());
app.use(logger);

app.get("/",(req,res)=>{
  res.send("Home Page");
})

app.use("/students",studentRouter);
app.use("/teachers",teacherRouter);

app.listen(3000, ()=>{
  console.log("http://localhost:3000");
})