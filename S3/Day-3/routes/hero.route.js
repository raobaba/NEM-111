const express = require("express");
const heroRouter = express.Router();
const {heroModel} = require("../models/hero.model.js");
heroRouter.get("/", async (req, res) => {
    const query = req.query
    try {
        const heroes = await heroModel.find(query)
        res.send(heroes)
    } catch (error) {
        console.log(error);
        res.send({"error":"Something went wrong !"});
    }
})

heroRouter.post("/add", async (req, res) => {
    const data = req.body
    try {
        const hero = new heroModel(data)
        await hero.save()
        res.send("Added the hero")
    } catch (error) {
        console.log(error);
        res.send({"error":"Something Went wrong !"});
    }

})
 

heroRouter.patch("/edit/:id", async (req, res) => {
    const ID = req.params.id;
    const payload = req.body
    try {
        await heroModel.findByIdAndUpdate({_id:ID},payload);
        res.send(`Updated the hero data whose id is ${ID}`);
    } catch (err) {
        console.log(err)
        res.send({ "err": "something went wrong" })
    }
})

heroRouter.delete("/delete/:id", async (req, res) => {
    const ID = req.params.id;
    try {
        await heroModel.findByIdAndDelete({ _id: id })
        res.send(`Hero with id ${ID} has been deleted from the database`)
    } catch (err) {
        console.log(err)
        res.send({ "err": "something went wrong" })
    }
})
module.exports={
    heroRouter
}