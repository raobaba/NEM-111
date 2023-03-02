const express=require("express")
const app=express.Router()
const user=require("../schemaModels/user.model")


app.get("/",async (req,res)=>{
    try{
    const list= await user.find({}, {"name": 1,"email":1})
    res.send(list)
    }catch{
    res.status(401).send("Enter correct details")
   }
})


app.get("/:id",async (req,res)=>{
    let token=req.headers.token;
    try{
    if(token){
        token=token.split(":");
        let id=token[0]
        let email=token[1]
        let password=token[2]
         
        let auth=await user.findById(id)
        if(auth.email===email && auth.password===password){
            req.id=id;
            const list= await user.findOne({_id:id}, {"name": 1,"email":1,"password":1})
            res.send(list)
        }else{
            res.status(401).send("authentication failed")
        }
    }else{
        res.status(401).send("Operation not allowed.")
    }

   
   }catch{
    res.status(401).send("Operation not allowed.")
   }
})

app.post("/",async (req,res)=>{
    let newuser=req.body
   try{
    await user.create(newuser)
    res.send(req.body)
   }catch{
    res.status(401).send("Enter correct details")
   }
   
})

app.delete("/:id",async (req,res)=>{
        const token=req.headers.token
    if(token){
        const id=token.split(":")[0]
        await user.findByIdAndDelete(id)
        res.send("User Deleted")
    }else{
        res.send("Operation not allowed.")
    }
})

module.exports= app