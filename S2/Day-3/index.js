const express = require("express");
const app = express();
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Welcome to homepage");
})

app.get("/data",(req,res)=>{
    //the query will be in the req object
    let {query}= req.query
    res.send(`Information about ${query}`)
})

app.get("/weather",(req,res)=>{
    const data={
    delhi:"Winters",
    chennai:"Summers",
    banglore:"winters"
    }
    const {city}=req.query
    const weather=data[city]
    console.log(`It's ${weather} in ${city}`)
    res.send(`It's ${weather} in ${city}`)
})
    
app.listen(3000,()=>{
    console.log("http://localhost:3000");
})
    
