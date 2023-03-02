const express = require('express');
const port = 8000;
const app = express();
const fs = require('fs');

app.use(express.json());

app.get("/textsync", (req, res) =>{
   let data =  fs.readFileSync("text.txt", "utf-8");
   res.status(201).send(data);
});


app.get("/textasync", (req, res) =>{
   fs.readFile("text.txt", "utf-8", (error, data) =>{
    res.status(201).send(data);
   });
 });

 app.get("/textstream", (req, res) =>{
    let stream = fs.createReadStream("text.txt");
    stream.pipe(res);
 });

 app.get("/textpromise", (req, res) =>{
   fs.promises.readFile("text.txt", "utf-8").then((data) =>{
      res.send(data)
   }).catch((error) =>{
      res.send(error)
   })
});


app.listen(port, () =>{
    console.log(`http://localhost:8000`);
})