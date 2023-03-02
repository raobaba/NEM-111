const express = require("express");

const auth = (req, res, next) => {
    if (req.body&&Number(req.body.id) && String(req.body.Name)
     && Number(req.body.Rating)
     && String(req.body.Description) &&String(req.body.Genre) && String(req.body.Cast)) {
        next();
    } else {
        res.status(400).send("Not Authedicated");
    }
};

const app = express();
app.use(express.json());
app.use(auth)

app.get("/", (req, res) => {
    res.send("Welcome To EXPRESS - VALIDATION MIDDLEWARE");
})
app.post("/", (req, res) => {
    res.send("Authentication Successful");
})
app.listen("8000", () => {
    console.log("Listening on http://localhost:8000")
})