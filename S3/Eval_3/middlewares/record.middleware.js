const fs = require("fs")

const record = (req, res, next) => {
    const _id = req.param.id;
    const method = req.method;
    const DEL_msg = `The document with ${_id} has been deleted.`;
    const PAt_msg = `The document with ${_id} has been updated.`;
    fs.appendFile("records.txt",method == "PATCH" ? `${PAt_msg}\n` : `${DEL_msg}\n`, (err)=>{
        if(err){
            console.log({"error":err})
        }else{
            next();
        }
    })
}
module.exports={record};