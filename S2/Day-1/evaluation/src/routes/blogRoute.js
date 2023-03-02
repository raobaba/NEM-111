const express=require("express")
const app=express.Router()
const blog=require("../schemaModels/blog.model")

const blogAuth=async (req,res,next)=>{
    let token=req.headers.token;
    
    if(token){
        token=token.split(":");
        let id=token[0]
       try{
        let auth=await blog.findOne({author:id})
       
        if(auth){
            req.id=id;
            next()
        }else{
            res.status(401).send("Operation not allowed.")
        }
       }
       catch{
        res.status(401).send("Operation not allowed.")
       }
    }else{
        res.status(401).send("Operation not allowed.")
    }
    }
app.use(blogAuth)
app.get("/",async (req,res)=>{
    let token=req.headers.token;
    let limit=req.query.limit || 5
    page=req.query.page || 1
    if(token){
        token=token.split(":");
        let id=token[0]
       try{
        let auth=await blog.find({author:id}).skip((page-1)*limit).limit(limit)
       
        if(auth){
            res.send(auth)
           
        }else{
            res.status(401).send("Operation not allowed.")
        }
       }
       catch{
        res.status(401).send("Operation not allowed.")
       }
    }else{
        res.status(401).send("Operation not allowed.")
    }
  
    
})


app.get("/:id",async (req,res)=>{
    try{
        let token=req.url.split("/");
        let id=token[token.length-1]
     let t=await blog.findById(id)
     if(t){
        res.send(t)
     }else{
        res.status(401).send("Operation not allowed.")
     }
    }catch{
     res.status(401).send("Operation not allowed.")
    }
 })


app.post("/",async (req,res)=>{
   try{
    let newblog=req.body
    await blog.create(newblog)
     res.send(req.body)
   }catch{
    res.status(401).send("Operation not allowed.")
   }
})

app.patch("/:id",async (req,res)=>{
   try{
    let newblog=req.body
    let token=req.url.split("/");
    let id=token[token.length-1]
   let updated=await blog.findByIdAndUpdate(id,{...newblog},{new:true})
   if(updated){
    res.send(updated)
   }else{
    res.status(401).send("Operation not allowed.")
   }
   }catch{
    res.status(401).send("Operation not allowed.")
   }
})

app.delete("/:id",async (req,res)=>{
   try{
        let token=req.url.split("/");
        let id=token[token.length-1]
        await blog.findByIdAndDelete(id)
        res.send("done")
   }
    catch{
        res.send("enter token")
    }
 
})


module.exports= app