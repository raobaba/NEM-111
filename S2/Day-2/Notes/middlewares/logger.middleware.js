const fs = require("fs");
const logger = (req,res,next)=>{
 
      fs.appendFileSync("./logs.txt",`Method:${req.method} Route: ${req.url} \n`,"utf-8");
      next();
}
module.exports={
    logger
}