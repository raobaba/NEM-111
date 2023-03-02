const express = require("express");
const app = express();

const validator = (req,res,next)=>{
    if((req.method === "PATCH" || req.method === "DELETE")){
        if(req.query.role && req.query.pass){
            if(req.query.role === "admin" || req.query.role=== "teacher"){
               if(req.query.pass == "7877"){
                next();
               }else{
                res.send("You are not authorized to do this operation");
               }
            }else{
                res.send("You are not authorized to do this operation");
            }
        }else{
            res.send("You are not authorized to do this operation");
        }
    }else{
        res.send("You are not authorized to do this operation");
    }
}

module.exports = {
    validator
}