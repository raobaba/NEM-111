const express = require("express")
require('dotenv').config();
const { connection } = require("./db");
const {heroRouter} = require("./routes/hero.route.js");
const {villainRouter} = require("./routes/villain.route.js");
const app = express()
app.use(express.json())


app.get("/", (req, res) => {
    res.send("Welcome")
})
app.use("/heroes",heroRouter);
app.use("/villain",villainRouter);
app.listen(process.env.port, async () => {
    try {
        await connection
        console.log("Connected to the db")
    } catch (err) {
        console.log("Connection to db failed")
        console.log(err)
    }
    console.log(`http://localhost:${process.env.port}`)
})
