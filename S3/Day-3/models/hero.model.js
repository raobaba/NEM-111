const mongoose = require("mongoose");
const heroSchema = mongoose.Schema({
    name:String,
    city:String,
    power:Number,
    villain:String,
    language:String,
    is_active:Boolean
})
const heroModel = mongoose.model("heroe",heroSchema);
module.exports={
    heroModel
}