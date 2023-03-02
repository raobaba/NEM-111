const Validator = (req, res, next) => {
    if (req.method == "POST") {
        const payload = req.body;
        if (payload.title && payload.genre && payload.price && payload.author) {
            if ((typeof payload.title === "string")
                && (typeof payload.genre === "string")
                && (typeof payload.price === "number")
                && (typeof payload.author === "string")) {
                next()
            }
            else {
                res.send("All the fields are not there")
            }
        }
        else {
            res.send("All the fields are not there")
        }
    }
    else {
        next()
    }
}
module.exports = { Validator }