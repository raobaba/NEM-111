const express = require("express");
const { NoteModel } = require("../models/Note.model.js");
const noteRouter = express.Router();
noteRouter.get("/", (req, res) => {
    res.send("All the notes")
})

noteRouter.post("/create", async (req, res) => {
    const payload = req.body;
    try {
        const new_note = new NoteModel(payload);
        await new_note.save();
        res.send("Created the Note");
    } catch (error) {
        console.log(err);
        res.send({ "message": "Something went wrong" });
    }
})

noteRouter.patch("/update/:id", (req, res) => {
    const payload = req.body;
    res.send("Updated the Note");
})

noteRouter.post("/delete/:id", (req, res) => {
    res.send("Deleted the Note");
})


module.exports = {
    noteRouter
}