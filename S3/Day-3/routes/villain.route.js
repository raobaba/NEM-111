const express = require("express");
const villainRouter = express.Router();
const {villainModel} = require("../models/villain.model.js");
villainRouter.get("/", async (req, res) => {
    const query = req.query
    try {
        const villain = await villainModel.find(query)
        res.send(villain)
    } catch (error) {
        console.log(error);
        res.send({"error":"Something went wrong !"});
    }
})
 
villainRouter.post("/add", async (req, res) => {
    const data = req.body
    try {
        const villain = new villainModel(data)
        await villain.save()
        res.send("Added the villain")
    } catch (error) {
        console.log(error);
        res.send({"error":"Something Went wrong !"});
    }

})
villainRouter.patch("/edit/:id", async (req, res) => {
    const ID = req.params.id;
    const payload = req.body
    try {
        await villainModel.findByIdAndUpdate({_id:ID},payload);
        res.send(`Updated the villain data whose id is ${ID}`);
    } catch (err) {
        console.log(err)
        res.send({ "err": "something went wrong" })
    }
})

villainRouter.delete("/delete/:id", async (req, res) => {
    const ID = req.params.id;
    try {
        await villainModel.findByIdAndDelete({ _id: id })
        res.send(`villain with id ${ID} has been deleted from the database`)
    } catch (err) {
        console.log(err)
        res.send({ "err": "something went wrong" })
    }
})

module.exports={
    villainRouter
}

 