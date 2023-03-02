const express = require('express');
const PORT = 8080;
const app = express();
const connection = require('./db/db');
const movieRoute = require('./routes/movies.route');

app.use(express.json());

app.use("/movies", movieRoute);



app.listen(PORT, () =>{
    console.log(`Listening At the http://localhost:${PORT}`);
    connection();
})