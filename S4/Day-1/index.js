const express = require("express")
const { connection } = require("./config/db");
const {UserModel} = require("./models/User.model.js");
const app = express()
const jwt=require("jsonwebtoken")
app.use(express.json());
app.post("/register", async (req, res) => {
    try {
        const user = new UserModel(req.body)
        await user.save()
    } catch (err) {
        console.log(err)
    }
    res.send("Registered")
})
app.post("/login", async (req, res) => {
    const { email, pass } = req.body;
    try {
        const user = await UserModel.find({ email, pass });
        const token = jwt.sign({course:'backend'},'masai');
        if (user.length > 0) {
            res.send({ "msg": "Login Successful", "token": token });
        } else {
            res.send("Login Failed")
        }
    } catch (err) {
        console.log(err)
    }
})
app.get("/data", (req, res) => {
    if (req, query.token === "abc123") {
        res.send("Loggen in and can access the data")
    } else {
        res.send("Not Loggen in, login first")
    }
})
app.get("/cart", (req, res) => {
    if (req, query.token === "abc123") {
        res.send("Loggen in and can access the cart")
    } else {
        res.send("Not Loggen in, login first")
    }
})
app.listen(8080, async () => {
    try {
        await connection
    } catch (err) {
        console.log(err)
    }
    console.log("Running at 8080 Port")
})
