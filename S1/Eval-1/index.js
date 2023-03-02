const express=require("express");
const app=express();
const fs=require("fs");

app.use(express.json());
const dns=require("dns");
app.get('/',(req,res)=>{
    res.send("Welcome to Evaluation First")
})

app.post('/getmeip',(req,res)=>{
    const url=req.body.website_name;
    dns.resolve(url,(err,address)=>{
        if(err){
            console.log(err);
            return;
        }
        res.send(`${address}`)
    })
})

app.get('/products',(req,res)=>{
    const  data = fs.readFileSync("./products.json",{encoding:"utf-8"});
    const parse_data=JSON.parse(data);
    const products=parse_data.products;
    res.send(products)
})


app.post('/products/create',(req,res)=>{
    const payload=req.body;
    const  data = fs.readFileSync('./products.json',{encoding:"utf-8"});
    const parse_data=JSON.parse(data);
    const products=parse_data.products;
    const newData=[...products,payload];
    parse_data.products=newData;
    fs.writeFileSync('./products.json',JSON.stringify(parse_data),{encoding:'utf-8'});
    res.send(parse_data)
})
app.patch('/products/:productId',(req,res)=>{
    const {id,des,name}=req.body;
fs.readFile('./products.json',{encoding:"utf-8"},(err,data)=>{
if(err){
        res.send("something went wrong");
    }
    const parse_data=JSON.parse(data);
    const newData=parse_data.products.map((el)=>{
        if(el.id===id){
            return{...el,des:des,name:name}
        }else{
            return el;
        }
    });
    parse_data.products=newData;
    fs.writeFileSync('./products.json',JSON.stringify(parse_data),{encoding:'utf-8'});
    res.send("product changed patch request was sucessfull")
 });
})

app.delete('/products/:productId',(req,res)=>{
    const {id}=req.body;
fs.readFile('./products.json',{encoding:"utf-8"},(err,data)=>{
if(err){
        res.send("something went wrong");
    }const parse_data=JSON.parse(data);
 const newData=parse_data.products.filter((item)=>item.id!=id)
   parse_data.products=newData;
    fs.writeFileSync('./products.json',JSON.stringify(parse_data),{encoding:'utf-8'});
res.send("product deleted from database")
 });
   
})
app.listen(8080,()=>{
    console.log("http://localhost:8080")
})