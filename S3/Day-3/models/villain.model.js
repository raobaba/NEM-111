const mongoose = require("mongoose");

const villainSchema = mongoose.Schema({
    name:String,
    power:Number
})
const villainModel = mongoose.model("villain",villainSchema);
module.exports={
    villainModel
}