const express = require("express")
const { connect } = require("./config/db.js")
const { bookRouter } = require("./routes/book.route.js")
require('dotenv').config()
const app = express()

require('dotenv').config()
app.use(express.json())
app.get("/", (req, res) => {
    res.send({ "message": "Server is being starting...." })
})
app.use("/books", bookRouter)
app.listen(process.env.port, async () => {
    try {
        await connect;
        console.log("Connection has been established !")
    }
    catch (err) {
        console.log("Connection has been failed", err)
    }
    console.log(`http://localhost:${process.env.port}`)
})
