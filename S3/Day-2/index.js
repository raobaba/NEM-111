const express = require("express")
const { connection, UserModel } = require("./db")
const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Welcome")
})
app.get("/users", async (req, res) => {
    const query = req.query
    const users = await UserModel.find(query)
    res.send(users)
})

app.post("/createuser", async (req, res) => {
    const data = req.body
    const user = new UserModel(data)
    await user.save()
    res.send("user has been created")
})

app.patch("/editusers/:userID", async (req, res) => {
    const userID = req.params.userID
    const payload = req.body
    try {
        const query = await UserModel.findByIdAndUpdate({ _id: userID }, payload)
        res.send(query)
    } catch (err) {
        console.log(err)
        res.send({ "err": "something went wrong" })
    }
})

app.delete("/removeuser/:userID", async (req, res) => {
    const userID = req.params.userID
    try {
        await UserModel.findByIdAndDelete({ _id: userID })
        res.send(`User with user id ${userID} has been deleted from the database`)
    } catch (err) {
        console.log(err)
        res.send({ "err": "something went wrong" })
    }
})


app.listen(3000, async () => {
    try {
        await connection
        console.log("Connected to the db")
    } catch (err) {
        console.log("Connection to db failed")
        console.log(err)
    }
    console.log("Running the server at 3000")
})
