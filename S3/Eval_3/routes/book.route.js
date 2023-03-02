const express = require("express")
const { BookModel } = require("../models/book.model")
const bookRouter = express.Router();
const { Validator } = require("../middlewares/validator.middleware.js")
const { record } = require("../middlewares/record.middleware.js");

bookRouter.get("/", async (req, res) => {
    const params = req.query
    try {
        const book = await BookModel.find(params)
        res.send(book)
    }
    catch (error) {
        console.log(error)
        res.send({ "error": "error in loading..." })
    }
})
bookRouter.use(Validator)
bookRouter.post("/post", async (req, res) => {
    const payload = req.body
    try {
        const bookNote = new BookModel(payload)
        await bookNote.save()
        res.send("Book has been posted !")
    }
    catch (error) {
        console.log(error)
        res.send("error")
    }
})
bookRouter.use(record);
bookRouter.patch("/update/:id", async (req, res) => {
    const id = req.params.id
    const payload = req.body;
    try {
        const q = await BookModel.findByIdAndUpdate({ _id: id }, payload)
        console.log(q)
        res.send("Notes has been updated !")
    }
    catch (error) {
        console.log(error)
        res.send("error")
    }
})

bookRouter.delete("/delete/:id", async (req, res) => {
    const id = req.params.id
    try {
        await BookModel.findByIdAndDelete({ _id: id })
        res.send(`Book with ID ${id} has been deleted`)
    }
    catch (error) {
        console.log(error)
        res.send("error")
    }
})


module.exports = { bookRouter }