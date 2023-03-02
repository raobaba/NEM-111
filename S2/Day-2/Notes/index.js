const express = require('express')
const fs = require("fs");
const app = express()
app.use(express.json());
// const {watchMan} = require("./middlewares/watchMan.middleware.js");
// const {timeLogger} = require("./middlewares/timeLoger.middleware.js");
// const {logger} = require("./middlewares/logger.middleware.js");
// const {addRoll} = require("./middlewares/addRoll.middleware.js");
// app.use(addRoll);
// app.use(watchMan);
// app.use(timeLogger);

// app.use(logger);

// app.post("/newstudent",(req,res)=>{
//     console.log(req.body);
//     res.send("New Student has been added !")
// })

// app.use((req,res,next)=>{
//     console.log("1");
//     next();
//     console.log("2");
// })
// app.use((req,res,next)=>{
//     console.log("3");
//     next();
//     console.log("4");
// })

// app.use((req,res,next)=>{
//     if(req.url==="/data"){
//         next();
//     }else{
//         res.send("You cannot access the routes");
//     }
// })
// app.get('/', (req, res) => {
//     console.log("This is the welcome page");
//     res.send("Welcome");
// })
// app.get("/contact",(req,res)=>{
//     res.send("Contact Page");
// })
// app.get("/about",(req,res)=>{
//     res.send("About Page");
// })

// app.get("/data",(req,res)=>{
//     const data = fs.readFileSync("./dummy.txt","utf-8");
//     console.log(data);
//     res.send(data);
// })

const {studentRouter} = require("./routes/student.router.js");
const {teacherRouter} = require("./routes/teacher.router.js");

app.use("/students",studentRouter);
app.use("/teachers",teacherRouter);

app.get("/",(req,res)=>{
    res.send("HOME Page");
})

app.get("/data",(req,res)=>{
    const data={
        siwan:"23C",
        patna:"25c",
        delhi:"24"
    }
    const {city} = req.query;
    console.log(city);
    res.send(`Temparature in ${city} is ${data[city]}`);
})

app.get("/student/:roll",(req,res)=>{
    const roll_no = req.params.roll;
    res.send(`The Roll number of the student is ${roll_no}`);
})

app.listen(3000, () => { 
    console.log('server is running on port 3000') 
})




