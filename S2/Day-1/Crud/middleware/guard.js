const express = require("express");
const app = express();

const logger = require("./logger.js");
app.use(logger);
const guard = (req,res,next) =>{
   const {password} = req.params;
    if(password == 54213){
        next()
    }else{
        res.send("You are not authorised to do this operation")
    }

}

module.exports = guard;