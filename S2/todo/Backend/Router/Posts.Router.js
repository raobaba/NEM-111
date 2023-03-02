const express = require('express');
const app = express.Router();
const db = require('../db.json');
const fs = require('fs');

// Get The Data From db.json Posts
app.get("/", (req, res) =>{
    res.status(201).send(db.posts);
});

// Insert The Data inside db.json posts
app.post('/', (req, res) =>{
    db.posts.push(req.body);
    fs.writeFile("../db.json", JSON.stringify(db),"utf-8", () =>{
        res.status(201).send(req.body);
    })
});

//Delete The Items Inside posts
app.delete('/:id', (req, res) =>{
    let id = +req.params.id;
   let posts =  db.posts.filter((posts) =>{
        return posts.id !== id;
    });

    db.posts = posts;
    fs.writeFile("../db.json", JSON.stringify(db),"utf-8", () =>{
        res.status(201).send("Deleted Successfully!");
    })
});

// Update The Items inside db.json posts
app.put("/:id", (req, res) =>{
    let id = +req.params.id;
    let posts = db.posts.map((posts) =>{
        return posts.id == id
    });

    db.posts = posts;
    fs.writeFile("../db.json", JSON.stringify(db),"utf-8", () =>{
        res.status(201).send("Deleted Successfully!");
    })

})


module.exports = app;

