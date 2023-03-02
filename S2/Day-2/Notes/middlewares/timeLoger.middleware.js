const timeLogger = (req,res,next)=>{
   if(req.url==="/data"){
       next();
   }else{
       res.send("BYE!!")
   }
}
module.exports = {
    timeLogger
}