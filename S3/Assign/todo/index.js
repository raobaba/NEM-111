require('dotenv').config()
const express = require('express');
const PORT = process.env.PORT;
const app = express();
const connection = require('./db/db');
const todoRoute = require('./routes/todo.route');

app.use(express.json());

app.use("/todos", todoRoute);



app.listen(PORT, () =>{
    console.log(`Listening At the http://localhost:${PORT}`);
    connection();
})