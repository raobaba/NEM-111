const express = require("express");
require('dotenv').config();
const { connection } = require("./config/db");
const { userRouter } = require("./routes/User.route.js");
const { noteRouter } = require("./routes/Note.route.js");
const { authenticate } = require("./middlewares/authenticate.middleware.js");
const app = express()
app.use(express.json())
app.get("/", (req, res) => {
    res.send("Home page")
})
app.use("/users", userRouter);
app.use(authenticate);
app.use("/notes", noteRouter);

app.listen(process.env.port, async () => {
    try {
        await connection
        console.log("Connection has been established")
    } catch (err) {
        console.log("Trouble connecting to database");
        console.log(err)
    }
    console.log(`http://localhost:${process.env.port}`)
})

