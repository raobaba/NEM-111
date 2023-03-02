const express = require("express");
const app = express();

const logger = require("./logger.js");
app.use(logger);
const validator = (req, res, next) => {
    const { id, name, rating, description, genre, caste } = req.body;
    if (typeof id == "number" && typeof name == "string" && typeof rating == "number" && typeof description == "string" && typeof caste == "string") {
        next()
    } else {
        res.send("Validation failed")
    }
}

module.exports = validator;