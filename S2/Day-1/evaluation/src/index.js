const express =require("express")
const dbConnect =require("./config/db")
const UserRouter =require("./routes/userRoute.js")
const BlogRouter=require("./routes/blogRoute.js")


let PORT = 8080;

const app =express()
app.use(express.json());

app.use("/users", UserRouter);
app.use("/blogs",BlogRouter);

app.listen(PORT,async ()=>{
await dbConnect()
console.log(`Listening on http://localhost:${PORT}`)
 })