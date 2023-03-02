const express = require("express");
const validator = require("./middleware/validator")
const logger = require("./middleware/logger")
const guard = require("./middleware/guard")


const app = express();
const fs = require("fs");
app.use(logger)

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server has been started !");
})

app.get("/posts",  (req, res) => {
    const data = fs.readFileSync("./posts.json", { encoding: "utf-8" })
    const data1 = JSON.parse(data)
    console.log(data1.posts)
    res.send(data1.posts)
})

app.post("/posts/create", validator , (req, res) => {
    const postdata = req.body;
    const data = fs.readFileSync("./posts.json", { encoding: "utf-8" })
    const data1 = JSON.parse(data)
    const updatedData = data1.posts;
    const newData = [...updatedData, postdata];
    data1.posts = newData;
    fs.writeFileSync("./posts.json", JSON.stringify(data1), { encoding: "utf-8" });
    res.send(newData)
    console.log("Data posted to data base succesfully")
})

app.patch("/posts/:id/:password", guard,  (req, res) => {
    const { name, rating, description, genre, caste } = req.body;
    const { id } = req.params
    const data = fs.readFileSync("./posts.json", { encoding: "utf-8" })
    const data1 = JSON.parse(data)
    const updatedData = data1.posts;
    const newData = updatedData.map((el) => {
        if (el.id == id) {
            return {
                ...el, name:name,rating:rating,description:description,genre:genre,caste:caste
            }
        } else {
            return el;
        }
    })

    data1.posts = newData;
    fs.writeFileSync("./posts.json", JSON.stringify(data1), { encoding: "utf-8" });
    res.send(newData)
    console.log("patch request was excecuted succesfully")
})
app.delete("/posts/:id/:password", guard , (req, res) => {
    const { id } = req.params
    const data = fs.readFileSync("./posts.json", { encoding: "utf-8" })
    const data1 = JSON.parse(data)
    const updatedData = data1.posts;
    const newData = updatedData.filter((el) => el.id != id )
    data1.posts = newData;
    fs.writeFileSync("./posts.json", JSON.stringify(data1), { encoding: "utf-8" });
    res.send(newData)
    console.log("Delete request was excuted")
})

app.listen(3000, () => {
    console.log("http://localhost:3000")
})


